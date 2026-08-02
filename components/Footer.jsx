import { Icon, paths } from "./icons";

const contacts = [
  {
    icon: paths.phone,
    label: "Call Bimbola",
    value: "+234 803 802 6256",
    href: "tel:+2348038026256",
  },
  {
    icon: paths.mail,
    label: "Email us",
    value: "stanthonyandlydiafoundation@gmail.com",
    href: "mailto:stanthonyandlydiafoundation@gmail.com",
  },
  {
    icon: paths.instagram,
    label: "Instagram",
    value: "@SsAnthonylydia",
    href: "https://instagram.com/SsAnthonylydia",
  },
  {
    icon: paths.facebook,
    label: "Facebook",
    value: "Ssanthonylydia",
    href: "https://facebook.com/Ssanthonylydia",
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-purple-950 pt-20 pb-10 text-purple-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt=""
                className="h-12 w-12 rounded-full object-cover ring-2 ring-purple-700"
              />
              <p className="font-[family-name:var(--font-display)] text-xl font-bold text-white">
                Sts. Anthony &amp; Lydia Foundation
              </p>
            </div>
            <p className="mt-5 max-w-md leading-relaxed text-purple-200/80">
              Love. Support. Empower. A non-profit alleviating hunger and
              poverty among widows and widowers in Nigeria since 2010.
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-purple-300/70">
              <Icon path={paths.mapPin} className="h-4 w-4" />
              Ibadan, Oyo State, Nigeria
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-amber-400">
              Contact &amp; Enquiries
            </h3>
            <ul className="mt-6 space-y-4">
              {contacts.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      c.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-4 rounded-2xl p-2 -m-2 transition-colors hover:bg-white/5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-amber-400 transition-colors group-hover:bg-amber-400 group-hover:text-purple-950">
                      <Icon path={c.icon} className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-medium uppercase tracking-wide text-purple-300/70">
                        {c.label}
                      </span>
                      <span className="block truncate font-medium text-white">
                        {c.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-purple-300/60">
            &copy; {new Date().getFullYear()} Sts. Anthony &amp; Lydia
            Foundation. All rights reserved.
          </p>
          <a
            href="#top"
            className="text-sm font-medium text-purple-300/80 transition-colors hover:text-amber-400"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
