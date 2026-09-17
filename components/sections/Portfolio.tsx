export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-[#050A12] px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Portofolio
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Proyek yang telah kami kerjakan.
          </h2>
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl border border-blue-400/10 bg-[#08111F]">
          <div className="grid md:grid-cols-2">
            <div className="flex min-h-[350px] items-center justify-center bg-[#0A1728]">
              <span className="text-5xl font-bold text-blue-400">
                OA
              </span>
            </div>

            <div className="p-8 sm:p-12">
              <p className="text-sm font-semibold text-blue-400">
                ARSITEKTUR
              </p>

              <h3 className="mt-4 text-3xl font-bold text-white">
                <a href="https://onearchii.vercel.app" target="_blank" rel="noopener noreferrer">
                  ONE ARCHI INDONESIA
                </a>
              </h3>

              <p className="mt-5 leading-7 text-slate-400">
                Website toko online untuk membantu Nayera menampilkan dan
                menjual produk fashion secara digital.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-blue-400/20 bg-blue-500/5 px-3 py-1 text-sm text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}