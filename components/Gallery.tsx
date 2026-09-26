import Image from "next/image";

interface GalleryPhoto {
  src: string;
  alt: string;
  caption: string;
  location: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    src: "/gallery/cctv-installation.jpg",
    alt: "IP CCTV camera mounted on an exterior wall corner between two windows",
    caption: "IP camera install",
    location: "Residential, Accra",
  },
  {
    src: "/gallery/tv-mount-installation.jpg",
    alt: "Technician mounting a TV bracket on a feature wall in a living room",
    caption: "Entertainment & media wall",
    location: "Residential, Accra",
  },
  {
    src: "/gallery/commercial-site-exterior.jpg",
    alt: "Two-storey commercial building with roller shutters after project completion",
    caption: "Commercial fit-out, complete",
    location: "Kumasi",
  },
  {
    src: "/gallery/cable-termination.jpg",
    alt: "Technician terminating structured cabling into a wall-mounted patch panel",
    caption: "Structured cable termination",
    location: "Corporate networking job",
  },
  {
    src: "/gallery/exterior-installation.jpg",
    alt: "Technician on a ladder working on the exterior corner of a building",
    caption: "Exterior mounting work",
    location: "On site",
  },
  {
    src: "/gallery/cable-prep-onsite.jpg",
    alt: "Two technicians sorting and prepping cable runs at the back of a project van",
    caption: "Prepping runs on site",
    location: "Field team",
  },
];

export default function Gallery() {
  return (
    <section
      id="our-work"
      className="mx-auto max-w-7xl border-b border-white/10 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          On site, doing the work
        </h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          No stock photography &mdash; this is our own crew, on real jobs,
          across Ghana.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
        {GALLERY_PHOTOS.map((photo) => (
          <div
            key={photo.src}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 33vw, 50vw"
              className="object-cover transition-all duration-300 group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <p className="text-sm font-medium text-white">{photo.caption}</p>
              <p className="mt-0.5 font-mono text-xs text-amber-400">
                {photo.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
