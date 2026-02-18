"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { photoSets } from "../data/photoSets";

export default function FotograferPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-[36px] bg-gradient-to-br from-[#ff5e7d]/10 via-[#ffc857]/10 to-[#ff6b9d]/10 border border-white/20 backdrop-blur-md p-6 sm:p-8 md:p-10 overflow-hidden"
      >
        {/* Decorative background elements */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-[#ff5e7d] to-[#ffc857] opacity-10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-tr from-[#ff6b9d] to-[#ff5e7d] opacity-10 blur-3xl" />
        
        <div className="relative">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ff5e7d] to-[#ffc857] shadow-[0_8px_16px_-4px_rgba(255,94,125,0.4)]">
                <Icon icon="mdi:camera-iris" className="text-xl text-white" aria-hidden />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] bg-gradient-to-r from-[#ff5e7d] to-[#ffc857] bg-clip-text text-transparent">
                Fotografer
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-white/60 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full">
              <Icon icon="mdi:image-multiple" className="text-[#ff5e7d]" aria-hidden />
              Visual Storytelling
            </div>
          </div>

          <h1 className="text-display text-4xl sm:text-5xl font-black leading-tight text-[#1c142c]">
            Menghidupkan Emosi lewat <span className="bg-gradient-to-r from-[#ff5e7d] to-[#ffc857] bg-clip-text text-transparent">Cahaya, Warna & Komposisi</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-[#4a3a6a] leading-relaxed">
            Sesi foto dengan pendekatan <span className="font-semibold text-[#ff5e7d]">editorial & storytelling</span>. Fokus pada detail yang membuat visual lebih berani, memorable, dan cerita yang tersampaikan.
          </p>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="grid gap-6 md:grid-cols-3"
      >
        {photoSets.map((item, index) => (
          <motion.article 
            key={item.title} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className={`group relative rounded-3xl bg-gradient-to-br ${item.accent} overflow-hidden shadow-[0_20px_35px_-20px_rgba(28,20,44,0.7)] transition-all hover:shadow-[0_30px_50px_-20px_rgba(28,20,44,0.9)]`}
          >
            {/* Animated background orb */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl transition-transform group-hover:scale-150" />

            <div className="relative h-80 w-full overflow-hidden">
              {/* Image */}
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Tag on top */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-3 py-1.5">
                <Icon icon={item.icon} className="text-sm text-white" aria-hidden />
                <span className="text-xs font-bold text-white">{item.tag}</span>
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h2 className="text-2xl font-black text-white">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm text-white/90 leading-relaxed">
                  {item.desc}
                </p>
                
                {/* View button */}
                <Link 
                  href={item.link}
                  className="mt-4 inline-block rounded-xl border-2 border-white/40 bg-white/10 px-4 py-2 text-center text-sm font-bold text-white backdrop-blur transition-all hover:border-white/80 hover:bg-white/20"
                >
                  Lihat Galeri
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="rounded-3xl bg-gradient-to-br from-white/50 to-white/30 backdrop-blur border border-white/20 p-6 sm:p-8 shadow-[0_20px_35px_-20px_rgba(28,20,44,0.5)]">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#ff5e7d] to-[#ffc857]">
              <Icon icon="mdi:palette-advanced" className="text-lg text-white" aria-hidden />
            </div>
            <h3 className="text-display text-3xl text-[#1c142c]">
              Mood & Style
            </h3>
          </div>
          <div className="grid gap-3">
            {[
              { 
                title: "Warna & Kontras",
                desc: "Warna bold, kulit natural, kontras tajam.",
                icon: "mdi:contrast-circle",
                color: "from-[#ff5e7d] to-[#ffc857]"
              },
              { 
                title: "Pencahayaan",
                desc: "Kombinasi cahaya alami dan lampu gel.",
                icon: "mdi:lightbulb-on",
                color: "from-[#fbbf24] to-[#f59e0b]"
              },
              { 
                title: "Komposisi",
                desc: "Pose dinamis, siluet, dan framing unik.",
                icon: "mdi:crop",
                color: "from-[#6b7bff] to-[#00c6ae]"
              },
            ].map((feature) => (
              <div 
                key={feature.title}
                className={`rounded-2xl bg-gradient-to-br ${feature.color} p-4 shadow-[0_10px_20px_-10px_rgba(28,20,44,0.3)]`}
              >
                <div className="flex items-start gap-3">
                  <Icon icon={feature.icon} className="text-2xl text-white flex-shrink-0 mt-0.5" aria-hidden />
                  <div>
                    <p className="font-bold text-white text-sm">{feature.title}</p>
                    <p className="text-xs text-white/80 mt-1">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-[#ff5e7d] to-[#ff8a73] p-6 sm:p-8 shadow-[0_20px_35px_-20px_rgba(255,94,125,0.5)] flex flex-col justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/80 mb-2">Ready to create</p>
            <h3 className="text-display text-3xl font-black text-white">
              Mau Sesi Foto Baru?
            </h3>
            <p className="mt-4 text-sm text-white/90 leading-relaxed">
              Mulai dari konsultasi brief, moodboard development, lalu eksekusi yang sempurna. Mari wujudkan visi visual Anda.
            </p>
          </div>
          <a
            href="/contact"
            className="mt-6 rounded-xl bg-white/20 border-2 border-white/40 px-5 py-3 text-center text-sm font-bold text-white backdrop-blur transition-all hover:bg-white/30 hover:border-white/80"
          >
            Jadwalkan Sesi Foto
          </a>
        </div>
      </motion.section>
    </div>
  );
}
