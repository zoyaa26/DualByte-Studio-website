import { Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-sky-100 bg-white px-6 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        {/* Brand */}
        <div>
          <a
            href="#home"
            className="text-xl font-bold tracking-tight text-slate-900"
          >
            DUALBYTE<span className="text-sky-500">.</span>
          </a>

          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
            Solusi digital untuk membantu bisnis berkembang melalui teknologi.
          </p>
        </div>

        {/* Contact Icons */}
        <div className="flex items-center gap-3">
          <a
            href="mailto:duallbytestudio@gmail.com"
            aria-label="Email DualByte Studio"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-100 bg-sky-50 text-sky-500 transition hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-100"
          >
            <Mail size={19} strokeWidth={2} />
          </a>

          <a
            href="https://wa.me/628979147452"
            aria-label="WhatsApp DualByte Studio"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-100 bg-sky-50 text-sky-500 transition hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-100"
          >
            <MessageCircle size={19} strokeWidth={2} />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-sky-100 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} DualByte Studio. Seluruh hak cipta
          dilindungi.
        </p>

        <p>Software Development Studio</p>
      </div>
    </footer>
  );
}