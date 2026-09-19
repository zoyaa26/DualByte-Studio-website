export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white px-6 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-36 lg:px-12 lg:pb-32"
    >
      {/* Dekorasi latar */}
      <div className="pointer-events-none absolute -right-32 top-24 h-80 w-80 rounded-full bg-sky-100/70 blur-3xl" />

      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-blue-50 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-12">
        {/* Kolom kiri: Konten */}
        <div className="relative z-10 text-center lg:text-left">
          {/* Label */}

          {/* Heading */}
          <h1 className="animate-fade-up text-5xl font-bold tracking-tight text-slate-900">
            Wujudkan Ide
            <br />
            Digital Anda
            <br />
            <span className="text-sky-500">
              Bersama DualByte
            </span>
          </h1>

          {/* Deskripsi */}
          <p className="animate-fade-up animation-delay-200 mt-6 text-lg leading-8 text-slate-600">
            Kami membantu bisnis dan startup membangun website,
            aplikasi mobile, dan perangkat lunak kustom yang modern,
            fungsional, serta sesuai dengan kebutuhan Anda
          </p>


          {/* Tombol */}
         <div className="animate-fade-up animation-delay-400 mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 px-7 py-4 font-semibold text-white shadow-md shadow-sky-100 transition duration-300 hover:-translate-y-1 hover:bg-sky-600 hover:shadow-lg sm:w-auto"
            >
              Konsultasi Gratis
            </a>

            <a
              href="#portfolio"
              className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600 sm:w-auto"
            >
              Lihat Portofolio
            </a>
          </div>

          {/* Informasi singkat */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-500 lg:justify-start">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-100 text-xs text-sky-600">
                ✓
              </span>
              Website Responsif
            </div>

            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-100 text-xs text-sky-600">
                ✓
              </span>
              Desain Modern
            </div>
          </div>
        </div>

        {/* Kolom kanan: Visual mockup */}
          <div className="animate-fade-up animation-delay-200 relative mx-auto w-full max-w-xl lg:max-w-none">
          {/* Panel latar */}
          <div className="absolute inset-4 rotate-3 rounded-[2rem] bg-sky-100 sm:inset-6" />
          {/* Mockup utama */}
          <div className="animate-float relative rounded-[1.75rem] border border-sky-100 bg-white p-3 shadow-2xl shadow-sky-100/70 sm:p-4">
            {/* Browser bar */}
            <div className="flex items-center gap-2 border-b border-slate-100 px-3 pb-4 pt-2">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />

              <div className="ml-3 flex-1 rounded-lg bg-slate-50 px-4 py-2 text-xs text-slate-400">
                aplikasi-bisnis.com
              </div>
            </div>

            {/* Mockup dashboard */}
            <div className="grid gap-4 p-3 sm:grid-cols-[1fr_1.5fr] sm:p-5">
              {/* Sidebar */}
              <div className="hidden rounded-2xl bg-slate-50 p-4 sm:block">
                <div className="mb-7 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500 text-sm font-bold text-white">
                    D
                  </div>

                  <span className="text-sm font-bold text-slate-800">
                    Dashboard
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="rounded-lg bg-sky-100 px-3 py-2.5 text-xs font-medium text-sky-700">
                    Ringkasan
                  </div>

                  <div className="rounded-lg px-3 py-2.5 text-xs text-slate-500">
                    Data Transaksi
                  </div>

                  <div className="rounded-lg px-3 py-2.5 text-xs text-slate-500">
                    Laporan
                  </div>

                  <div className="rounded-lg px-3 py-2.5 text-xs text-slate-500">
                    Pengaturan
                  </div>
                </div>
              </div>

              {/* Main dashboard */}
              <div className="min-w-0">
                <div className="mb-5">
                  <p className="text-xs text-slate-400">
                    Selamat datang kembali
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-slate-800 sm:text-xl">
                    Ringkasan Bisnis
                  </h3>
                </div>

                {/* Statistik visual dekoratif */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-sky-100 bg-sky-50/70 p-3 sm:p-4">
                    <p className="text-[10px] text-slate-500 sm:text-xs">
                      Total Pengunjung
                    </p>

                    <div className="mt-2 text-xl font-bold text-slate-800 sm:text-2xl">
                      2.480
                    </div>

                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-sky-100">
                      <div className="h-full w-3/4 rounded-full bg-sky-500" />
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-white p-3 sm:p-4">
                    <p className="text-[10px] text-slate-500 sm:text-xs">
                      Aktivitas
                    </p>

                    <div className="mt-2 text-xl font-bold text-slate-800 sm:text-2xl">
                      Aktif
                    </div>

                    <div className="mt-2 flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span className="text-[10px] text-slate-500 sm:text-xs">
                        Sistem berjalan
                      </span>
                    </div>
                  </div>
                </div>

                {/* Grafik dekoratif */}
                <div className="mt-4 rounded-xl border border-slate-100 bg-white p-4">
                  <div className="mb-5 flex items-center justify-between">
                    <p className="text-xs font-semibold text-slate-700 sm:text-sm">
                      Aktivitas Mingguan
                    </p>

                    <span className="rounded-md bg-sky-50 px-2 py-1 text-[10px] text-sky-600">
                      Minggu ini
                    </span>
                  </div>

                  <div className="flex h-28 items-end justify-between gap-2 sm:h-36">
                    {[45, 70, 55, 85, 60, 95, 75].map((height, index) => (
                      <div
                        key={index}
                        className="flex h-full flex-1 items-end"
                      >
                        <div
                          className={`w-full rounded-t-md ${
                            index === 5 ? "bg-sky-500" : "bg-sky-200"
                          }`}
                          style={{ height: `${height}%` }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 flex justify-between text-[9px] text-slate-400 sm:text-[10px]">
                    <span>Sen</span>
                    <span>Sel</span>
                    <span>Rab</span>
                    <span>Kam</span>
                    <span>Jum</span>
                    <span>Sab</span>
                    <span>Min</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bagian bawah mockup */}
            <div className="mx-3 mb-2 flex items-center justify-between rounded-xl border border-slate-100 bg-white p-3 sm:mx-5 sm:p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-100 text-sky-600">
                  ✓
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-700">
                    Pengalaman Digital
                  </p>

                  <p className="mt-1 text-[10px] text-slate-400">
                    Dirancang untuk kebutuhan bisnis
                  </p>
                </div>
              </div>

              <span className="rounded-lg bg-sky-50 px-3 py-2 text-[10px] font-medium text-sky-600">
                Modern
              </span>
            </div>
          </div>

          {/* Kartu mengambang */}
          <div className="animate-float absolute -left-3 top-1/4 hidden rounded-2xl border border-sky-100 bg-white p-4 shadow-xl shadow-sky-100/60 sm:block lg:-left-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-lg">
                {"</>"}
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-800">
                  Pengembangan
                </p>

                <p className="mt-1 text-[10px] text-slate-400">
                  Solusi sesuai kebutuhan
                </p>
              </div>
            </div>
          </div>

          <div className="animate-float animation-delay-400 absolute -bottom-5 right-2 rounded-2xl border border-sky-100 bg-white p-4 shadow-xl shadow-sky-100/60 sm:right-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500 text-white">
                ✓
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-800">
                  Siap Dikembangkan
                </p>

                <p className="mt-1 text-[10px] text-slate-400">
                  Fleksibel dan terstruktur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}