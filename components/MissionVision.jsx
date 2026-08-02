import { Icon, paths } from "./icons";

const cards = [
  {
    icon: paths.target,
    title: "Our Mission",
    body: "Provide food, shelter, and other essential services to widows and widowers in need. Advocate for their rights, and educate the public about the challenges they face every day.",
    accent: "bg-purple-700",
  },
  {
    icon: paths.eye,
    title: "Our Vision",
    body: "To create a world where widows and widowers can live with dignity and security. We believe that everyone deserves access to the basic necessities of life.",
    accent: "bg-fuchsia-600",
  },
  {
    icon: paths.flag,
    title: "Current Work",
    body: "We currently care for widows within the Ibadan metropolis and are working to expand our reach to more widows in the area. Your donations help make this goal a reality.",
    accent: "bg-amber-500",
  },
];

export default function MissionVision() {
  return (
    <section
      id="mission"
      className="relative overflow-hidden bg-purple-950 py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-purple-700/30 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-400">
            What drives us
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Mission, vision &amp; the work we do today
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              <span
                className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${card.accent} text-white shadow-lg`}
              >
                <Icon path={card.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-white">
                {card.title}
              </h3>
              <p className="mt-3 leading-relaxed text-purple-100/80">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
