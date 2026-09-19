import Reveal from "@/components/ui/Reveal";
const services = [
  {
    title: "Pengembangan Website",
    description:
      "Membangun website profesional, responsif, cepat, dan sesuai dengan kebutuhan bisnis Anda.",
  },
  {
    title: "Pengembangan Aplikasi Mobile",
    description:
      "Membangun aplikasi mobile modern dengan pengalaman pengguna yang nyaman dan fungsional.",
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
      className="bg-[#F5FAFF] px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-500">
            Layanan
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Solusi digital untuk kebutuhan bisnis Anda.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Kami membantu mengubah kebutuhan dan ide bisnis menjadi produk
            digital yang dapat digunakan secara nyata.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
  {services.map((service, index) => (
    <Reveal
      key={service.title}
      delay={index * 120}
    >
      <div className="group h-full rounded-2xl border border-sky-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg">
        <h3 className="text-2xl font-semibold text-slate-900">
          {service.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          {service.description}
        </p>
      </div>
    </Reveal>
  ))}
</div>
      </div>
    </section>
  );
}