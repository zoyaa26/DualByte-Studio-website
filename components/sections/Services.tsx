const services = [
  {
    title: "Pengembangan Website",
    description:
      "Membangun website profesional, responsif, cepat, dan sesuai dengan kebutuhan bisnis Anda.",
  },
  {
    title: "Pengembangan Aplikasi Mobile",
    description:
      "Membangun aplikasi mobile yang modern dengan pengalaman pengguna yang nyaman dan fungsional.",
  },
  {
    title: "Perangkat Lunak Kustom",
    description:
      "Membangun sistem dan aplikasi khusus berdasarkan kebutuhan serta alur kerja bisnis Anda.",
  },
  {
    title: "UI/UX & Arsitektur Sistem",
    description:
      "Merancang antarmuka dan struktur sistem yang terorganisir, mudah digunakan, dan mudah dikembangkan.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#08111F] px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Layanan
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Solusi digital untuk kebutuhan bisnis Anda
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Kami membantu mengubah kebutuhan dan ide bisnis menjadi produk
            digital yang dapat digunakan secara nyata
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-blue-400/10 bg-[#08111F] p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-blue-400/25"
            >
             
              <h3 className="mt-5 text-2xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}