"use client";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
    alt: "Volunteers organizing food donations",
  },
  {
    src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
    alt: "Hands offering a donation box",
  },
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
    alt: "Supportive hands joined together",
  },
  {
    src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80",
    alt: "Community members gathered together",
  },
  {
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80",
    alt: "Sharing a moment of care and connection",
  },
  {
    src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80",
    alt: "Warm lights of hope in the evening",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-purple-600">
            Gallery
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-purple-950 sm:text-4xl">
            Moments from our work
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Glimpses of community, care, and the people at the heart of what we
            do.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {photos.map((photo, i) => (
            <figure
              key={photo.src}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-100 to-amber-50 shadow-md shadow-purple-900/5 ${
                i === 0 ? "row-span-2 aspect-[3/4] sm:aspect-auto" : "aspect-[4/3]"
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-400">
          Placeholder imagery — photos of the foundation&apos;s own programs
          are coming soon.
        </p>
      </div>
    </section>
  );
}
