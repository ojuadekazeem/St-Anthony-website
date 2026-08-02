"use client";

import { useEffect, useState } from "react";
import { Icon, paths } from "./icons";

const links = [
  { href: "#about", label: "About" },
  { href: "#mission", label: "Mission" },
  { href: "#impact", label: "Impact" },
  { href: "#gallery", label: "Gallery" },
  { href: "#get-involved", label: "Get Involved" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-md shadow-purple-900/5 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6"
        aria-label="Main navigation"
      >
        <a href="#top" className="flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt="Sts. Anthony & Lydia Foundation logo"
            className="h-11 w-11 rounded-full object-cover ring-2 ring-purple-200"
          />
          <span className="font-[family-name:var(--font-display)] text-base font-bold leading-tight text-purple-950 sm:text-lg">
            Sts. Anthony &amp; Lydia
            <span className="block text-xs font-medium text-purple-600">
              Foundation
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-purple-50 hover:text-purple-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#donate"
              className="ml-3 inline-flex items-center gap-2 rounded-full bg-purple-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-700/25 transition-all hover:-translate-y-0.5 hover:bg-purple-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
            >
              <Icon path={paths.heart} className="h-4 w-4" />
              Donate
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-purple-900 transition-colors hover:bg-purple-50 lg:hidden"
        >
          <Icon path={open ? paths.x : paths.menu} className="h-6 w-6" />
        </button>
      </nav>

      {open && (
        <div className="border-t border-purple-100 bg-white/95 backdrop-blur-md lg:hidden">
          <ul className="mx-auto max-w-6xl space-y-1 px-4 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-purple-50 hover:text-purple-800"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#donate"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-purple-700 px-4 py-3.5 text-base font-semibold text-white"
              >
                <Icon path={paths.heart} className="h-5 w-5" />
                Donate Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
