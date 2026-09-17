const process = [
  {
    number: "1. Konsultasi",
    title: "Konsultasi",
    description:
      "Memahami kebutuhan, tujuan, dan permasalahan bisnis Anda.",
  },
  {
    number: "2. Perencanaan",
    title: "Perencanaan",
    description:
      "Menyusun fitur, teknologi, desain, dan alur pengembangan.",
  },
  {
    number: "3. Pengembangan",
    title: "Pengembangan",
    description:
      "Membangun produk dengan proses yang terstruktur dan terukur.",
  },
  {
    number: "4. Peluncuran",
    title: "Peluncuran",
    description:
      "Melakukan pengujian dan memastikan produk siap digunakan.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-[#08111F] px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Proses
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Dari ide menjadi produk nyata
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {process.map((item) => (
            <div
              key={item.number}
              className="border-t border-blue-400/20 pt-6"
            >
              <span className="mt-4 text-xl font-semibold  text-blue-400">
                {item.number}
              </span>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}