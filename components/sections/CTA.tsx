import Reveal from "@/components/ui/Reveal";

export default function CTA() {
  return (
    <section
      id="contact"
      className="bg-[#F5FAFF] px-6 py-24 sm:px-8 lg:px-12"
    >
      <Reveal>
        <div className="mx-auto max-w-5xl rounded-3xl border border-sky-100 bg-white px-6 py-14 text-center shadow-sm sm:px-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-500">
            Mari Berkolaborasi
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Punya ide digital yang ingin diwujudkan?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Mari diskusikan kebutuhan Anda dan temukan solusi digital yang
            sesuai untuk bisnis Anda.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/628979147452"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-xl bg-sky-500 px-7 py-4 font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-md sm:w-auto"
            >
              Mulai Konsultasi
            </a>

            <a
              href="#portfolio"
              className="w-full rounded-xl border border-sky-200 bg-white px-7 py-4 font-semibold text-sky-600 transition duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50 sm:w-auto"
            >
              Lihat Portofolio
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}