import React, { ReactNode, useState } from "react";

export default function Table({
  head,
  body,
  loading,
  error,
}: {
  head: Array<string>;
  body: Array<Array<ReactNode | string>>;
  loading?: boolean;
  error?: Error;
}): JSX.Element {
  const [sortBy, setSortBy] = useState(1);
  const [sortDirection, setSortDirection] = useState("asc");

  function handleSort(index: number): void {
    if (sortBy === index) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(index);
      setSortDirection("asc");
    }
  }

  function sort(a: Array<ReactNode | string>, b: Array<ReactNode | string>): number {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (a[sortBy] < b[sortBy]) {
      return sortDirection === "asc" ? -1 : 1;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (a[sortBy] > b[sortBy]) {
      return sortDirection === "asc" ? 1 : -1;
    }

    return 0;
  }

  const sortedBody = body.sort(sort);

  return (
    <section
      style={{
        maxWidth: "100%",
        overflowY: "auto",
        paddingLeft: "0",
        paddingRight: "0",
        position: "relative",
      }}>
      <table>
        <thead>
          <tr>
            {head.map((cell, index) => (
              <th key={cell}>
                <div onClick={(): void => handleSort(index)}>
                  {cell} {index === sortBy && <span>{sortDirection === "asc" ? "▲" : "▼"}</span>}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={head.length}>Loading...</td>
            </tr>
          ) : error ? (
            <tr>
              <td colSpan={head.length}>There was an error.</td>
            </tr>
          ) : (
            sortedBody.map((row, index) => (
              <tr key={index}>
                {row.map((cell, index) => (
                  <td key={index}>{cell}</td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </section>
  );
}
