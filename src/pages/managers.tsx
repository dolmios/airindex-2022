import Image from 'next/image';
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

        <div className='mtd disclaimer' style={{ maxWidth: '60rem' }}>
          <article>
            <div className='title'>
              <h4>How do we choose companies?</h4>
            </div>
            <div className='description'>
              <p>
                We include as many companies on our site as we can
                {data && data.length > 0 ? <b>&nbsp;(currently {data.length})</b> : ''}.
                There isn&apos;t a specific criteria for inclusion. We exclude listing a
                company if it takes us more than 15 minutes to find the bare minimum
                details about it.
              </p>
              <p>
                If you have any corrections, removals, additions, or edits to make,
                please find the <b>Submit</b> button at the top of the page.
              </p>
            </div>
          </article>
        </div>
      </section>

      <Table
        error={error}
        loading={!data && !error}
        head={[
          '',
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
                <Image
                  key={item.id + (item.favicon || '')}
                  alt={item.company}
                  src={`${process.env.NEXT_PUBLIC_SUPABASE_ENDPOINT}/storage/v1/object/public/managers/${item.id}.png`}
                  width={16}
                  height={16}
                  style={{
                    verticalAlign: 'middle',
                  }}
                />,
                item.company,
                item.location,
                item.established,
                item.fees && item.fees !== '-' ? item.fees : <>-</>,
                item.parent,
                <a
                  key={item.id + item.blog}
                  href={item.blog && item.blog !== '-' ? item.blog : '#'}
                  target='_blank'
                  rel='noreferrer'>
                  <button disabled={item.blog === '-' || !item.blog}>Blog</button>
                </a>,

                <button key={item.id + item.website} disabled={!item.website}>
                  <a href={item.website || '#'} target='_blank' rel='noreferrer'>
                    Website{' '}
                  </a>
                </button>,
              ])
            : []
        }
      />
    </div>
  );
}
