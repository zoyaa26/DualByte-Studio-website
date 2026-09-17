import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-[#050A12]"
>
      {/* Logo sebagai latar */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
  <div className="relative h-[500px] w-[500px] opacity-60 sm:h-[600px] sm:w-[600px] lg:h-[700px] lg:w-[700px]">
    <Image
      src="/images/logo/logo-b.png"
      alt=""
      fill
      priority
      className="object-contain opacity-[0.06]"
    />
  </div>
</div>

      {/* Cahaya biru lembut */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.04] blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 sm:px-8 lg:px-12">
        <div className="max-w-5xl">
          {/* Label */}

          {/* Judul */}
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
            Jasa Pembuatan
            <br />
            <span className="text-blue-400">
              Website & Aplikasi Mobile
            </span>
          </h1>

          {/* Deskripsi */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Kami membantu bisnis dan startup mewujudkan ide digital menjadi
            website dan aplikasi mobile, dengan sistem digital yang modern, andal,
            serta sesuai dengan kebutuhan bisnis Anda.
          </p>

          {/* Tombol */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
            href="#contact"
            className="rounded-xl bg-blue-500 px-7 py-4 text-center font-semibold text-white shadow-[0_8px_30px_rgba(22,119,255,0.12)] hover:-translate-y-0.5 hover:bg-blue-400"
            >
            Konsultasi Gratis
            </a>

            <a
            href="#portfolio"
            className="rounded-xl border border-blue-400/20 bg-blue-500/[0.03] px-7 py-4 text-center font-semibold text-blue-300 hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-blue-500/[0.07]"
            >
            Lihat Portofolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}