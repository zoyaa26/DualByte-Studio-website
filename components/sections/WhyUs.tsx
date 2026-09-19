import Reveal from "@/components/ui/Reveal";
const reasons = [
  {
    number: "01",
    title: "Kode Bersih",
    description:
      "Kami membangun kode yang terstruktur, mudah dipahami, dan mudah dikembangkan.",
  },
  {
    number: "02",
    title: "Teknologi Modern",
    description:
      "Menggunakan teknologi yang relevan untuk menghasilkan produk digital yang siap berkembang.",
  },
  {
    number: "03",
    title: "Berorientasi Bisnis",
    description:
      "Setiap solusi disesuaikan dengan kebutuhan dan tujuan bisnis, bukan hanya aspek teknis.",
  },
  {
    number: "04",
    title: "Komunikasi Transparan",
    description:
      "Proses pengerjaan dan perkembangan proyek dikomunikasikan secara jelas.",
  },
  {
    number: "05",
    title: "Tepat Waktu",
    description:
      "Kami berkomitmen menyelesaikan pekerjaan sesuai waktu yang telah disepakati.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="bg-white px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-500">
            Mengapa Kami
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Dibangun dengan standar yang jelas
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Kami mengutamakan kualitas teknis, komunikasi yang baik, dan solusi
            yang sesuai dengan kebutuhan 
          </p>
        </div>

        {/* Reasons */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {reasons.map((reason, index) => (
    <Reveal key={reason.title} delay={index * 120}>
      <div className="h-full rounded-2xl border border-sky-100 bg-[#F5FAFF] p-8 transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-lg">
        <h3 className="text-xl font-semibold text-slate-900">
          {reason.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          {reason.description}
        </p>
      </div>
    </Reveal>
  ))}
</div>
      </div>
    </section>
  );
}