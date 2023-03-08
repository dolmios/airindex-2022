import Image from "next/image";
import useSWR from "swr";

import Table from "../components/Table";
import { theme } from "../components/Theme";

export default function Cleaners(): JSX.Element {
  const { data, error } = useSWR(`/build-cleaners`);

  return (
    <main id="Cleaners">
      <section>
        <h1>Airbnb Cleaning Companies</h1>

        <aside style={{ marginTop: `${theme.space.c}rem` }}>
          <h4>How do we choose companies?</h4>
          <p>
            We include as many companies on our site as we can
            {data && data.length > 0 ? <b>&nbsp;(currently {data.length})</b> : ""}. There
            isn&apos;t a specific criteria for inclusion.
          </p>
          <p>
            If you have any corrections, removals, additions, or edits to make, please find the{" "}
            <b>Submit</b> button at the top of the page.
          </p>
        </aside>
      </section>
      <section>
        <Table
          body={
            data && data.length > 0
              ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                data.map((item: any) => [
                  <Image
                    key={item.id + (item.favicon || "")}
                    alt={item.company}
                    height={16}
                    src={`${process.env.NEXT_PUBLIC_SUPABASE_ENDPOINT}/storage/v1/object/public/cleaners/${item.id}.png`}
                    style={{
                      verticalAlign: "middle",
                    }}
                    width={16}
                  />,
                  item.company,
                  item.location,
                  item.established,
                  <a
                    key={item.id + item.website}
                    href={item.website || "#"}
                    rel="noreferrer"
                    target="_blank">
                    <button disabled={!item.website} type="button">
                      Website
                    </button>
                  </a>,
                  <a
                    key={item.id + item.blog}
                    href={item.blog && item.blog !== "-" ? item.blog : "#"}
                    rel="noreferrer"
                    target="_blank">
                    <button disabled={item.blog === "-" || !item.blog} type="button">
                      Blog
                    </button>
                  </a>,
                ])
              : []
          }
          error={error}
          head={["", "Company", "Primary Location", "Established", "Website", "Blog"]}
          loading={!data && !error}
        />
      </section>
    </main>
  );
}
