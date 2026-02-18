"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { itProjects } from "../data/itProjects";

export default function ItProjectPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-[36px] bg-gradient-to-br from-[#0ea5e9]/10 via-[#6b7bff]/10 to-[#00c6ae]/10 border border-white/20 backdrop-blur-md p-6 sm:p-8 md:p-10 overflow-hidden"
      >
        {/* Decorative background elements */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#6b7bff] opacity-10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-tr from-[#00c6ae] to-[#06b6d4] opacity-10 blur-3xl" />
        
        <div className="relative">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#6b7bff] shadow-[0_8px_16px_-4px_rgba(14,165,233,0.4)]">
                <Icon icon="mdi:code-tags" className="text-xl text-white" aria-hidden />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] bg-gradient-to-r from-[#0ea5e9] to-[#6b7bff] bg-clip-text text-transparent">
                IT Project & UI/UX
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-white/60 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full">
              <Icon icon="mdi:star" className="text-[#fbbf24]" aria-hidden />
              Digital Solutions
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_0.4fr] gap-8 items-start">
            <div>
              <h1 className="text-display text-4xl sm:text-5xl font-black leading-tight text-[#1c142c]">
                Produk Digital dengan Desain Interface yang <span className="bg-gradient-to-r from-[#0ea5e9] to-[#6b7bff] bg-clip-text text-transparent">Intuitif & Optimal</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base text-[#4a3a6a] leading-relaxed">
                Menggabungkan <span className="font-semibold text-[#6b7bff]">UI/UX design</span> yang thoughtful dengan development clean code. Fokus pada pengalaman pengguna, accessibility terbaik, dan performa yang siap scale.
              </p>
              
              {/* Feature highlights */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { label: "Responsive", icon: "mdi:responsive" },
                  { label: "Accessible", icon: "mdi:accessibility" },
                  { label: "Performance", icon: "mdi:lightning-bolt" },
                ].map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center gap-2 rounded-full bg-white/50 px-4 py-2 text-xs font-semibold text-[#1c142c] backdrop-blur transition-all hover:bg-white/70"
                  >
                    <Icon icon={feature.icon} className="text-sm text-[#6b7bff]" aria-hidden />
                    {feature.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats card */}
            <div className="grid gap-3 pt-4">
              <div className="rounded-2xl bg-gradient-to-br from-[#0ea5e9] to-[#6b7bff] p-5 shadow-[0_15px_30px_-15px_rgba(14,165,233,0.4)]">
                <div className="flex items-center justify-between gap-3">
                  <Icon icon="mdi:layers-multiple" className="text-4xl text-white opacity-30" aria-hidden />
                  <div className="text-right">
                    <p className="text-3xl font-black text-white">3+</p>
                    <p className="text-xs font-semibold text-white/80 uppercase tracking-wide">Projects</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-[#10b981] to-[#00c6ae] p-5 shadow-[0_15px_30px_-15px_rgba(16,185,129,0.4)]">
                <div className="flex items-center justify-between gap-3">
                  <Icon icon="mdi:code-braces" className="text-4xl text-white opacity-30" aria-hidden />
                  <div className="text-right">
                    <p className="text-3xl font-black text-white">6+</p>
                    <p className="text-xs font-semibold text-white/80 uppercase tracking-wide">Tech Stack</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="grid gap-6 md:grid-cols-3"
      >
        {itProjects.map((project, index) => (
          <motion.article 
            key={project.name} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className={`group relative rounded-3xl bg-gradient-to-br ${project.accent} overflow-hidden shadow-[0_20px_35px_-20px_rgba(28,20,44,0.7)] transition-all hover:shadow-[0_30px_50px_-20px_rgba(28,20,44,0.9)]`}
          >
            {/* Animated background orb */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl transition-transform group-hover:scale-150" />

            <div className="relative p-6">
              {/* Header */}
              <div className="mb-5 flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-black text-white">
                    {project.name}
                  </h2>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-white/80">
                    {project.role}
                  </p>
                </div>
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-white/30 backdrop-blur transition-transform group-hover:scale-110 shadow-[0_8px_16px_-4px_rgba(0,0,0,0.2)]`}>
                  <Icon icon={project.icon} className="text-2xl text-white" aria-hidden />
                </div>
              </div>

              {/* Badge */}
              <div className={`mb-5 inline-flex items-center gap-2 rounded-full ${project.badgeColor} px-3 py-1.5 backdrop-blur shadow-[0_8px_16px_-4px_rgba(28,20,44,0.3)]`}>
                <Icon icon="mdi:code-braces" className="text-sm text-white" aria-hidden />
                <span className="text-xs font-bold text-white">{project.badge}</span>
              </div>

              {/* Image with overlay */}
              <div className="relative mb-6 h-44 w-full overflow-hidden rounded-2xl">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                {/* Corner accent */}
                <div className="absolute right-0 top-0 h-12 w-12 bg-gradient-to-br from-white/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>

              {/* Description */}
              <p className="mb-5 text-sm leading-relaxed text-white/90">
                {project.desc}
              </p>

              {/* Tech Stack with visual indicators */}
              <div className="mb-6 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/70">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="flex items-center gap-1.5 rounded-lg bg-white/30 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur transition-all hover:bg-white/40 shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1)]"
                    >
                      <Icon icon="mdi:circle-small" className="text-base text-white" aria-hidden />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full rounded-xl border-2 border-white/40 bg-white/20 px-4 py-3 text-center text-sm font-bold text-white backdrop-blur transition-all hover:border-white/80 hover:bg-white/30 active:scale-95 shadow-[0_8px_16px_-4px_rgba(0,0,0,0.2)]">
                Lihat Detail Project
              </button>
            </div>
          </motion.article>
        ))}
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="grid gap-6 md:grid-cols-[1.4fr_0.6fr]"
      >
        <div className="rounded-3xl bg-gradient-to-br from-[#1c142c] to-[#3a2860] p-6 sm:p-8 shadow-[0_20px_35px_-20px_rgba(28,20,44,0.7)]">
          <h3 className="text-display text-3xl text-white">
            Stack favorit
          </h3>
          <p className="mt-2 text-sm text-white/60">
            Tools yang saya gunakan untuk membangun produk berkualitas tinggi
          </p>
          <div className="mt-8 grid gap-3 grid-cols-2 sm:grid-cols-3">
            {[
              { label: "Next.js", icon: "mdi:triangle-outline", color: "from-[#6b7bff] to-[#00c6ae]" },
              { label: "TypeScript", icon: "mdi:language-typescript", color: "from-[#00c6ae] to-[#6b7bff]" },
              { label: "Tailwind CSS", icon: "mdi:wind-turbine", color: "from-[#0ea5e9] to-[#06b6d4]" },
              { label: "Framer Motion", icon: "mdi:animation", color: "from-[#ff5e7d] to-[#ffc857]" },
              { label: "Supabase", icon: "mdi:database", color: "from-[#22c55e] to-[#16a34a]" },
              { label: "Node.js", icon: "mdi:nodejs", color: "from-[#ffc857] to-[#ff5e7d]" },
            ].map((stack) => (
              <div
                key={stack.label}
                className={`rounded-2xl bg-gradient-to-br ${stack.color} p-4 shadow-[0_10px_20px_-10px_rgba(28,20,44,0.5)]`}
              >
                <div className="flex flex-col items-start gap-2">
                  <Icon icon={stack.icon} className="text-2xl text-white" aria-hidden />
                  <p className="text-xs font-bold text-white">{stack.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-[#6b7bff] to-[#00c6ae] p-6 sm:p-8 shadow-[0_20px_35px_-20px_rgba(28,20,44,0.7)] flex flex-col justify-between">
          <div>
            <h3 className="text-display text-3xl text-white">
              Butuh website baru?
            </h3>
            <p className="mt-3 text-sm text-white/90">
              Saya siap bantu dari riset, design, hingga deployment production.
            </p>
          </div>
          <a
            href="/contact"
            className="mt-6 rounded-xl bg-white/20 px-5 py-3 text-center text-sm font-bold text-white backdrop-blur transition-all hover:bg-white/30"
          >
            Konsultasi Project
          </a>
        </div>
      </motion.section>
    </div>
  );
}
