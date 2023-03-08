/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";

import { theme } from "../components/Theme";

export default function Home(): JSX.Element {
  return (
    <main>
      <section>
        <h1>Airbnb and short-term rentals the Australian way.</h1>
        <p>
          AirIndex aims to be a trustworthy and up-to-date resource for Australian Airbnb hosts,
          managers and service teams. We track data, insights and innovation across the domestic
          industry.
        </p>
        <p>
          We are building tools to help property owners and other industry professionals make better
          decisions. Our mission is to drive innovation in this industry, and support better service
          and professionalism.
        </p>
      </section>
      <section>
        <aside>
          <Link href="/insights">
            <h3>Market Insights</h3>
            <p>
              A selection of key insights and data points from the Australian short-term rental
              market.
            </p>
          </Link>
        </aside>
        <aside style={{ marginTop: `${theme.space.c}rem` }}>
          <Link href="/managers">
            <h3>Airbnb Management Companies</h3>
            <p>A growing directory of short-term rental management companies in Australia.</p>
          </Link>
        </aside>

        <aside style={{ marginTop: `${theme.space.c}rem` }}>
          <Link href="/cleaners">
            <h3>Airbnb Cleaning Companies</h3>
            <p>
              A directory of cleaning companies in Australia providing Airbnb cleaning services.
            </p>
          </Link>
        </aside>
      </section>
    </main>
  );
}
