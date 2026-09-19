import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
} from "lucide-react";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiFlutter,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiGithub,
  SiGit,
} from "react-icons/si";

const technologies = [
  {
    name: "React.js",
    Icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    Icon: SiNextdotjs,
    color: "#111827",
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "Node.js",
    Icon: SiNodedotjs,
    color: "#5FA04E",
  },
  {
    name: "Flutter",
    Icon: SiFlutter,
    color: "#02569B",
  },
  {
    name: "Python",
    Icon: SiPython,
    color: "#3776AB",
  },
  {
    name: "PostgreSQL",
    Icon: SiPostgresql,
    color: "#4169E1",
  },
  {
    name: "MySQL",
    Icon: SiMysql,
    color: "#00758F",
  },
  {
    name: "SQLite",
    Icon: SiSqlite,
    color: "#0F80CC",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-white px-5 pb-10 pt-24 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pb-24 lg:pt-28"
    >
      {/* Dekorasi latar belakang */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-32 -z-10 h-72 w-72 rounded-full bg-sky-100/60 blur-3xl sm:top-36 sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 bottom-0 -z-10 h-72 w-72 rounded-full bg-blue-50/80 blur-3xl sm:h-96 sm:w-96"
      />

      {/* Konten utama */}
      <div className="mx-auto grid max-w-7xl items-center gap-8 sm:gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        {/* Kolom kiri */}
        <div className="relative z-10 text-center lg:text-left">
          {/* Headline */}
          <h1 className="animate-fade-up text-[2.2rem] font-extrabold leading-[1.08] tracking-tight text-slate-900 min-[400px]:text-[2.45rem] sm:text-5xl sm:leading-[1.12] lg:text-6xl xl:text-[4.25rem]">
            Wujudkan Ide
            <br />
            Digital Anda
            <br />
            <span className="text-sky-500">
              Bersama DualByte.
            </span>
          </h1>

          {/* Deskripsi */}
          <p className="animate-fade-up animation-delay-200 mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
            Kami membantu bisnis dan startup mewujudkan ide digital
            menjadi produk perangkat lunak yang cepat, andal, dan
            sesuai dengan kebutuhan Anda.
          </p>

          {/* Tombol CTA */}
          <div className="animate-fade-up animation-delay-400 mx-auto mt-6 grid max-w-lg grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:mx-0 sm:mt-8 sm:flex sm:max-w-none sm:justify-center sm:gap-4 lg:justify-start">
            <a
              href="#contact"
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-sky-100 transition duration-300 hover:-translate-y-1 hover:bg-sky-600 hover:shadow-lg sm:min-h-14 sm:gap-3 sm:rounded-2xl sm:px-7 sm:py-4 sm:text-base"
            >
              Mari Konsultasi

              <ArrowUpRight
                size={18}
                className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="#portfolio"
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-sky-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700 sm:min-h-14 sm:gap-3 sm:rounded-2xl sm:px-7 sm:py-4 sm:text-base"
            >
              <BriefcaseBusiness
                size={18}
                className="shrink-0 text-sky-500 transition-transform duration-300 group-hover:scale-110"
              />

              Lihat Portofolio
            </a>
          </div>

          {/* Ringkasan teknologi di mobile */}
          <div className="mt-6 lg:hidden">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              Teknologi yang Digunakan
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {technologies.map(({ name, Icon, color }) => (
                <div
                  key={name}
                  title={name}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-sky-100 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-sky-50"
                >
                  <Icon
                    size={21}
                    color={color}
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Kolom kanan — Technology Stack */}
        <div className="animate-fade-up animation-delay-200 relative mx-auto w-full max-w-2xl lg:max-w-none">
          {/* Dekorasi titik */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-4 -top-4 -z-10 hidden h-24 w-24 opacity-70 sm:block"
            style={{
              backgroundImage:
                "radial-gradient(#bae6fd 1.8px, transparent 1.8px)",
              backgroundSize: "20px 20px",
            }}
          />

          {/* Panel utama */}
          <div className="relative rounded-2xl border border-sky-100 bg-white p-3.5 shadow-[0_20px_60px_rgba(14,165,233,0.10)] sm:rounded-[2rem] sm:p-6 md:p-8">
            {/* Header panel */}
            <div className="mb-4 flex items-center gap-3 sm:mb-7 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-sky-100 bg-sky-50 sm:h-14 sm:w-14 sm:rounded-2xl">
                <Code2
                  size={23}
                  className="text-sky-600 sm:size-7"
                />
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-sky-600 sm:text-base">
                  Technology Stack
                </p>

                <p className="mt-0.5 text-xs leading-5 text-slate-500 sm:mt-1 sm:text-sm">
                  Teknologi modern untuk solusi digital
                </p>
              </div>
            </div>

            {/* Grid teknologi */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {technologies.map(({ name, Icon, color }) => (
                <div
                  key={name}
                  className="group flex min-h-[94px] min-w-0 flex-col items-center justify-center rounded-xl border border-slate-100 bg-white px-1 py-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:bg-sky-50/50 hover:shadow-lg hover:shadow-sky-100/50 sm:min-h-[142px] sm:rounded-2xl sm:px-2 sm:py-5"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 transition duration-300 group-hover:scale-105 group-hover:bg-white sm:h-16 sm:w-16 sm:rounded-2xl">
                    <Icon
                      size={25}
                      color={color}
                      aria-hidden="true"
                      className="max-h-6 max-w-6 sm:max-h-10 sm:max-w-10"
                    />
                  </div>

                  <span className="mt-2 break-words text-center text-[10px] font-semibold leading-tight text-slate-700 sm:mt-3 sm:text-sm">
                    {name}
                  </span>
                </div>
              ))}
            </div>

            {/* Teknologi pendukung */}
            <div className="mt-3 grid grid-cols-3 divide-x divide-sky-100 overflow-hidden rounded-xl border border-sky-100 bg-white sm:mt-6 sm:rounded-2xl">
              <div className="flex min-w-0 items-center justify-center gap-1.5 px-1 py-3 sm:gap-2.5 sm:px-3 sm:py-4">
                <SiGithub
                  size={18}
                  aria-hidden="true"
                  className="shrink-0 text-slate-800 sm:size-5"
                />

                <span className="text-[10px] font-semibold text-slate-700 sm:text-sm">
                  GitHub
                </span>
              </div>

              <div className="flex min-w-0 items-center justify-center gap-1.5 px-1 py-3 sm:gap-2.5 sm:px-3 sm:py-4">
                <SiGit
                  size={18}
                  aria-hidden="true"
                  className="shrink-0 text-orange-600 sm:size-5"
                />

                <span className="text-[10px] font-semibold text-slate-700 sm:text-sm">
                  Git
                </span>
              </div>

              <div className="flex min-w-0 items-center justify-center gap-1.5 px-1 py-3 sm:gap-2.5 sm:px-3 sm:py-4">
                <Code2
                  size={18}
                  aria-hidden="true"
                  className="shrink-0 text-sky-600 sm:size-5"
                />

                <span className="text-[10px] font-semibold text-slate-700 sm:text-sm">
                  REST API
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}