import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e0d9f0] bg-[#faf8fc]">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:py-16">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-display text-2xl font-black text-[#1c142c]">
                Minvect
              </h3>
            </div>
            <p className="text-sm text-[#4a3a6a]">
              Menciptakan cerita visual dan solusi digital yang berani, konsisten,
              dan siap diluncurkan.
            </p>
            <div className="flex gap-3">
              {[
                { icon: "mdi:instagram", href: "#", label: "Instagram" },
                { icon: "mdi:linkedin", href: "#", label: "LinkedIn" },
                { icon: "mdi:github", href: "#", label: "GitHub" },
                { icon: "mdi:whatsapp", href: "#", label: "WhatsApp" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#ff5e7d] to-[#ffc857] text-white transition-transform hover:scale-110"
                  aria-label={social.label}
                >
                  <Icon icon={social.icon} className="text-lg" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="hidden md:flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-[#1c142c]">
              Services
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { name: "Fotografi Editorial", href: "/fotografer" },
                { name: "Desain Grafis", href: "/desain-grafis" },
                { name: "Produk Digital", href: "/it-project" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#4a3a6a] transition-colors hover:text-[#ff5e7d]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-[#1c142c]">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { name: "Home", href: "/" },
                { name: "Portfolio", href: "/it-project" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#4a3a6a] transition-colors hover:text-[#6b7bff]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-[#1c142c]">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:bismin@example.com"
                className="flex items-center gap-2 text-sm text-[#4a3a6a] transition-colors hover:text-[#ff5e7d]"
              >
                <Icon icon="mdi:email-outline" className="text-base" aria-hidden />
                bismin@studio.com
              </a>
              <a
                href="https://wa.me/6281234567890"
                className="flex items-center gap-2 text-sm text-[#4a3a6a] transition-colors hover:text-[#00c6ae]"
              >
                <Icon icon="mdi:whatsapp" className="text-base" aria-hidden />
                +62 812 3456 7890
              </a>
              <p className="flex items-center gap-2 text-sm text-[#4a3a6a]">
                <Icon icon="mdi:map-marker" className="text-base" aria-hidden />
                Indonesia
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-[#e0d9f0]" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-xs text-[#4a3a6a] sm:text-left" suppressHydrationWarning>
            © {currentYear} Minvect. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-[#4a3a6a]">
            <a href="#" className="transition-colors hover:text-[#1c142c]">
              Privacy Policy
            </a>
            <span>·</span>
            <a href="#" className="transition-colors hover:text-[#1c142c]">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
