// eslint-disable-next-line camelcase
import { DM_Mono, DM_Sans } from '@next/font/google';
import css from 'styled-jsx/css';

import { theme } from './theme';

const DMMono = DM_Mono({
  weight: ['400', '500'],
});

const DMSans = DM_Sans({
  weight: ['400', '700'],
});

export default css.global`
  html {
    font-size: 62.5%;
  }
  * {
    box-sizing: border-box;
    margin-block: 0;
    padding-block: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    color: ${theme.colors.text};
    font-family: ${DMSans.style.fontFamily};
    font-size: 1.5rem;
    line-height: 1.35;
    margin: 0;
    padding: 0;
    background-color: ${theme.colors.background};
  }

  main {
    margin: 0 auto;
    padding: 0 0.75rem;
    max-width: 135rem;
  }

  footer {
    border-top: 0.1rem solid ${theme.colors.border};
    text-align: center;
    opacity: 0.8;
    padding: ${theme.space.c}rem;
  }

  header {
    display: flex;
    justify-content: space-between;
    vertical-align: middle;
    align-items: center;
    padding: ${theme.space.c}rem;
    border-bottom: 0.1rem solid ${theme.colors.border};
  }

  header .logo {
    display: flex;
    align-items: center;
    background: ${theme.colors.overlay};
    border-radius: 0.5rem;
    text-transform: uppercase;
    margin: 0 !important;
    padding: 0 ${theme.space.b}rem;
  }

  header .logo p {
    margin: 0 !important;
    font-family: ${DMMono.style.fontFamily};

    vertical-align: middle;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  button {
    border: 0.1rem solid ${theme.colors.border};
    border-radius: 0.5rem;
    cursor: export;
    display: inline-flex;

    background: ${theme.colors.soft};
    color: ${theme.colors.text} !important;
    font-family: ${DMMono.style.fontFamily};
    font-size: 1.5rem;
    padding: ${theme.space.a}rem ${theme.space.b}rem;
    line-height: 1;
  }

  button:hover {
    background: ${theme.colors.overlay};
  }

  section {
    background: ${theme.colors.soft};
    padding: ${theme.space.c}rem;
    border-left: 0.1rem solid ${theme.colors.border};
    border-right: 0.1rem solid ${theme.colors.border};
  }

  header .logo .spin {
    animation-name: spin;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
    animation-play-state: running;
    display: inline-block;
    font-size: 2.2rem;
    vertical-align: middle;
    margin-right: ${theme.space.a}rem;
  }

  h1 {
    margin-bottom: ${theme.space.c}rem;
    font-weight: 700;
    font-size: 3.2rem;
  }

  h3 {
    font-weight: 700;
    margin-bottom: ${theme.space.b}rem;
  }

  p {
    margin-bottom: ${theme.space.b}rem;
  }
  p:last-child {
    margin-bottom: 0;
  }

  a {
    color: ${theme.colors.text};
    text-decoration: none;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    overflow: auto;
    max-width: 100%;
  }

  th {
    text-align: left;
    font-size: 1.3rem;
    background: ${theme.colors.overlay};
  }

  td,
  th {
    padding: ${theme.space.b}rem ${theme.space.c}rem;
  }

  tbody {
    font-family: ${DMMono.style.fontFamily};
  }

  tr {
    background-color: ${theme.colors.overlay};
    border-top: 0;
    border-bottom: 0.1rem dashed ${theme.colors.border};
  }

  .pta {
    padding-top: ${theme.space.a}rem !important;
  }
  .ptb {
    padding-top: ${theme.space.b}rem !important;
  }
  .ptc {
    padding-top: ${theme.space.c}rem !important;
  }
  .ptd {
    padding-top: ${theme.space.d}rem !important;
  }
  .pte {
    padding-top: ${theme.space.e}rem !important;
  }
  .pba {
    padding-bottom: ${theme.space.a}rem !important;
  }
  .pbb {
    padding-bottom: ${theme.space.b}rem !important;
  }
  .pbc {
    padding-bottom: ${theme.space.c}rem !important;
  }
  .pbd {
    padding-bottom: ${theme.space.d}rem !important;
  }
  .pbe {
    padding-bottom: ${theme.space.e}rem !important;
  }
  .mta {
    margin-top: ${theme.space.a}rem !important;
  }
  .mtb {
    margin-top: ${theme.space.b}rem !important;
  }
  .mtc {
    margin-top: ${theme.space.c}rem !important;
  }
  .mtd {
    margin-top: ${theme.space.d}rem !important;
  }
  .mte {
    margin-top: ${theme.space.e}rem !important;
  }
  .mba {
    margin-bottom: ${theme.space.a}rem !important;
  }
  .mbb {
    margin-bottom: ${theme.space.b}rem !important;
  }
  .mbc {
    margin-bottom: ${theme.space.c}rem !important;
  }
  .mbd {
    margin-bottom: ${theme.space.d}rem !important;
  }
  .mbe {
    margin-bottom: ${theme.space.e}rem !important;
  }
  .mra {
    margin-right: ${theme.space.a}rem !important;
  }
  .mrb {
    margin-right: ${theme.space.b}rem !important;
  }
  .mrc {
    margin-right: ${theme.space.c}rem !important;
  }
  .mrd {
    margin-right: ${theme.space.d}rem !important;
  }
  .mre {
    margin-right: ${theme.space.e}rem !important;
  }
  .mla {
    margin-left: ${theme.space.a}rem !important;
  }
  .mlb {
    margin-left: ${theme.space.b}rem !important;
  }
  .mlc {
    margin-left: ${theme.space.c}rem !important;
  }
  .mld {
    margin-left: ${theme.space.d}rem !important;
  }
  .mle {
    margin-left: ${theme.space.e}rem !important;
  }
  .tl {
    text-align: left !important;
  }
  .tc {
    text-align: center !important;
  }
  .tr {
    text-align: right !important;
  }
  .ta {
    text-align: justify !important;
  }
`;
