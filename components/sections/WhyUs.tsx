const reasons = [
  {
    title: "Kode Bersih",
    description:
      "Kami membangun kode yang terstruktur, mudah dipahami, dan mudah dikembangkan.",
  },
  {
    title: "Teknologi Modern",
    description:
      "Menggunakan teknologi yang relevan untuk menghasilkan produk digital yang siap berkembang.",
  },
  {
    title: "Berorientasi Bisnis",
    description:
      "Setiap solusi disesuaikan dengan kebutuhan dan tujuan bisnis, bukan hanya aspek teknis.",
  },
  {
    title: "Komunikasi Transparan",
    description:
      "Proses pengerjaan dan perkembangan proyek dikomunikasikan secara jelas.",
  },
  {
    title: "Tepat Waktu",
    description:
      "Kami berkomitmen menyelesaikan pekerjaan sesuai waktu yang telah disepakati.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-[#050A12] px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
             KENAPA MEMILIH DUALBYTE?
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Dibangun dengan standar yang jelas
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-blue-400/10 bg-[#08111F] p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-sm font-bold text-blue-300">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="mt-6 font-semibold text-white">
                {reason.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}