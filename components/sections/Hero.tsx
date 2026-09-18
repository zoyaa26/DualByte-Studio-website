import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-white"
    >
      {/* Logo watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="relative h-[500px] w-[500px] sm:h-[600px] sm:w-[600px] lg:h-[700px] lg:w-[700px]">
          <Image
            src="/images/logo/logo-b.png"
            alt=""
            fill
            priority
            className="object-contain opacity-[0.32]"
          />
        </div>
      </div>

      {/* Aksen biru muda */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-100/60 blur-[100px]" />

      {/* Konten */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-32 text-center sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          {/* Heading */}
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-8xl">
            Jasa Pembuatan
            <br />
            <span className="text-sky-500">
              Website & Aplikasi Mobile
            </span>
          </h1>

          {/* Deskripsi */}
          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Kami membantu bisnis dan startup mewujudkan ide digital menjadi
            produk yang modern, andal, serta sesuai dengan kebutuhan bisnis
            Anda
          </p>

          {/* Tombol */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="w-full rounded-xl bg-sky-500 px-7 py-4 text-center font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-md sm:w-auto"
            >
              Konsultasi Gratis
            </a>

            <a
              href="#portfolio"
              className="w-full rounded-xl border border-sky-200 bg-white px-7 py-4 text-center font-semibold text-sky-600 transition hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50 sm:w-auto"
            >
              Lihat Portofolio
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}