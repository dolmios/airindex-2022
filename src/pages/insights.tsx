import useSWR from "swr";

import Modal from "../components/Modal";
import Table from "../components/Table";
import { theme } from "../components/Theme";

export default function Insights(): JSX.Element {
  const { data, error } = useSWR(`/build-insights`);
  return (
    <main id="Insights">
      <section>
        <h1>Market Insights</h1>
        <code>Updated 1st of November 2022</code>

        <aside style={{ marginTop: `${theme.space.c}rem`, marginBottom: `${theme.space.c}rem` }}>
          <h4>How do we get our data?</h4>
          <p>
            We scrape Airbnb listings and reverse-engineer the calendar data to get the occupancy
            rate. We don&apos;t modify the data in any way – so it may include duplicate listings,
            or any other funky stuff that Airbnb does.
          </p>
          <p>
            You can learn more about web scraping here:{" "}
            <a
              className="border"
              href="https://en.wikipedia.org/wiki/Web_scraping"
              rel="noreferrer"
              target="_blank">
              https://en.wikipedia.org/wiki/Web_scraping
            </a>
          </p>
        </aside>

        {data && data.length > 0 ? (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data.map((item: any) => (
            <aside key={item.reference} style={{ marginTop: `${theme.space.c}rem` }}>
              <h3>{item.data.area_info.geom.name.city || item.reference}</h3>
              <p>{item.data.area_info.geom.name.state}</p>

              <p>
                For the past month, the average nightly rate was{" "}
                <b>
                  {item.data.data.calendar_months.room_type.entire_place.adr["50th_percentile"]
                    ? item.data.data.calendar_months.room_type.entire_place.adr[
                        "50th_percentile"
                      ].toLocaleString("en-AU", {
                        currency: "AUD",
                        style: "currency",
                      })
                    : "N/A"}
                </b>{" "}
                with an occupancy rate of{" "}
                <b>
                  {item.data.data.calendar_months.room_type.entire_place.occ["50th_percentile"]
                    ? `${(
                        item.data.data.calendar_months.room_type.entire_place.occ[
                          "50th_percentile"
                        ] * 100
                      ).toFixed(2)}%`
                    : "N/A"}
                </b>
                .
              </p>

              <Modal
                title={item.data.area_info.geom.name.city || item.reference}
                trigger={<button type="button">View Data</button>}>
                <p className="mbd">Data for the past 30 days from the last update.</p>
                <Table
                  body={[
                    [
                      "Average Nightly",
                      item.data.data.calendar_months.room_type.entire_place.adr["50th_percentile"]
                        ? item.data.data.calendar_months.room_type.entire_place.adr[
                            "50th_percentile"
                          ].toLocaleString("en-AU", {
                            currency: "AUD",
                            style: "currency",
                          })
                        : "N/A",
                    ],
                    [
                      "Occupancy Rate",
                      item.data.data.calendar_months.room_type.entire_place.occ["50th_percentile"]
                        ? `${(
                            item.data.data.calendar_months.room_type.entire_place.occ[
                              "50th_percentile"
                            ] * 100
                          ).toFixed(2)}%`
                        : "N/A",
                    ],
                    [
                      "Average Payout",
                      item.data.data.calendar_months.room_type.entire_place.revenue[
                        "50th_percentile"
                      ]
                        ? item.data.data.calendar_months.room_type.entire_place.revenue[
                            "50th_percentile"
                          ].toLocaleString("en-AU", {
                            currency: "AUD",
                            style: "currency",
                          })
                        : "N/A",
                    ],
                    [
                      "Average Reviews",
                      item.data.data.calendar_months.room_type.entire_place.reviews[
                        "50th_percentile"
                      ]
                        ? item.data.data.calendar_months.room_type.entire_place.reviews[
                            "50th_percentile"
                          ].toLocaleString("en-AU", {
                            currency: "AUD",
                            style: "currency",
                          })
                        : "N/A",
                    ],
                    [
                      "Average Rating",
                      item.data.data.calendar_months.room_type.entire_place.rating[
                        "50th_percentile"
                      ]
                        ? item.data.data.calendar_months.room_type.entire_place.rating[
                            "50th_percentile"
                          ].toLocaleString("en-AU", {
                            currency: "AUD",
                            style: "currency",
                          })
                        : "N/A",
                    ],
                  ]}
                  head={["Statistic", "Data"]}
                />
              </Modal>
            </aside>
          ))
        ) : error ? (
          <p>There was an error, please try again later.</p>
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </main>
  );
}
