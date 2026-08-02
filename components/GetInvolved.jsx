import { Icon, paths } from "./icons";

const ways = [
  {
    icon: paths.heartHandshake,
    title: "Adopt a Widow",
    body: "Become a monthly donor — as an individual or an organization — and provide financial support to help a widow meet her basic needs.",
  },
  {
    icon: paths.shirt,
    title: "Donate Items",
    body: "Give food, clothing, or other essential items. Every contribution goes directly to widows and widowers who need it most.",
  },
  {
    icon: paths.calendar,
    title: "Volunteer",
    body: "Offer your time and skills to help with the foundation's programs and events in the Ibadan metropolis.",
  },
  {
    icon: paths.megaphone,
    title: "Spread the Word",
    body: "Amplify our voices by sharing the foundation's work with your friends, family, church, and community.",
  },
];

export default function GetInvolved() {
  return (
    <section id="get-involved" className="bg-purple-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-purple-600">
            How to Get Involved
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-purple-950 sm:text-4xl">
            Every little bit helps
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Your support will make a real difference in the lives of widows and
            widowers in Nigeria. Here are four ways to help.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ways.map((way, i) => (
            <article
              key={way.title}
              className="group relative rounded-3xl bg-white p-7 shadow-lg shadow-purple-900/5 ring-1 ring-purple-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/10 hover:ring-purple-300"
            >
              <span className="absolute top-6 right-6 font-[family-name:var(--font-display)] text-4xl font-extrabold text-purple-100 transition-colors group-hover:text-purple-200">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-purple-700 p-3 text-white shadow-md shadow-purple-700/30">
                <Icon path={way.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-purple-950">
                {way.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {way.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
