export default function Footer() {
  const links = [
    { title: "Shop", items: ["Women", "Men", "Accessories", "Sale"] },
    { title: "Help", items: ["Shipping", "Returns", "FAQ", "Contact"] },
    { title: "Company", items: ["About", "Careers", "Press", "Sustainability"] },
  ];

  return (
    <footer className="border-t border-neutral-200/70 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-lg font-semibold">BlueWear</h4>
            <p className="mt-3 text-sm text-neutral-600">
              Modern essentials crafted responsibly.
            </p>
          </div>
          {links.map((col) => (
            <div key={col.title}>
              <h5 className="text-sm font-semibold text-neutral-900">{col.title}</h5>
              <ul className="mt-3 space-y-2 text-sm text-neutral-600">
                {col.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-neutral-900">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-6 text-sm text-neutral-500 sm:flex-row">
          <p>© {new Date().getFullYear()} BlueWear. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-neutral-900">Privacy</a>
            <a href="#" className="hover:text-neutral-900">Terms</a>
            <a href="#" className="hover:text-neutral-900">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
