import useSWR from 'swr';

import Table from '../components/Table';

export default function Insights(): JSX.Element {
  const { data, error } = useSWR(`/build-managers`);

  return (
    <div id='Insights'>
      <section>
        <div className='summary'>
          <h1>Airbnb Management Companies</h1>
          <p>Updated 1st of November (YTD)</p>
        </div>
        <div className='mtc disclaimer'>
          <article>
            <div className='title'>
              <h4>How do we choose companies?</h4>
            </div>
            <div className='description'>
              <p>
                We don&apos;t, really. We search for companies, and then we look at
                their online presence. If they have a website, and we can use it, and
                they have enough data to populate the table - we&apos;ll add them.
              </p>
              <p>
                This list is not comprehensive, so if you think we&apos;ve missed a
                company, please let us know.
              </p>
            </div>
          </article>
        </div>
      </section>

      <Table
        error={error}
        loading={!data && !error}
        head={[
          'Company',
          'Primary Location',
          'Established',
          'Management Fees',
          'Parent',
          'Blog',
          'Website',
        ]}
        body={
          data && data.length > 0
            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
              data.map((item: any) => [
                item.company,
                item.location,
                item.established,
                item.fees,
                item.parent,
                <a
                  key={item.id + item.blog}
                  href={item.blog || '#'}
                  target='_blank'
                  rel='noreferrer'>
                  <button disabled={!item.blog}>Blog</button>
                </a>,
                <a
                  key={item.id + item.website}
                  href={item.website || '#'}
                  target='_blank'
                  rel='noreferrer'>
                  <button disabled={!item.website}>Website</button>
                </a>,
              ])
            : []
        }
      />
    </div>
  );
}
