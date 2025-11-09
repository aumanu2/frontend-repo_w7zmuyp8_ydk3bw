import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-b from-neutral-50 via-white to-white" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24 lg:px-8">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
            New Season • FW25
          </span>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Effortless style for every day
          </h1>
          <p className="max-w-prose text-neutral-600">
            Discover minimal silhouettes, premium fabrics, and pieces designed to move with you.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#new" className="inline-flex items-center justify-center rounded-md bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800">
              Shop New Arrivals
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#women" className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50">
              Women
            </a>
            <a href="#men" className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50">
              Men
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-neutral-100">
            <img
              src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1420&auto=format&fit=crop"
              alt="Minimal fashion"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
