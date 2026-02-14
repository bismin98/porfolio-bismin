"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";

const navItems = [
  { href: "/", label: "Home", icon: "mdi:home-variant" },
  { href: "/it-project", label: "IT Project", icon: "mdi:code-tags" },
  { href: "/fotografer", label: "Fotografer", icon: "mdi:camera" },
  { href: "/desain-grafis", label: "Desain Grafis", icon: "mdi:palette" },
  { href: "/contact", label: "Contact", icon: "mdi:send" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-center gap-1 border-t border-white/20 bg-white/80 backdrop-blur px-2 py-3 md:hidden">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center gap-1 rounded-2xl px-3 py-2 transition-all duration-300 ${
              isActive
                ? "bg-gradient-to-br from-[#6b7bff] to-[#ff5e7d] text-white shadow-[0_8px_16px_-4px_rgba(107,123,255,0.4)]"
                : "text-[#4a3a6a] hover:text-[#1c142c]"
            }`}
            title={item.label}
          >
            <Icon icon={item.icon} className="text-2xl" aria-hidden />
            <span className="text-[10px] font-bold">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
