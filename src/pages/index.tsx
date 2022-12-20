/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";

export default function Home(): JSX.Element {
  return (
    <div>
      <section className="pte pbe">
        <div className="ptd mbd">
          <h1>Airbnb and short-term rentals the Australian way.</h1>
          <p className="mtc">
            AirIndex aims to be a trustworthy and up-to-date resource for Australian Airbnb hosts,
            managers and service teams. We track data, insights and innovation across the domestic
            industry.
          </p>
          <p className="mtc">
            We are building tools to help property owners and other industry professionals make
            better decisions. Our mission is to drive innovation in this industry, and support
            better service and professionalism.
          </p>
        </div>
      </section>
      <section className="mtc">
        <h2>Browse our lists and resources.</h2>
        <div className="mtc disclaimer">
          <Link href="/insights">
            <article>
              <div className="title">
                <h3>Market Insights</h3>
                <p className="mtb">
                  A selection of key insights and data points from the Australian short-term rental
                  market.
                </p>
              </div>
            </article>
          </Link>
        </div>
        <div className="mtc disclaimer">
          <Link href="/managers">
            <article>
              <div className="title">
                <h3>Airbnb Management Companies</h3>
                <p className="mtb">
                  A growing directory of short-term rental management companies in Australia.
                </p>
              </div>
            </article>
          </Link>
        </div>
        <div className="mtc disclaimer">
          <Link href="/cleaners">
            <article>
              <div className="title">
                <h3>Airbnb Cleaning Companies</h3>
                <p className="mtb">
                  A directory of cleaning companies in Australia providing Airbnb cleaning services.
                </p>
              </div>
            </article>
          </Link>
        </div>
      </section>
    </div>
  );
}
