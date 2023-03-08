import { CSSAttribute, styled } from "goober";
import React, { ReactNode, useState } from "react";

import { theme } from "./Theme";

const TableStyles = styled("table")((): CSSAttribute | string => ({
  borderCollapse: "collapse",
  width: "100%",
  borderSpacing: "0",
  overflow: "auto",
  fontSize: "1.5rem",

  tr: {
    borderTop: "none",
    backgroundColor: theme.colors.overlay,
    borderBottom: `0.1rem dashed ${theme.colors.border}`,
  },
  th: {
    textAlign: "left",
    backgroundColor: theme.colors.overlay,
  },
  "th, td": {
    padding: `${theme.space.b}rem ${theme.space.c}rem`,
  },
}));

export default function Table({
  head,
  body,
  loading,
  error,
}: {
  body: Array<Array<ReactNode | string>>;
  error?: Error;
  head: Array<string>;
  loading?: boolean;
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
      <TableStyles>
        <thead>
          <tr>
            {head.map((cell, index) => (
              <th key={cell}>
                <div role="none" onClick={(): void => handleSort(index)}>
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
      </TableStyles>
    </section>
  );
}
