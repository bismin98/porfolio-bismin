"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const portraits = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
    alt: "Man in blue shirt portrait",
    title: "Urban Portrait",
    category: "Editorial",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
    alt: "Woman with curly hair",
    title: "Natural Light",
    category: "Beauty",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
    alt: "Man with beard",
    title: "Studio Setup",
    category: "Commercial",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
    alt: "Woman in white background",
    title: "Minimal Portrait",
    category: "Fashion",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80",
    alt: "Man outdoor portrait",
    title: "Dramatic Light",
    category: "Editorial",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=80",
    alt: "Woman in red shirt",
    title: "Color Pop",
    category: "Beauty",
  },
];

export default function PortraitGalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null && selectedImage < portraits.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const handleDragEnd = (info: any) => {
    const threshold = 50; // Minimum swipe distance
    
    if (info.offset.x > threshold) {
      // Swiped right - show previous
      handlePrevious();
    } else if (info.offset.x < -threshold) {
      // Swiped left - show next
      handleNext();
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
      {/* Header */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-[36px] bg-gradient-to-br from-[#ff5e7d]/10 via-[#ffc857]/10 to-[#ff6b9d]/10 border border-white/20 backdrop-blur-md p-6 sm:p-8 overflow-hidden"
      >
        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br from-[#ff5e7d] to-[#ffc857] opacity-10 blur-3xl" />
        
        <div className="relative flex items-center justify-between">
          <div>
            <Link 
              href="/fotografer" 
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#4a3a6a] transition-colors hover:text-[#ff5e7d] mb-4"
            >
              <Icon icon="mdi:arrow-left" className="text-lg" aria-hidden />
              Kembali ke Fotografer
            </Link>
            <h1 className="text-display text-4xl sm:text-5xl font-black text-[#1c142c]">
              Portrait <span className="bg-gradient-to-r from-[#ff5e7d] to-[#ffc857] bg-clip-text text-transparent">Editorial</span>
            </h1>
            <p className="mt-3 text-base text-[#4a3a6a]">
              Tone sinematik dengan pencahayaan kontras dan ekspresi yang kuat
            </p>
          </div>
          <div className="hidden sm:flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#ff5e7d] to-[#ffc857] shadow-[0_15px_30px_-15px_rgba(255,94,125,0.4)]">
            <Icon icon="mdi:account-eye" className="text-3xl text-white" aria-hidden />
          </div>
        </div>
      </motion.section>

      {/* Gallery Grid */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6"
      >
        {portraits.map((photo, index) => (
          <motion.article 
            key={photo.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedImage(index)}
            className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-[0_10px_25px_-10px_rgba(28,20,44,0.3)] transition-all hover:shadow-[0_20px_40px_-15px_rgba(28,20,44,0.5)] hover:scale-105"
          >
            <div className="relative aspect-square sm:h-80 sm:aspect-auto w-full">
              <Image
                src={photo.image}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Overlay info */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-white/80 mb-1">{photo.category}</span>
                <h3 className="text-lg font-black text-white">{photo.title}</h3>
              </div>

              {/* View icon */}
              <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity">
                <Icon icon="mdi:eye" className="text-lg text-white" aria-hidden />
              </div>
            </div>
          </motion.article>
        ))}
      </motion.section>

      {/* Popup Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur text-white transition-all hover:bg-white/20 hover:scale-110"
            aria-label="Close"
          >
            <Icon icon="mdi:close" className="text-2xl" aria-hidden />
          </button>

          {/* Previous button */}
          {selectedImage > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur text-white transition-all hover:bg-white/20 hover:scale-110"
              aria-label="Previous"
            >
              <Icon icon="mdi:chevron-left" className="text-2xl" aria-hidden />
            </button>
          )}

          {/* Next button */}
          {selectedImage < portraits.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur text-white transition-all hover:bg-white/20 hover:scale-110"
              aria-label="Next"
            >
              <Icon icon="mdi:chevron-right" className="text-2xl" aria-hidden />
            </button>
          )}

          {/* Image container */}
          <motion.div 
            className="relative max-h-[90vh] max-w-5xl cursor-grab active:cursor-grabbing"
            onClick={(e) => e.stopPropagation()}
            drag="x"
            dragElastic={0.3}
            dragMomentum={true}
            dragConstraints={{ left: -150, right: 150 }}
            onDragEnd={(e, info) => handleDragEnd(info)}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <motion.div 
              className="relative h-[80vh] w-[90vw] max-w-5xl"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0.8 }}
            >
              <Image
                src={portraits[selectedImage].image}
                alt={portraits[selectedImage].alt}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </motion.div>
            
            {/* Image info */}
            <motion.div 
              className="mt-4 rounded-2xl bg-white/10 backdrop-blur p-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-white/60 mb-1">
                    {portraits[selectedImage].category}
                  </p>
                  <h3 className="text-xl font-black text-white">
                    {portraits[selectedImage].title}
                  </h3>
                </div>
                <span className="text-sm font-semibold text-white/60">
                  {selectedImage + 1} / {portraits.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
