import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { supabase } from "../hooks/useClient";

import Modal from "./Modal";
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
    <header>
      <Link href="/">
        <div className="logo">
          <Image src="/icon.png" alt="logo" width={25} height={25} className="spin" />
          <b className="mra">AIRINDEX</b>
          <p>STR Research</p>
        </div>
      </Link>
      <div>
        <Link href="/insights">
          <button className="mrb" disabled={router.pathname === "/insights"}>
            Insights
          </button>
        </Link>
        <Link href="/managers">
          <button className="mrb" disabled={router.pathname === "/managers"}>
            Managers
          </button>
        </Link>
        <Link href="/cleaners">
          <button className="mrb" disabled={router.pathname === "/cleaners"}>
            Cleaners
          </button>
        </Link>
        {/*
        <button className='mrb'>Research</button>
  */}
        <Modal
          trigger={<button type="button">Submit</button>}
          title="Submit a company or alteration">
          <div>
            {submitStatus && (
              <div className="mbd">
                <code>{submitStatus}</code>
              </div>
            )}
            <textarea
              id="message"
              placeholder="Enter your message here"
              value={submitMessage}
              onChange={(e): void => setSubmitMessage(e.target.value)}
            />
            <div className="mtd">
              <button type="submit" onClick={handleSubmit} disabled={submitMessage.length === 0}>
                Submit
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </header>
  );
}
