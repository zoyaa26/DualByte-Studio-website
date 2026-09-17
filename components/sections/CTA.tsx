export default function CTA() {
  return (
    <section
      id="contact"
      className="bg-[#08111F] px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-5xl rounded-3xl p-8 text-center sm:p-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          Mari Berkolaborasi
        </p>

        <h2 className="mt-5 text-4xl font-bold text-white sm:text-5xl">
          Punya ide digital yang ingin diwujudkan?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Mari diskusikan kebutuhan Anda dan temukan solusi digital yang tepat
          untuk Anda
        </p>

        <a
          href="https://wa.me/628979147452"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-xl bg-blue-500 px-7 py-4 font-semibold text-white transition hover:bg-blue-400"
        >
          Mulai Konsultasi
        </a>
      </div>
    </section>
  );
}