import { Mail, MessageCircle } from "lucide-react";
export default function Footer() {
  return (
    <footer className="border-t border-blue-400/10 bg-[#050A12] px-6 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-xl font-bold text-white">
            DUALBYTE<span className="text-blue-400">.</span>
          </div>

          <p className="mt-2 text-sm text-slate-500">
            Solusi digital untuk bisnis dan startup.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* Email */}
          <a
            href="mailto:halo@dualbytestudio.com"
            aria-label="Email DualByte Studio"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/5 text-blue-300 transition hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-200"
          >
            <Mail size={20} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/628XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp DualByte Studio"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/5 text-blue-300 transition hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-200"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-blue-400/10 pt-6 text-sm text-slate-600">
        © {new Date().getFullYear()} DualByte Studio. Seluruh hak cipta
        dilindungi.
      </div>
    </footer>
  );
}