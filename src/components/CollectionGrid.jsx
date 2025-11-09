const products = [
  {
    id: 1,
    name: "Boxy Tee",
    price: "$35",
    image:
      "https://images.unsplash.com/photo-1564859228273-274232fdb516?q=80&w=1420&auto=format&fit=crop",
    tag: "New",
  },
  {
    id: 2,
    name: "Everyday Denim",
    price: "$79",
    image:
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1420&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Wool Coat",
    price: "$169",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1420&auto=format&fit=crop",
    tag: "Bestseller",
  },
  {
    id: 4,
    name: "Relaxed Hoodie",
    price: "$59",
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1420&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Tailored Trousers",
    price: "$89",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1420&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Leather Sneakers",
    price: "$119",
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1420&auto=format&fit=crop",
  },
];

export default function CollectionGrid() {
  return (
    <section id="new" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">New Arrivals</h2>
          <p className="text-sm text-neutral-600">Handpicked pieces just landed.</p>
        </div>
        <a href="#" className="text-sm font-semibold text-neutral-900 hover:underline">
          View all
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <a key={p.id} href="#" className="group block overflow-hidden rounded-xl border border-neutral-200 bg-white">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100">
              <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
              {p.tag && (
                <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-neutral-900 shadow-sm">
                  {p.tag}
                </span>
              )}
            </div>
            <div className="flex items-center justify-between px-3 py-3">
              <div>
                <p className="text-sm font-medium text-neutral-900">{p.name}</p>
                <p className="text-xs text-neutral-600">Unisex</p>
              </div>
              <p className="text-sm font-semibold">{p.price}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
