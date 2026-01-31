"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [60, 0, 0, -60]);

  return (
    <section
      ref={sectionRef}
      className="py-40 bg-white flex items-center justify-center min-h-screen"
    >
      <motion.div
        style={{ opacity, y }}
        className="max-w-4xl px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl md:text-4xl lg:text-5xl leading-relaxed md:leading-relaxed font-light text-gray-800 tracking-tight"
        >
          私たちは、
          <span className="text-black font-semibold">鈴木健吾</span>の
          <br className="hidden md:block" />
          <span className="text-orange-500 font-medium">世界への挑戦</span>
          を
          <br className="hidden md:block" />
          全力でサポートします。
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 h-[1px] w-24 bg-orange-500 mx-auto origin-left"
        />
      </motion.div>
    </section>
  );
}
