import css from 'styled-jsx/css';

import { theme } from './theme';

export default css.global`
  /* keyframes */
  @keyframes moveUp {
    0% {
      bottom: -20rem;
    }
    100% {
      bottom: 0;
    }
  }
  @keyframes moveDown {
    0% {
      bottom: 0;
    }
    100% {
      bottom: -40rem;
    }
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

  /* resets */
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
    font-family: ${theme.fontFamily.default};
    font-size: 1.5rem;
    line-height: 1.35;
    margin: 0;
    padding: 0;
    background-color: ${theme.colors.background};
  }

  /* typography */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-bottom: ${theme.space.a}rem;
  }

  h1:last-child,
  h2:last-child,
  h3:last-child,
  h4:last-child,
  h5:last-child,
  h6:last-child,
  p:last-child {
    margin-bottom: 0;
  }

  a {
    color: ${theme.colors.text};
    text-decoration: none;
    cursor: pointer;
  }
  a.border {
    border-bottom: 1px solid ${theme.colors.text};
  }
  a.border:hover {
    opacity: 0.5;
  }

  /* layout */
  main {
    margin: 0 auto;
    padding: 0 1rem;
    max-width: 142rem;
  }

  article {
    border: 1px dashed ${theme.colors.border};
  }

  article .title {
    background-color: ${theme.colors.overlay};
    padding: ${theme.space.b}rem;
  }

  article .description {
    padding: ${theme.space.b}rem;
  }
  footer {
    text-align: center;
    opacity: 0.8;
    padding: ${theme.space.c}rem;
  }

  code {
    font-family: ${theme.fontFamily.monospace};
    padding: 0 ${theme.space.a}rem;
    background: rgba(255, 205, 89, 0.4);
  }

  input {
    border: 1px dashed ${theme.colors.border};
    border-radius: 0.5rem;
    padding: ${theme.space.a}rem;
    font-size: 1.5rem;
    background-color: ${theme.colors.overlay};
    color: ${theme.colors.text};
  }

  input:focus {
    outline: none;
    border-style: solid;
  }
  input::placeholder {
    color: ${theme.colors.text};
    opacity: 0.5;
  }
  input:hover {
    border-style: solid;
  }
  input:disabled {
    background-color: ${theme.colors.overlayHover};
  }

  textarea {
    border: 1px dashed ${theme.colors.border};
    border-radius: 0.5rem;
    padding: ${theme.space.a}rem;
    font-size: 1.5rem;
    background-color: ${theme.colors.overlay};
    color: ${theme.colors.text};
    min-width: 100%;
    min-height: 10rem;
  }

  textarea:focus {
    outline: none;
    border-style: solid;
  }

  textarea:hover {
    border-style: solid;
  }

  textarea:disabled {
    background-color: ${theme.colors.overlayHover};
  }

  textarea::placeholder {
    color: ${theme.colors.text};
    opacity: 0.5;
  }

  header {
    display: flex;
    justify-content: space-between;
    vertical-align: middle;
    align-items: center;
    padding: ${theme.space.c}rem;
  }

  header .logo {
    display: flex;
    align-items: center;
    background: ${theme.colors.overlay};
    border-radius: 0.5rem;
    margin: 0 !important;
    padding: 0 ${theme.space.a}rem;
  }

  header .logo p {
    margin: 0 !important;
    vertical-align: middle;
  }

  button {
    border-radius: 0.5rem;
    cursor: pointer;
    display: inline-flex;
    border: 0;
    background: ${theme.colors.overlay};
    color: ${theme.colors.text} !important;
    font-family: ${theme.fontFamily.default};
    font-weight: 500;
    font-size: 1.5rem;
    padding: ${theme.space.a}rem ${theme.space.b}rem;
    line-height: 1;
  }

  button:hover {
    background: ${theme.colors.overlayHover};
  }

  button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  button:disabled:hover {
    background: ${theme.colors.overlay};
  }

  section {
    background: ${theme.colors.overlay};
    padding: ${theme.space.c}rem;
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

  header button {
    background: transparent;
    border: 0.1rem solid ${theme.colors.overlayHover};
  }

  header button:disabled,
  header button:hover {
    opacity: 1;
    background: ${theme.colors.overlay};
  }
  /* tables */
  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    overflow: auto;
    max-width: 100%;
    font-family: ${theme.fontFamily.monospace};
  }
  tr {
    background-color: ${theme.colors.overlay};
    border-top: 0;
    border-bottom: 0.1rem dashed ${theme.colors.border};
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

  /* layout classes */
  .spaced {
    display: flex;
    justify-content: space-between;
    vertical-align: middle;
    align-items: center;
  }
  .spaced * {
    vertical-align: middle;
    margin: 0;
  }
  .articles {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 1.5rem;
    grid-row-gap: 1.5rem;
    margin: 0 auto;
  }

  @media (max-width: 1024px) {
    .articles {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 700px) {
    .articles {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 480px) {
    .articles {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .modal {
    position: fixed;
    bottom: 0;
    width: 90%;
    max-width: 100rem;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid ${theme.colors.border};
    border-radius: 0.5rem;
    padding: ${theme.space.c}rem;
    z-index: 100;
    border-bottom: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    background-color: ${theme.colors.background};
    max-height: 80vh;
    overflow-y: auto;
  }
  .modal.open {
    animation: moveUp 0.25s ease-in;
    animationfillmode: 'forwards';
  }
  .modal.closed {
    animation: moveDown 0.5s ease-out;
    animationfillmode: 'forwards';
  }

  /* utility classes */
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
