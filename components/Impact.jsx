"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 30, suffix: "", label: "Widows currently supported" },
  { value: 100, suffix: "", label: "Target for this year" },
  { value: 16, suffix: "+", label: "Years of service since 2010" },
  { value: 1, suffix: "", label: "City today — Ibadan, and growing" },
];

function Counter({ value, suffix, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) {
      setCount(value);
      return;
    }
    const duration = 1200;
    const t0 = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Impact() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="impact" ref={ref} className="bg-purple-50/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-purple-600">
            Our Impact
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-purple-950 sm:text-4xl">
            Small acts, real change
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Every donation goes directly toward feeding, sheltering, and
            supporting widows and widowers in the Ibadan metropolis.
          </p>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-3xl bg-white p-8 text-center shadow-lg shadow-purple-900/5 ring-1 ring-purple-100"
            >
              <dd className="font-[family-name:var(--font-display)] text-4xl font-extrabold text-purple-700 sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} start={visible} />
              </dd>
              <dt className="mt-3 text-sm font-medium text-slate-600">
                {s.label}
              </dt>
            </div>
          ))}
        </dl>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 px-6 py-4 text-center">
          <p className="text-amber-900">
            <strong className="font-semibold">This year&apos;s goal:</strong>{" "}
            grow from 30 to 100 widows cared for — with your help, we can get
            there.
          </p>
        </div>
      </div>
    </section>
  );
}
