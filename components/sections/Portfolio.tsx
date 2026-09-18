import Image from "next/image";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-white px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-500">
            Portofolio
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Beberapa proyek yang telah kami kerjakan
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Contoh proyek digital yang dikembangkan dengan pendekatan modern,
            fungsional, dan disesuaikan dengan kebutuhan pengguna
          </p>
        </div>

        {/* Portfolio Card */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-sky-100 bg-[#F5FAFF] shadow-sm">
          <div className="grid lg:grid-cols-[1.5fr_1fr]">
            {/* Preview Website */}
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
                {/* Browser Header */}
                <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />

                  <div className="ml-3 flex-1 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-400">
                    onearchii.vercel.app
                  </div>
                </div>

                {/* Screenshot */}
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <Image
                    src="/images/portfolio/one-archi.png"
                    alt="Website One Archi Indonesia"
                    fill
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>

            {/* Information */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <span className="w-fit rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-600">
                Company Profile
              </span>

              <h3 className="mt-6 text-3xl font-bold tracking-tight text-slate-900">
                One Archi Indonesia
              </h3>

              <p className="mt-5 leading-7 text-slate-600">
                Website company profile untuk studio arsitektur dan interior
                yang menampilkan portofolio proyek, layanan, tahapan
                perancangan, serta informasi mengenai One Archi Indonesia.
              </p>

              {/* Technology */}
              <div className="mt-7 flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-sky-100 bg-white px-3 py-2 text-sm font-medium text-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href="https://onearchii.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-sky-500 px-6 py-3.5 font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-md"
              >
                Lihat Website
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}