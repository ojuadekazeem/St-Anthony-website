import { Icon, paths } from "./icons";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-purple-100 to-amber-50 shadow-xl shadow-purple-900/10">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80"
                alt="Caring hands held together in support"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-5 -right-3 rounded-2xl bg-amber-400 px-5 py-3 shadow-lg sm:-right-5">
              <p className="font-[family-name:var(--font-display)] text-2xl font-extrabold text-purple-950">
                2010
              </p>
              <p className="text-xs font-semibold uppercase tracking-wide text-purple-900/70">
                Founded
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-sm font-bold uppercase tracking-widest text-purple-600">
              About Us
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-purple-950 sm:text-4xl">
              A helping hand for those who need it most
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              The Sts. Anthony &amp; Lydia Foundation is a non-profit
              organization founded in 2010 with the mission of alleviating
              hunger and poverty among widows and widowers in Nigeria.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              We work to provide food, shelter, and other essential services to
              widows and widowers who are struggling to make ends meet —
              because everyone deserves access to the basic necessities of
              life.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                {
                  icon: paths.utensils,
                  text: "Food support and essential supplies for daily living",
                },
                {
                  icon: paths.home,
                  text: "Shelter and housing assistance for the most vulnerable",
                },
                {
                  icon: paths.megaphone,
                  text: "Advocacy for the rights of widows and widowers",
                },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                    <Icon path={item.icon} className="h-5 w-5" />
                  </span>
                  <p className="pt-2 text-slate-700">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
