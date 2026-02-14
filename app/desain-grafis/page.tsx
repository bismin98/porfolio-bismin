"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { motion } from "framer-motion";

const graphicWorks = [
  {
    title: "Brand Identity",
    desc: "Logo, sistem warna, dan guideline agar brand konsisten di semua media.",
    accent: "from-[#ffc857] to-[#ff8a00]",
    icon: "mdi:shape-outline",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=80",
    alt: "Stationery brand identity dengan logo",
    tag: "Branding",
    deliverables: ["Logo Design", "Color System", "Brand Guidelines"],
  },
  {
    title: "Campaign Visual",
    desc: "Poster, key visual, dan social kit dengan tone yang berani.",
    accent: "from-[#6b7bff] to-[#8b5cf6]",
    icon: "mdi:chart-box-outline",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    alt: "Setup kreatif untuk campaign visual",
    tag: "Campaign",
    deliverables: ["Poster Design", "Key Visual", "Social Media Kit"],
  },
  {
    title: "Packaging",
    desc: "Struktur kemasan yang premium dan mudah dikenali.",
    accent: "from-[#00c6ae] to-[#06b6d4]",
    icon: "mdi:package-variant-closed",
    image:
      "https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Kemasan produk dengan detail premium",
    tag: "Packaging",
    deliverables: ["Package Design", "Label Design", "Mockups"],
  },
];

export default function DesainGrafisPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
      {/* Header Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-[36px] bg-gradient-to-br from-[#00c6ae]/10 via-[#6b7bff]/10 to-[#ffc857]/10 border border-white/20 backdrop-blur-md p-6 sm:p-8 md:p-10 overflow-hidden"
      >
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-[#00c6ae] to-[#6b7bff] opacity-10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-tr from-[#ffc857] to-[#ff8a00] opacity-10 blur-3xl" />
        
        <div className="relative">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#00c6ae] to-[#6b7bff] shadow-[0_8px_16px_-4px_rgba(0,198,174,0.4)]">
                <Icon icon="mdi:palette" className="text-xl text-white" aria-hidden />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] bg-gradient-to-r from-[#00c6ae] to-[#6b7bff] bg-clip-text text-transparent">
                Desain Grafis
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-white/60 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full">
              <Icon icon="mdi:star-four-points" className="text-[#ffc857]" aria-hidden />
              Creative Visual
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_0.4fr] gap-8 items-start">
            <div>
              <h1 className="text-display text-4xl sm:text-5xl font-black leading-tight text-[#1c142c]">
                Visual yang <span className="bg-gradient-to-r from-[#00c6ae] to-[#6b7bff] bg-clip-text text-transparent">Konsisten, Berani</span> & Mudah Dikenali
              </h1>
              <p className="mt-5 max-w-2xl text-base text-[#4a3a6a] leading-relaxed">
                Dari konsep sampai <span className="font-semibold text-[#00c6ae]">final artwork</span>, fokus pada detail dan tone warna yang sesuai dengan karakter brand. Setiap desain dibuat untuk menciptakan <span className="font-semibold text-[#6b7bff]">memorable impression</span>.
              </p>
              
              {/* Process Steps */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { label: "Research", icon: "mdi:magnify" },
                  { label: "Concept", icon: "mdi:lightbulb-outline" },
                  { label: "Design", icon: "mdi:palette-advanced" },
                  { label: "Delivery", icon: "mdi:check-circle" },
                ].map((step) => (
                  <div
                    key={step.label}
                    className="flex items-center gap-2 rounded-full bg-white/50 px-4 py-2 text-xs font-semibold text-[#1c142c] backdrop-blur transition-all hover:bg-white/70"
                  >
                    <Icon icon={step.icon} className="text-sm text-[#00c6ae]" aria-hidden />
                    {step.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats card */}
            <div className="grid gap-3 pt-4">
              <div className="rounded-2xl bg-gradient-to-br from-[#ffc857] to-[#ff8a00] p-5 shadow-[0_15px_30px_-15px_rgba(255,200,87,0.4)]">
                <div className="flex items-center justify-between gap-3">
                  <Icon icon="mdi:palette-swatch" className="text-4xl text-white opacity-30" aria-hidden />
                  <div className="text-right">
                    <p className="text-3xl font-black text-white">3+</p>
                    <p className="text-xs font-semibold text-white/80 uppercase tracking-wide">Services</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-[#6b7bff] to-[#8b5cf6] p-5 shadow-[0_15px_30px_-15px_rgba(107,123,255,0.4)]">
                <div className="flex items-center justify-between gap-3">
                  <Icon icon="mdi:tools" className="text-4xl text-white opacity-30" aria-hidden />
                  <div className="text-right">
                    <p className="text-3xl font-black text-white">5+</p>
                    <p className="text-xs font-semibold text-white/80 uppercase tracking-wide">Design Tools</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Works Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="grid gap-6 md:grid-cols-3"
      >
        {graphicWorks.map((work, index) => (
          <motion.article 
            key={work.title} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className={`group relative rounded-3xl bg-gradient-to-br ${work.accent} overflow-hidden shadow-[0_20px_35px_-20px_rgba(28,20,44,0.7)] transition-all hover:shadow-[0_30px_50px_-20px_rgba(28,20,44,0.9)]`}
          >
            {/* Animated background orb */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl transition-transform group-hover:scale-150" />

            <div className="relative p-6">
              {/* Header */}
              <div className="mb-5 flex items-start justify-between">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1.5 backdrop-blur mb-3">
                    <Icon icon="mdi:star" className="text-xs text-white" aria-hidden />
                    <span className="text-xs font-bold text-white">{work.tag}</span>
                  </span>
                  <h2 className="text-2xl font-black text-white">
                    {work.title}
                  </h2>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/30 backdrop-blur transition-transform group-hover:scale-110 shadow-[0_8px_16px_-4px_rgba(0,0,0,0.2)]">
                  <Icon icon={work.icon} className="text-2xl text-white" aria-hidden />
                </div>
              </div>

              {/* Image with overlay */}
              <div className="relative mb-6 h-44 w-full overflow-hidden rounded-2xl">
                <Image
                  src={work.image}
                  alt={work.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                {/* Corner accent */}
                <div className="absolute right-0 top-0 h-12 w-12 bg-gradient-to-br from-white/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>

              {/* Description */}
              <p className="mb-5 text-sm leading-relaxed text-white/90">
                {work.desc}
              </p>

              {/* Deliverables */}
              <div className="mb-6 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/70">Deliverables</p>
                <div className="flex flex-wrap gap-2">
                  {work.deliverables.map((item) => (
                    <span 
                      key={item} 
                      className="flex items-center gap-1.5 rounded-lg bg-white/30 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur transition-all hover:bg-white/40 shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1)]"
                    >
                      <Icon icon="mdi:check" className="text-sm text-white" aria-hidden />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full rounded-xl border-2 border-white/40 bg-white/20 px-4 py-3 text-center text-sm font-bold text-white backdrop-blur transition-all hover:border-white/80 hover:bg-white/30 active:scale-95 shadow-[0_8px_16px_-4px_rgba(0,0,0,0.2)]">
                Lihat Portfolio
              </button>
            </div>
          </motion.article>
        ))}
      </motion.section>

      {/* Toolkit Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="grid gap-6 md:grid-cols-[1fr_1.5fr]"
      >
        <div className="rounded-3xl bg-gradient-to-br from-white/50 to-white/30 backdrop-blur border border-white/20 p-6 sm:p-8 shadow-[0_20px_35px_-20px_rgba(28,20,44,0.5)] flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#00c6ae] to-[#6b7bff]">
              <Icon icon="mdi:tools" className="text-lg text-white" aria-hidden />
            </div>
            <h3 className="text-display text-3xl text-[#1c142c]">
              Design Toolkit
            </h3>
          </div>
          <p className="text-sm text-[#4a3a6a] leading-relaxed">
            Kombinasi <span className="font-semibold text-[#00c6ae]">ilustrasi</span>, grid, dan <span className="font-semibold text-[#6b7bff]">tipografi eksperimental</span> untuk hasil yang fresh dan memorable.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { label: "Illustrator", icon: "mdi:pen", color: "from-[#ff9a00] to-[#ff6b00]" },
            { label: "Photoshop", icon: "mdi:palette-swatch", color: "from-[#00c8ff] to-[#0078ff]" },
            { label: "Figma", icon: "mdi:vector-square", color: "from-[#f24e1e] to-[#a259ff]" },
            { label: "After Effects", icon: "mdi:movie-open", color: "from-[#9999ff] to-[#6666ff]" },
            { label: "Blender", icon: "mdi:cube-outline", color: "from-[#f5792a] to-[#265787]" },
            { label: "InDesign", icon: "mdi:book-open-page-variant", color: "from-[#ff408c] to-[#ff1654]" },
          ].map((tool) => (
            <div
              key={tool.label}
              className={`rounded-2xl bg-gradient-to-br ${tool.color} p-5 shadow-[0_10px_20px_-10px_rgba(28,20,44,0.5)] transition-all hover:scale-105 hover:shadow-[0_15px_30px_-10px_rgba(28,20,44,0.7)]`}
            >
              <div className="flex flex-col items-start gap-2">
                <Icon icon={tool.icon} className="text-3xl text-white" aria-hidden />
                <p className="text-xs font-bold text-white">{tool.label}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl bg-gradient-to-br from-[#00c6ae] to-[#6b7bff] p-6 sm:p-8 md:p-10 shadow-[0_20px_35px_-20px_rgba(0,198,174,0.5)] overflow-hidden relative"
      >
        <div className="absolute -right-16 -bottom-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
        <div className="relative grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <h3 className="text-display text-3xl font-black text-white mb-3">
              Butuh Desain Grafis untuk Brand Anda?
            </h3>
            <p className="text-sm text-white/90 leading-relaxed max-w-2xl">
              Mari diskusikan kebutuhan visual brand Anda. Dari brand identity, campaign material, hingga packaging design - saya siap membantu mewujudkan visi kreatif Anda.
            </p>
          </div>
          <a
            href="/contact"
            className="rounded-xl bg-white/20 border-2 border-white/40 px-6 py-4 text-center text-sm font-bold text-white backdrop-blur transition-all hover:bg-white/30 hover:border-white/80 whitespace-nowrap"
          >
            Konsultasi Desain
          </a>
        </div>
      </motion.section>
    </div>
  );
}
