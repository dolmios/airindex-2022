import useSWR from 'swr';

import Modal from '../components/Modal';

export default function Insights(): JSX.Element {
  const { data, error } = useSWR(`/build-insights`);
  return (
    <section id='Insights'>
      <div className='summary'>
        <h1>Insights</h1>
        <p>Updated 1st of November (YTD)</p>
      </div>
      <div className='mtc disclaimer'>
        <article>
          <div className='title'>
            <h4>How do we get our data?</h4>
          </div>
          <div className='description'>
            <p>
              We scrapes Airbnb listings and reverse engineers the calendar data to get
              the occupancy rate. These are simply insights, and we don&apos;t modify
              the data in any way - so it may include duplicate listings, or any other
              funky stuff that Airbnb does.
            </p>
            <p>
              In less technical terms, we use some code to make a fancy spreadsheet.
            </p>
            <p>
              You can learn more about web scraping here:{' '}
              <a href='https://en.wikipedia.org/wiki/Web_scraping'>
                https://en.wikipedia.org/wiki/Web_scraping
              </a>
            </p>
          </div>
        </article>
      </div>

      <div className='articles mtd'>
        {data && data.length > 0 ? (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data.map((item: any) => (
            <article key={item.reference}>
              <div className='title'>
                <h3>{item.data.area_info.geom.name.city || item.reference}</h3>
                <p>{item.data.area_info.geom.name.state}</p>
              </div>
              <div className='description'>
                <p>
                  For the past month, the average nightly rate was{' '}
                  <b>
                    {item.data.data.calendar_months.room_type.entire_place.adr[
                      '50th_percentile'
                    ]
                      ? item.data.data.calendar_months.room_type.entire_place.adr[
                          '50th_percentile'
                        ].toLocaleString('en-AU', {
                          currency: 'AUD',
                          style: 'currency',
                        })
                      : 'N/A'}
                  </b>{' '}
                  with an occupancy rate of{' '}
                  <b>
                    {item.data.data.calendar_months.room_type.entire_place.occ[
                      '50th_percentile'
                    ]
                      ? `${(
                          item.data.data.calendar_months.room_type.entire_place.occ[
                            '50th_percentile'
                          ] * 100
                        ).toFixed(2)}%`
                      : 'N/A'}
                  </b>
                  .
                </p>
                <div className='mtc'>
                  <Modal
                    title={item.data.area_info.geom.name.city || item.reference}
                    trigger={<button>View Data</button>}>
                    <div>
                      <p className='mbd'>
                        Data for the past 30 days from the last update.
                      </p>
                      <table>
                        <thead>
                          <tr>
                            <th>Statistic</th>
                            <th>Data</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Average Nightly</td>
                            <td>
                              {item.data.data.calendar_months.room_type.entire_place
                                .adr['50th_percentile']
                                ? item.data.data.calendar_months.room_type.entire_place.adr[
                                    '50th_percentile'
                                  ].toLocaleString('en-AU', {
                                    currency: 'AUD',
                                    style: 'currency',
                                  })
                                : 'N/A'}
                            </td>
                          </tr>
                          <tr>
                            <td>Occupancy Rate</td>
                            <td>
                              {item.data.data.calendar_months.room_type.entire_place
                                .occ['50th_percentile']
                                ? `${(
                                    item.data.data.calendar_months.room_type
                                      .entire_place.occ['50th_percentile'] * 100
                                  ).toFixed(2)}%`
                                : 'N/A'}
                            </td>
                          </tr>
                          <tr>
                            <td>Average Payout</td>
                            <td>
                              {item.data.data.calendar_months.room_type.entire_place
                                .revenue['50th_percentile']
                                ? item.data.data.calendar_months.room_type.entire_place.revenue[
                                    '50th_percentile'
                                  ].toLocaleString('en-AU', {
                                    currency: 'AUD',
                                    style: 'currency',
                                  })
                                : 'N/A'}
                            </td>
                          </tr>
                          <tr>
                            <td>Average Capacity</td>
                            <td>
                              {item.data.data.rental_counts.average.accommodates
                                ? item.data.data.rental_counts.average.accommodates
                                : 'N/A'}
                            </td>
                          </tr>
                          <tr>
                            <td>Average Bedrooms</td>
                            <td>
                              {item.data.data.rental_counts.average.bedrooms
                                ? item.data.data.rental_counts.average.bedrooms
                                : 'N/A'}
                            </td>
                          </tr>

                          <tr>
                            <td>Entire Homes</td>
                            <td>
                              {item.data.data.rental_counts.counts.entire_place.all
                                ? item.data.data.rental_counts.counts.entire_place.all
                                : 'N/A'}
                            </td>
                          </tr>
                          <tr>
                            <td>Private Rooms</td>
                            <td>
                              {item.data.data.rental_counts.counts.private_room.all
                                ? item.data.data.rental_counts.counts.private_room.all
                                : 'N/A'}
                            </td>
                          </tr>
                          <tr>
                            <td>Shared Rooms</td>
                            <td>
                              {item.data.data.rental_counts.counts.shared_room?.all
                                ? item.data.data.rental_counts.counts.shared_room?.all
                                : 'N/A'}
                            </td>
                          </tr>
                          <tr>
                            <td>Hotel Rooms</td>
                            <td>
                              {item.data.data.rental_counts.counts.hotel_room?.all
                                ? item.data.data.rental_counts.counts.hotel_room?.all
                                : 'N/A'}
                            </td>
                          </tr>
                          <tr>
                            <td>Total Listings</td>
                            <td>
                              {item.data.data.host_info.host_properties.total_properties
                                ? item.data.data.host_info.host_properties
                                    .total_properties
                                : 'N/A'}
                            </td>
                          </tr>
                          <tr>
                            <td>Multi-host Listings</td>
                            <td>
                              {item.data.data.host_info.host_properties
                                .multi_host_properties
                                ? item.data.data.host_info.host_properties
                                    .multi_host_properties
                                : 'N/A'}
                            </td>
                          </tr>
                          <tr>
                            <td>Single-host Listings</td>
                            <td>
                              {item.data.data.host_info.host_properties
                                .single_host_properties
                                ? item.data.data.host_info.host_properties
                                    .single_host_properties
                                : 'N/A'}
                            </td>
                          </tr>
                          <tr>
                            <td>Total Hosts</td>
                            <td>
                              {item.data.data.host_info.hosts.total_hosts
                                ? item.data.data.host_info.hosts.total_hosts
                                : 'N/A'}
                            </td>
                          </tr>
                          <tr>
                            <td>Multi-listing Hosts</td>
                            <td>
                              {item.data.data.host_info.hosts.multi_unit_hosts
                                ? item.data.data.host_info.hosts.multi_unit_hosts
                                : 'N/A'}
                            </td>
                          </tr>
                          <tr>
                            <td>Single-listing Hosts</td>
                            <td>
                              {item.data.data.host_info.hosts.single_unit_hosts
                                ? item.data.data.host_info.hosts.single_unit_hosts
                                : 'N/A'}
                            </td>
                          </tr>
                          <tr>
                            <td>Superhosts</td>
                            <td>
                              {item.data.data.host_info.hosts.superhosts
                                ? item.data.data.host_info.hosts.superhosts
                                : 'N/A'}
                            </td>
                          </tr>
                          <tr>
                            <td>Availabilities (1-3 nights)</td>
                            <td>
                              {item.data.data.rental_activity.available['1-3']
                                ? item.data.data.rental_activity.available['1-3']
                                : 'N/A'}
                            </td>
                          </tr>
                          <tr>
                            <td>Availabilities (4-6 nights)</td>
                            <td>
                              {item.data.data.rental_activity.available['4-6']
                                ? item.data.data.rental_activity.available['4-6']
                                : 'N/A'}
                            </td>
                          </tr>
                          <tr>
                            <td>Availabilities (7-9 nights)</td>
                            <td>
                              {item.data.data.rental_activity.available['7-9']
                                ? item.data.data.rental_activity.available['7-9']
                                : 'N/A'}
                            </td>
                          </tr>
                          <tr>
                            <td>Availabilities (10-12 nights)</td>
                            <td>
                              {item.data.data.rental_activity.available['10-12']
                                ? item.data.data.rental_activity.available['10-12']
                                : 'N/A'}
                            </td>
                          </tr>
                          <tr>
                            <td>Bookings (1-3 nights)</td>
                            <td>
                              {item.data.data.rental_activity.booked['1-3']
                                ? item.data.data.rental_activity.booked['1-3']
                                : 'N/A'}
                            </td>
                          </tr>
                          <tr>
                            <td>Bookings (4-6 nights)</td>
                            <td>
                              {item.data.data.rental_activity.booked['4-6']
                                ? item.data.data.rental_activity.booked['4-6']
                                : 'N/A'}
                            </td>
                          </tr>
                          <tr>
                            <td>Bookings (7-9 nights)</td>
                            <td>
                              {item.data.data.rental_activity.booked['7-9']
                                ? item.data.data.rental_activity.booked['7-9']
                                : 'N/A'}
                            </td>
                          </tr>
                          <tr>
                            <td>Bookings (10-12 nights)</td>
                            <td>
                              {item.data.data.rental_activity.booked['10-12']
                                ? item.data.data.rental_activity.booked['10-12']
                                : 'N/A'}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Modal>
                </div>
              </div>
            </article>
          ))
        ) : error ? (
          <p>There was an error, please try again later.</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
}
