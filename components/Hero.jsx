import { Icon, paths } from "./icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-purple-50 via-white to-white pt-32 pb-16 sm:pt-40 sm:pb-24"
    >
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-purple-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 -left-32 h-80 w-80 rounded-full bg-amber-100/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-1.5 text-sm font-medium text-purple-800 shadow-sm">
              <Icon path={paths.mapPin} className="h-4 w-4 text-purple-600" />
              Serving Ibadan, Nigeria since 2010
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-purple-950 sm:text-5xl lg:text-6xl">
              Restoring dignity to{" "}
              <span className="bg-gradient-to-r from-purple-700 to-fuchsia-600 bg-clip-text text-transparent">
                widows &amp; widowers
              </span>{" "}
              across Nigeria
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              The Sts. Anthony &amp; Lydia Foundation works to alleviate hunger
              and poverty by providing food, shelter, and essential services to
              widows and widowers struggling to make ends meet.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#donate"
                className="inline-flex items-center gap-2 rounded-full bg-purple-700 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-purple-700/30 transition-all hover:-translate-y-0.5 hover:bg-purple-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              >
                <Icon path={paths.heart} className="h-5 w-5" />
                Adopt a Widow
              </a>
              <a
                href="#get-involved"
                className="inline-flex items-center gap-2 rounded-full border-2 border-purple-200 bg-white px-7 py-3.5 text-base font-semibold text-purple-800 transition-all hover:border-purple-400 hover:bg-purple-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              >
                Get Involved
                <Icon path={paths.arrowRight} className="h-5 w-5" />
              </a>
            </div>

            <p className="mt-6 flex items-center gap-2 text-sm text-slate-500">
              <Icon
                path={paths.heartHandshake}
                className="h-4 w-4 text-amber-500"
              />
              &ldquo;Adopt a Widow — The Good Samaritans&rdquo;
            </p>
          </div>

          <div className="fade-up relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-purple-200 via-purple-100 to-amber-100 shadow-2xl shadow-purple-900/20 sm:aspect-square">
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80"
                alt="Volunteers packing food donations for the community"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl shadow-purple-900/10 sm:-left-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-700">
                <Icon path={paths.users} className="h-6 w-6" />
              </span>
              <div>
                <p className="font-[family-name:var(--font-display)] text-xl font-bold text-purple-950">
                  30 widows
                </p>
                <p className="text-sm text-slate-500">currently supported</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
