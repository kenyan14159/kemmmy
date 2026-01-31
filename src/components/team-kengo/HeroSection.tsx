"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

// モバイル用画像 (1, 2, 7, 8, 9, 10, 11)
const mobileImages = [
  "/images/hero-image/a1.jpg",
  "/images/hero-image/a2.jpg",
  "/images/hero-image/a7.jpg",
  "/images/hero-image/a8.jpg",
  "/images/hero-image/a9.jpg",
  "/images/hero-image/a10.jpg",
  "/images/hero-image/a11.jpg",
];

// PC用画像 (3, 4, 5, 6)
const desktopImages = [
  "/images/hero-image/a3.jpg",
  "/images/hero-image/a4.jpg",
  "/images/hero-image/a5.jpg",
  "/images/hero-image/a6.jpg",
];

export default function HeroSection() {
  const [mobileIndex, setMobileIndex] = useState(0);
  const [desktopIndex, setDesktopIndex] = useState(0);

  // モバイル画像のシャッフル
  useEffect(() => {
    const interval = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % mobileImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // PC画像のシャッフル
  useEffect(() => {
    const interval = setInterval(() => {
      setDesktopIndex((prev) => (prev + 1) % desktopImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Mobile Layout */}
      <div className="md:hidden relative h-screen">
        {/* Shuffling Images */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={mobileIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={mobileImages[mobileIndex]}
                alt="鈴木健吾"
                fill
                className="object-cover object-top"
                priority
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-orange-500 font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
              Pro Runner
            </span>
            <h1 className="text-5xl font-bold tracking-tighter text-white italic leading-[0.9] mb-4">
              TEAM<br />
              <span className="text-orange-500">KENGO</span>
            </h1>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              限界を、過去にする。<br />
              世界に挑むプロランナー、鈴木健吾。
            </p>
          </motion.div>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-8 right-6 z-20 flex gap-2">
          {mobileImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setMobileIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === mobileIndex ? "bg-orange-500 w-6" : "bg-white/50"
              }`}
              aria-label={`画像 ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block relative h-screen">
        {/* Shuffling Image */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={desktopIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={desktopImages[desktopIndex]}
                alt="鈴木健吾"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-orange-500 font-medium tracking-[0.3em] uppercase text-sm mb-6 block"
              >
                Pro Runner
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-7xl lg:text-9xl font-bold tracking-tighter text-white italic leading-[0.85] mb-8"
              >
                TEAM<br />
                <span className="text-orange-500">KENGO</span>
              </motion.h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="h-[2px] w-24 bg-orange-500 origin-left mb-8"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-lg"
              >
                限界を、過去にする。<br />
                世界に挑むプロランナー、鈴木健吾。
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="mt-10 flex items-center gap-8"
              >
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Marathon PB</p>
                  <p className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                    2:04<span className="text-orange-500">:</span>56
                  </p>
                </div>
                <div className="h-12 w-px bg-gray-700" />
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Half Marathon PB</p>
                  <p className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                    1:00<span className="text-orange-500">:</span>56
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-10 right-10 z-20 flex gap-3">
          {desktopImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setDesktopIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === desktopIndex ? "bg-orange-500 w-8" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`画像 ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
