import { styled } from "goober";

import { theme } from "./Theme";

export const FooterStyles = styled("footer")({
  textAlign: "center",
  padding: `${theme.space.c}rem`,
  backgroundColor: "var(--color-primary)",
  opacity: 0.6,
});

export default function Footer(): JSX.Element {
  return (
    <FooterStyles>
      <small>
        &copy; Airindex 2022. All rights reserved.
        <br /> This site is not affiliated with Airbnb. Inclusion in this directory does not imply
        endorsement, and we are not responsible for the content of external sites.
      </small>
    </FooterStyles>
  );
}
