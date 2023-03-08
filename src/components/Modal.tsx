import { CSSAttribute, styled, keyframes } from "goober";
import { ReactNode, useRef, useState } from "react";
import { useEventListener, useOnClickOutside } from "usehooks-ts";

import { theme } from "./Theme";

const moveUp = keyframes({
  "0%": {
    bottom: "-20rem",
  },
  "100%": {
    bottom: "0",
  },
});

const moveDown = keyframes({
  "0%": {
    bottom: "0",
  },
  "100%": {
    bottom: "-40rem",
  },
});

const ModalStyles = styled("div")((): CSSAttribute | string => ({
  position: "fixed",
  bottom: "0",
  width: "90%",
  maxWidth: "900px",
  left: "50%",
  transform: "translateX(-50%)",
  border: `0.1rem solid ${theme.colors.border}`,
  borderRadius: "0.5rem",
  padding: `${theme.space.c}rem`,
  zIndex: "100",
  borderBottom: "none",
  borderBottomLeftRadius: "0",
  borderBottomRightRadius: "0",
  maxHeight: "80vh",
  overflowY: "auto",
  transition: "all 0.5s ease-in-out",
  background: theme.colors.background,

  "&.open": {
    animation: `${moveUp} 0.5s ease-in-out`,
    animationFillMode: "forwards",
  },

  "&.closed": {
    animation: `${moveDown} 0.5s ease-in-out`,
    animationFillMode: "forwards",
  },
}));

export default function Modal({
  children,
  trigger,
  title,
}: {
  children: ReactNode;
  title: string;
  trigger: ReactNode;
}): JSX.Element {
  const ref = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  function handleClose(): void {
    setIsOpen(false);
    setTimeout(() => {
      setIsMounted(false);
    }, 500);
  }

  function handleOpen(): void {
    setIsOpen(true);
    setIsMounted(true);
  }

  function handleClick(): void {
    if (isOpen || isMounted) {
      handleClose();
    } else {
      handleOpen();
    }
  }

  useOnClickOutside(ref, () => handleClose());

  useEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      handleClose();
    }
  });

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
      }}>
      <div
        role="none"
        style={{ cursor: "pointer", display: "inline-block" }}
        onClick={(): void => handleClick()}>
        {trigger}
      </div>
      {isMounted && (
        <ModalStyles ref={ref} className={`${isOpen ? "open" : "closed"}`}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3>{title}</h3>

            <button type="button" onClick={(): void => handleClick()}>
              Close
            </button>
          </div>

          <div style={{ marginTop: `${theme.space.c}rem` }}>{children}</div>
        </ModalStyles>
      )}
    </div>
  );
}
