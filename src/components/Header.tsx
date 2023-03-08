import { styled, keyframes } from "goober";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { supabase } from "../hooks/useClient";

import Modal from "./Modal";
import { theme } from "./Theme";

const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const Logo = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "0.5rem",
  padding: `0 ${theme.space.a}rem`,
  margin: "0",
  backgroundColor: theme.colors.overlay,

  img: {
    animation: `${spin} 4s ease-in-out infinite`,
    fontSize: "2.3rem",
    display: "inline-flex",
    position: "relative",
    verticalAlign: "middle",
    alignItems: "center",
  },
});

export const HeaderStyles = styled("header")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `${theme.space.c}rem`,

  "a:hover, a:active, a:focus": {
    textDecoration: "none",
  },

  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    margin: `0 ${theme.space.a / 2}rem`,
    backgroundColor: "transparent",
    border: `0.1rem solid ${theme.colors.overlay}`,

    "&:hover": {
      backgroundColor: theme.colors.overlay,
    },

    "&:disabled": {
      backgroundColor: theme.colors.overlayHover,
    },
  },
});

export default function Header(): JSX.Element {
  const router = useRouter();
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");

  async function handleSubmit(): Promise<void> {
    const { error } = await supabase.from("feedback").insert({
      created_at: new Date(),
      message: submitMessage,
    });

    if (error) {
      setSubmitStatus(error?.message || "Something went wrong");
    } else {
      setSubmitStatus("Thanks for your feedback!");
      setSubmitMessage("");
    }
  }

  return (
    <HeaderStyles>
      <Link href="/">
        <Logo>
          <Image alt="logo" height={25} src="/icon.png" width={25} />
          <p style={{ display: "inline-block" }}>AIRINDEX</p>
        </Logo>
      </Link>
      <div>
        <Link href="/insights">
          <button disabled={router.pathname === "/insights"} role="none" type="button">
            Insights
          </button>
        </Link>
        <Link href="/managers">
          <button disabled={router.pathname === "/managers"} role="none" type="button">
            Managers
          </button>
        </Link>
        <Link href="/cleaners">
          <button disabled={router.pathname === "/cleaners"} role="none" type="button">
            Cleaners
          </button>
        </Link>

        <Modal
          title="Submit a company or alteration"
          trigger={<button type="button">Submit</button>}>
          <div>
            <textarea
              id="message"
              placeholder="Enter your message here"
              value={submitMessage}
              onChange={(e): void => setSubmitMessage(e.target.value)}
            />
            <div
              style={{
                marginTop: `${theme.space.a}rem`,
              }}>
              <button
                disabled={submitMessage.length === 0}
                type="submit"
                onClick={(): Promise<void> => handleSubmit()}>
                Submit
              </button>
              <small
                style={{
                  marginLeft: `${theme.space.a}rem`,
                }}>
                {submitStatus || ""}
              </small>
            </div>
          </div>
        </Modal>
      </div>
    </HeaderStyles>
  );
}
