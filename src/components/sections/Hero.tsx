"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-orange-600 font-medium tracking-[0.2em] text-sm mb-4 block"
          >
            世界に挑む鈴木健吾を支える
          </motion.span>
          <h1 className="text-[12vw] md:text-[8vw] font-bold leading-[0.9] tracking-tighter text-black italic">
            Kemmmy
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-8 text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-light"
          >
            世界への挑戦を支える
          </motion.p>
        </motion.div>
      </div>

    </section>
  );
}
