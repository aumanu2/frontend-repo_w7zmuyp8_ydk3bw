export default function PromoBanner() {
  return (
    <section id="sale" className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 text-center sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-widest text-neutral-300">Limited Time</p>
        <h3 className="mt-2 text-2xl font-semibold">Mid-Season Sale • Up to 40% off</h3>
        <p className="mt-2 text-neutral-300">Discount applied at checkout on selected styles.</p>
        <div className="mt-5">
          <a href="#" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-100">
            Shop the Sale
          </a>
        </div>
      </div>
    </section>
  );
}
