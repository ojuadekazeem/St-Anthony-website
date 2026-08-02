"use client";

import { useState } from "react";
import { Icon, paths } from "./icons";

const account = {
  bank: "Zenith Bank",
  number: "1217663059",
  name: "St Anthony and St Lydia Foundation",
};

function CopyRow({ label, value }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-white/10 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5">
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wide text-purple-200">
          {label}
        </p>
        <p className="break-words font-[family-name:var(--font-display)] text-base font-bold text-white sm:text-lg">
          {value}
        </p>
      </div>
      <button
        type="button"
        onClick={copy}
        aria-label={`Copy ${label}`}
        className="inline-flex h-11 w-full shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full bg-white/15 px-4 text-sm font-semibold text-white transition-colors hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 sm:w-auto"
      >
        <Icon
          path={copied ? paths.check : paths.copy}
          className="h-4 w-4"
        />
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

export default function Donate() {
  return (
    <section
      id="donate"
      className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-fuchsia-900 py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="text-center lg:text-left">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-400">
              Donate
            </p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Your gift puts food on a widow&apos;s table
            </h2>
            <p className="mt-5 text-base leading-relaxed text-purple-100/90 sm:text-lg">
              We are currently seeking donations to expand our reach from 30 to
              100 widows this year. Give directly by bank transfer — every
              naira counts.
            </p>

            <div className="mt-8">
              <button
                type="button"
                disabled
                aria-disabled="true"
                title="Online payments coming soon"
                className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3.5 text-center text-sm font-semibold text-purple-200 opacity-60 sm:w-auto sm:px-7 sm:text-base"
              >
                <Icon path={paths.banknote} className="h-5 w-5 shrink-0" />
                <span>Donate Online — Coming Soon</span>
              </button>
              <p className="mt-3 text-sm text-purple-200/70">
                Card &amp; online payments (Paystack) are on the way. For now,
                please use the bank transfer details.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/5 p-5 shadow-2xl backdrop-blur-sm sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-400 text-purple-950">
                <Icon path={paths.banknote} className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-bold text-white sm:text-xl">
                Bank Transfer Details
              </h3>
            </div>
            <div className="mt-6 space-y-3">
              <CopyRow label="Bank" value={account.bank} />
              <CopyRow label="Account Number" value={account.number} />
              <CopyRow label="Account Name" value={account.name} />
            </div>
            <p className="mt-5 text-center text-sm text-purple-200/70">
              After donating, kindly reach out so we can thank you personally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
