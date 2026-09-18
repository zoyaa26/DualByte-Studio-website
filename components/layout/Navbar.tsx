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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-sky-100 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-slate-900"
        >
          <span className="text-sky-500">DUALBYTE</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-sky-500"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-md"
          >
            Konsultasi
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-sky-100 bg-sky-50 text-xl text-sky-600 transition hover:bg-sky-100 md:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
        >
          {open ? "×" : "☰"}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-sky-100 bg-white px-6 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-sky-50 hover:text-sky-500"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-sky-500 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-sky-600"
            >
              Konsultasi
            </a>
          </div>
        </div>
      )}
    </header>
  );
}