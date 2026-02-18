"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { photoSets } from "./data/photoSets";
import { itProjects } from "./data/itProjects";
import { graphicWorks } from "./data/graphicWorks";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 sm:gap-16">
      <section className="flex flex-col gap-6 items-center md:grid md:items-center md:gap-10 sm:gap-12 md:grid-cols-[1.1fr_0.9fr] md:grid-rows-[auto_auto]">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-5 sm:gap-6 order-1 md:col-start-1 md:row-start-1 w-full"
        >
          <h1 className="text-display text-4xl leading-[0.95] text-center sm:text-left bg-gradient-to-r from-[#6b7bff] via-[#ff5e7d] to-[#ffc857] bg-clip-text text-transparent sm:text-5xl md:text-6xl lg:text-7xl max-w-[300px] sm:max-w-none mx-auto sm:mx-0">
            Portfolio saya yang menyatukan cerita visual dan solusi digital.
          </h1>
          <p className="max-w-xl text-base text-center sm:text-left text-[#41345f] sm:text-lg">
            Halo, saya BISMIN S.KOM. Saya menciptakan foto bercerita, identitas visual
            yang berani, serta produk digital yang rapi dan siap diluncurkan.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="relative order-2 w-full md:col-start-2 md:row-span-2"
        >
          <div className="absolute inset-[-0.5rem_-0.25rem_-0.5rem_-0.25rem] -rotate-3 rounded-2xl bg-[linear-gradient(135deg,_rgba(255,200,87,0.8),_rgba(255,94,125,0.8),_rgba(107,123,255,0.8))] blur-2xl opacity-50" />
          <div className="relative h-[350px] w-full overflow-hidden rounded-3xl sm:h-[400px] lg:h-[480px]">
            <Image
              src="/Bismin3.png"
              alt="Foto profil Bismin"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="scale-x-[-1] object-contain object-[center_25%]"
            />
          </div>
          <div className="-mt-8 inline-flex w-full justify-center justify-self-end sm:-mt-10 lg:-mt-12">
            <h2 className="text-display px-6 py-2 text-center text-3xl font-black text-[#ffffff] drop-shadow-lg sm:text-4xl md:text-5xl sm:px-8 sm:py-3">
              BISMIN S.KOM
            </h2>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col gap-5 sm:gap-6 order-3 md:order-1 md:col-start-1 md:row-start-2 w-full"
        >
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
            <a
              href="/it-project"
              className="animate-shimmer w-full rounded-full bg-[linear-gradient(120deg,_#6b7bff,_#ff5e7d,_#ffc857)] px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_20px_40px_-20px_rgba(255,94,125,0.6)] transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              Lihat IT Project
            </a>
            <a
              href="/contact"
              className="w-full rounded-full border border-[#1c142c] px-6 py-3 text-center text-sm font-semibold text-[#1c142c] transition-all hover:bg-[#1c142c] hover:text-white sm:w-auto"
            >
              Hubungi Saya
            </a>
          </div>
          <div className="flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4a3a6a] sm:gap-3 sm:text-xs justify-center sm:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2">
              <Icon icon="mdi:camera" className="text-base" aria-hidden />
              Portrait
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2">
              <Icon icon="mdi:brush" className="text-base" aria-hidden />
              Branding
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2">
              <Icon icon="mdi:laptop" className="text-base" aria-hidden />
              Web Apps
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2">
              <Icon icon="mdi:motion-play" className="text-base" aria-hidden />
              Video Editing
            </span>
          </div>
        </motion.div>
      </section>

      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="grid gap-4 sm:gap-6 md:grid-cols-3"
      >
        {[
          {
            title: "Fotografi Editorial",
            desc: "Komposisi bold, warna dramatis, dan cerita yang kuat untuk brand dan personal.",
            tone: "from-[#ff5e7d] to-[#ffc857]",
            icon: "mdi:camera-iris",
          },
          {
            title: "Desain Grafis",
            desc: "Identitas visual, poster, dan packaging yang konsisten serta mudah diingat.",
            tone: "from-[#6b7bff] to-[#00c6ae]",
            icon: "mdi:palette",
          },
          {
            title: "Produk Digital",
            desc: "Landing page, dashboard, UI interaktif, dan desain interface yang fokus pada pengalaman pengguna optimal.",
            tone: "from-[#1c142c] to-[#6b7bff]",
            icon: "mdi:application-braces-outline",
          },
        ].map((item, index) => (
          <motion.div 
            key={item.title} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className={`rounded-3xl bg-gradient-to-br ${item.tone} p-5 shadow-[0_20px_35px_-20px_rgba(28,20,44,0.7)] sm:p-6`}
          >
            <div
              className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur sm:h-12 sm:w-12`}
            >
              <Icon icon={item.icon} className="text-xl" aria-hidden />
            </div>
            <h3 className="flex items-center gap-2 text-base font-semibold text-white sm:text-lg">
              {item.title}
            </h3>
            <p className="mt-3 text-sm text-white/90">{item.desc}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Portfolio Showcase - IT Project */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#6b7bff]" />
            <h2 className="text-2xl font-bold text-[#1c142c] sm:text-3xl">
              IT Project
            </h2>
          </div>
          <Link
            href="/it-project"
            className="flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-[#0ea5e9] transition-all hover:bg-[#0ea5e9] hover:text-white"
          >
            Lihat Semua
            <Icon icon="mdi:arrow-right" className="text-base" aria-hidden />
          </Link>
        </div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {itProjects.map((project, index) => (
            <motion.div 
              key={project.name} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={`group rounded-3xl bg-gradient-to-br ${project.accent} p-4 shadow-[0_15px_30px_-15px_rgba(28,20,44,0.5)] overflow-hidden sm:p-5`}
            >
              <div className="relative h-40 rounded-2xl overflow-hidden mb-4 sm:h-44">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-sm font-bold text-white sm:text-base leading-snug">
                  {project.name}
                </h3>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-1 text-[10px] font-bold text-white/90 flex-shrink-0">
                  {project.badge}
                </span>
              </div>
              <p className="text-xs text-white/80 sm:text-sm">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Portfolio Showcase - Fotografer */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[#ff5e7d] to-[#ffc857]" />
            <h2 className="text-2xl font-bold text-[#1c142c] sm:text-3xl">
              Fotografer
            </h2>
          </div>
          <Link
            href="/fotografer"
            className="flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-[#ff5e7d] transition-all hover:bg-[#ff5e7d] hover:text-white"
          >
            Lihat Semua
            <Icon icon="mdi:arrow-right" className="text-base" aria-hidden />
          </Link>
        </div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {photoSets.map((photo, index) => (
            <Link
              key={photo.title}
              href={photo.link}
              className="group"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className={`rounded-3xl bg-gradient-to-br ${photo.accent} p-4 shadow-[0_15px_30px_-15px_rgba(28,20,44,0.5)] overflow-hidden h-full sm:p-5`}
              >
                <div className="relative h-40 rounded-2xl overflow-hidden mb-4 sm:h-44">
                  <Image
                    src={photo.image}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-sm font-bold text-white sm:text-base leading-snug">
                    {photo.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-1 text-[10px] font-bold text-white/90 flex-shrink-0">
                    {photo.tag}
                  </span>
                </div>
                <p className="text-xs text-white/80 sm:text-sm">{photo.desc}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* Portfolio Showcase - Desain Grafis */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[#00c6ae] to-[#6b7bff]" />
            <h2 className="text-2xl font-bold text-[#1c142c] sm:text-3xl">
              Desain Grafis
            </h2>
          </div>
          <Link
            href="/desain-grafis"
            className="flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-[#00c6ae] transition-all hover:bg-[#00c6ae] hover:text-white"
          >
            Lihat Semua
            <Icon icon="mdi:arrow-right" className="text-base" aria-hidden />
          </Link>
        </div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {graphicWorks.map((design, index) => (
            <motion.div 
              key={design.title} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={`group rounded-3xl bg-gradient-to-br ${design.accent} p-4 shadow-[0_15px_30px_-15px_rgba(28,20,44,0.5)] overflow-hidden sm:p-5`}
            >
              <div className="relative h-40 rounded-2xl overflow-hidden mb-4 sm:h-44">
                <Image
                  src={design.image}
                  alt={design.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-sm font-bold text-white sm:text-base leading-snug">
                  {design.title}
                </h3>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-1 text-[10px] font-bold text-white/90 flex-shrink-0">
                  {design.tag}
                </span>
              </div>
              <p className="text-xs text-white/80 sm:text-sm">{design.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="grid gap-6 rounded-[36px] p-6 sm:gap-8 sm:p-8 md:grid-cols-2"
      >
        <div className="flex flex-col justify-center gap-4">
          <h2 className="text-display text-3xl text-[#1c142c] sm:text-4xl">
            Kolaborasi kreatif dari konsep sampai publikasi.
          </h2>
          <p className="text-sm text-[#4a3a6a] sm:text-base">
            Saya bantu merancang strategi visual, produksi konten, hingga membangun
            website yang tampil berani. Semua disiapkan agar brand terlihat
            konsisten di setiap platform.
          </p>
        </div>
        <div className="grid gap-3 grid-cols-2 sm:gap-4">
          {[
            {
              title: "Moodboard & Art Direction",
              icon: "mdi:palette-advanced",
              color: "from-[#ff5e7d] to-[#ffc857]",
            },
            {
              title: "Sesi Foto",
              icon: "mdi:camera",
              color: "from-[#6b7bff] to-[#00c6ae]",
            },
            {
              title: "Desain Identitas",
              icon: "mdi:vector-square",
              color: "from-[#00c6ae] to-[#6b7bff]",
            },
            {
              title: "Website Interactive",
              icon: "mdi:code-tags",
              color: "from-[#ffc857] to-[#ff5e7d]",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`rounded-2xl bg-gradient-to-br ${item.color} p-4 shadow-[0_15px_30px_-15px_rgba(28,20,44,0.5)]`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="text-xs font-semibold text-white/90 uppercase tracking-[0.1em]">
                    {item.title}
                  </p>
                </div>
                <Icon icon={item.icon} className="text-2xl text-white/80 flex-shrink-0" aria-hidden />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
