const process = [
  {
    title: "Konsultasi",
    description:
      "Memahami kebutuhan, tujuan, dan permasalahan bisnis Anda.",
  },
  {
    title: "Perencanaan",
    description:
      "Menyusun fitur, teknologi, desain, dan alur pengembangan.",
  },
  {
    title: "Pengembangan",
    description:
      "Membangun produk dengan proses yang terstruktur dan terukur.",
  },
  {
    title: "Peluncuran",
    description:
      "Melakukan pengujian dan memastikan produk siap digunakan.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-[#F5FAFF] px-6 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-500">
            Proses
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Dari ide menjadi produk nyata.
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Proses kerja yang terstruktur untuk memastikan setiap proyek
            berjalan dengan jelas dari awal hingga selesai.
          </p>
        </div>

        {/* ========================= */}
        {/* MOBILE TIMELINE */}
        {/* ========================= */}
        <div className="relative mt-12 md:hidden">
          {/* Garis timeline */}
          <div className="absolute bottom-8 left-5 top-8 w-px bg-sky-200" />

          <div className="space-y-8">
            {process.map((item, index) => (
              <div
                key={item.title}
                className="relative flex items-start gap-5"
              >
                {/* Indicator */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-[#F5FAFF] bg-sky-500 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </div>

                {/* Card */}
                <div className="flex-1 rounded-2xl border border-sky-100 bg-white p-6 shadow-sm transition duration-300 hover:border-sky-200 hover:shadow-md">
                  <p className="text-xs font-semibold uppercase tracking-widest text-sky-500">
                    Tahap {index + 1}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================= */}
        {/* DESKTOP TIMELINE */}
        {/* ========================= */}
        <div className="relative mt-16 hidden md:block">
          {/* Garis */}
          <div className="absolute left-[12.5%] right-[12.5%] top-5 h-px bg-sky-200" />

          <div className="grid grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div
                key={item.title}
                className="relative text-center"
              >
                {/* Indicator */}
                <div className="relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#F5FAFF] bg-sky-500 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </div>

                {/* Card */}
                <div className="mt-6 rounded-2xl border border-sky-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-md">
                  <p className="text-xs font-semibold uppercase tracking-widest text-sky-500">
                    Tahap {index + 1}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}