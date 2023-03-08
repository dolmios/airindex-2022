import { useRouter } from "next/router";

import Build from "../components/Build";
import Modal from "../components/Modal";
import Table from "../components/Table";
import { theme } from "../components/Theme";

export default function Admin(): JSX.Element {
  const router = useRouter();

  const dataSet = [
    {
      cityId: "30830",
      dataset: "Hybrid Sydney",
      reference: "hybrid_sydney",
    },
    {
      cityId: "42",
      dataset: "Hybrid Melbourne",
      reference: "hybrid_melbourne",
    },
    {
      cityId: "40",
      dataset: "Hybrid Brisbane",
      reference: "hybrid_brisbane",
    },
    {
      cityId: "43",
      dataset: "Hybrid Perth",
      reference: "hybrid_perth",
    },
    {
      cityId: "84670",
      dataset: "Hybrid Adelaide",
      reference: "hybrid_adelaide",
    },
    {
      cityId: "84871",
      dataset: "Hybrid Gold Coast",
      reference: "hybrid_gold_coast",
    },
    {
      cityId: "84931",
      dataset: "Hybrid Canberra",
      reference: "hybrid_canberra",
    },
    {
      cityId: "84655",
      dataset: "Hybrid Newcastle",
      reference: "hybrid_newcastle",
    },
    {
      cityId: "84613",
      dataset: "Hybrid Wollongong",
      reference: "hybrid_wollongong",
    },
    {
      cityId: "89683",
      dataset: "Hybrid Geelong",
      reference: "hybrid_geelong",
    },
    {
      cityId: "84176",
      dataset: "Hybrid Hobart",
      reference: "hybrid_hobart",
    },
    {
      cityId: "102206",
      dataset: "Hybrid Townsville",
      reference: "hybrid_townsville",
    },
    {
      cityId: "41",
      dataset: "Hybrid Cairns",
      reference: "hybrid_cairns",
    },
    {
      cityId: "85027",
      dataset: "Hybrid Toowoomba",
      reference: "hybrid_toowoomba",
    },
    {
      cityId: "84590",
      dataset: "Hybrid Darwin",
      reference: "hybrid_darwin",
    },
    {
      cityId: "84612",
      dataset: "Hybrid Ballarat",
      reference: "hybrid_ballarat",
    },
    {
      cityId: "102144",
      dataset: "Hybrid Alice Springs",
      reference: "hybrid_alice_springs",
    },
    {
      cityId: "84614",
      dataset: "Hybrid Bendigo",
      reference: "hybrid_bendigo",
    },
    {
      cityId: "84641",
      dataset: "Hybrid Mildura",
      reference: "hybrid_mildura",
    },
    {
      cityId: "84986",
      dataset: "Hybrid Busselton",
      reference: "hybrid_busselton",
    },
  ];

  if (router.query.auth && router.query.auth === process.env.NEXT_PUBLIC_SCRAPE_ADMIN) {
    return (
      <main>
        <section>
          <h1>Admin</h1>
        </section>
        <section style={{ paddingTop: `${theme.space.c}rem` }}>
          <Table
            body={dataSet.map((data) => [
              data.dataset,
              <code key={data.cityId + data.reference}>{data.reference}</code>,
              <code key={data.cityId}>{data.cityId}</code>,
              "$1.00",
              <Modal
                key={data.cityId + data.reference + "build"}
                title={`Build ${data.reference}`}
                trigger={<button type="button">Build</button>}>
                <Build city={data.cityId} reference={data.reference} />
              </Modal>,
            ])}
            head={["Dataset", "Reference", "City ID", "Cost", "Build"]}
          />
        </section>
      </main>
    );
  } else {
    return (
      <main>
        <section>
          <h1>There was an error.</h1>
          <p>You are not authorised to view this page.</p>
        </section>
      </main>
    );
  }
}
