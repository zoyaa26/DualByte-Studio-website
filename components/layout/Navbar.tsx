"use client";

import { useState } from "react";

const navItems = [
  { label: "Beranda", href: "#home" },
  { label: "Layanan", href: "#services" },
  { label: "Portofolio", href: "#portfolio" },
  { label: "Proses", href: "#process" },
  { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-blue-400/10 bg-[#050A12]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        {/* Logo teks */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-white"
        >
          DUALBYTE
        </a>

        {/* Navigasi Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-blue-300"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            Konsultasi
          </a>
        </div>

        {/* Tombol Mobile */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="text-2xl text-blue-300 md:hidden"
          aria-label="Buka menu"
        >
          {open ? "×" : "☰"}
        </button>
      </nav>

      {/* Navigasi Mobile */}
      {open && (
        <div className="border-t border-blue-400/10 bg-[#050A12] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-slate-300 transition hover:text-blue-300"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-blue-500 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-400"
            >
              Konsultasi
            </a>
          </div>
        </div>
      )}
    </header>
  );
}