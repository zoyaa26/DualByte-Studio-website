"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Beranda", href: "#home" },
  { label: "Layanan", href: "#services" },
  { label: "Portofolio", href: "#portfolio" },
  { label: "Proses", href: "#process" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      <div className="relative mx-auto max-w-6xl">
        {/* Navbar Utama */}
        <nav
          aria-label="Navigasi utama"
          className="relative z-20 rounded-full border border-slate-200/80 bg-white/95 shadow-[0_8px_30px_rgba(15,23,42,0.07)] backdrop-blur-xl"
        >
          <div className="flex h-[68px] items-center justify-between px-5 sm:px-7">
            {/* Logo */}
            <a
              href="#home"
              onClick={closeMenu}
              aria-label="DualByte Studio - Beranda"
              className="shrink-0 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl"
            >
              DUALBYTE<span className="text-sky-500">.</span>
            </a>

            {/* Navigasi Desktop */}
            <div className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-sky-500"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Tombol Konsultasi Desktop */}
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-md lg:inline-flex"
            >
              Mari Konsultasi
              <ArrowUpRight size={16} />
            </a>

            {/* Tombol Menu Mobile */}
            <button
              type="button"
              onClick={() => setOpen((previous) => !previous)}
              aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-50 text-slate-700 transition-all duration-300 hover:bg-sky-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 lg:hidden"
            >
              <span
                className={`transition-transform duration-300 ${
                  open ? "rotate-90" : "rotate-0"
                }`}
              >
                {open ? (
                  <X size={21} strokeWidth={2} />
                ) : (
                  <Menu size={21} strokeWidth={2} />
                )}
              </span>
            </button>
          </div>
        </nav>

        {/* Dropdown Menu Mobile */}
        <div
          id="mobile-navigation"
          aria-hidden={!open}
          className={`absolute left-0 right-0 top-[calc(100%+10px)] z-10 origin-top rounded-3xl border border-slate-200/80 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.10)] transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
            open
              ? "visible translate-y-0 scale-100 opacity-100"
              : "invisible -translate-y-2 scale-[0.98] opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1 p-4">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                tabIndex={open ? 0 : -1}
                style={{
                  transitionDelay: open ? `${index * 40}ms` : "0ms",
                }}
                className={`rounded-xl px-4 py-3.5 text-sm font-medium text-slate-600 transition-[background-color,color,transform] duration-200 hover:bg-sky-50 hover:text-sky-600 ${
                  open ? "translate-x-0" : "-translate-x-2"
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* Tombol Konsultasi Mobile */}
            <a
              href="#contact"
              onClick={closeMenu}
              tabIndex={open ? 0 : -1}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-sky-500 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-sky-600 active:scale-[0.98]"
            >
              Mari Konsultasi
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}