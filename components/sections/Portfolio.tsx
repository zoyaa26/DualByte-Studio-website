import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const technologies = ["Next.js", "TypeScript", "Tailwind CSS"];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-white px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-500">
              Portofolio
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Beberapa proyek yang telah kami kerjakan
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Contoh proyek digital yang dikembangkan dengan pendekatan modern,
              fungsional, dan disesuaikan dengan kebutuhan pengguna.
            </p>
          </div>
        </Reveal>

        {/* Portfolio Card */}
        <Reveal delay={150}>
          <div className="group mt-14 overflow-hidden rounded-3xl border border-sky-100 bg-[#F5FAFF] shadow-sm transition duration-500 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100/60">
            <div className="grid lg:grid-cols-[1.5fr_1fr]">
              {/* Preview Website */}
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition duration-500 group-hover:shadow-xl">
                  {/* Browser Header */}
                  <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />

                    <div className="ml-3 flex-1 truncate rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-400">
                      onearchii.vercel.app
                    </div>
                  </div>

                  {/* Screenshot */}
                  <div className="group/image relative aspect-[16/9] overflow-hidden bg-slate-100">
                    <Image
                      src="/images/portfolio/one-archi.png"
                      alt="Pratinjau website One Archi Indonesia"
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover/image:scale-[1.04]"
                    />

                    {/* Overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-slate-900/0 transition-colors duration-500 group-hover/image:bg-slate-900/5" />
                  </div>
                </div>
              </div>

              {/* Information */}
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                <Reveal delay={250}>
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
                    {technologies.map((tech, index) => (
                      <span
                        key={tech}
                        style={{ transitionDelay: `${index * 70}ms` }}
                        className="rounded-lg border border-sky-100 bg-white px-3 py-2 text-sm font-medium text-slate-600 transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
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
                    className="mt-8 inline-flex w-fit items-center gap-3 rounded-xl bg-sky-500 px-6 py-3.5 font-semibold text-white shadow-sm shadow-sky-200 transition duration-300 hover:-translate-y-1 hover:bg-sky-600 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                  >
                    Lihat Website

                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}