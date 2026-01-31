"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-32 bg-[#F3F4F6] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-black italic">
              CONTACT<span className="text-orange-500">.</span>
            </h2>
            <p className="text-gray-500 mt-4 tracking-wide">お問い合わせ</p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12"
          >
            鈴木 健吾の各プロジェクトに関するお問い合わせ、
            <br className="hidden md:block" />
            広告出演、メディア取材等に関するお問い合わせは
            <br className="hidden md:block" />
            下記よりお願い致します。
          </motion.p>

          {/* Contact Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="mailto:contact@kemmmy.com"
              className="group inline-flex items-center gap-4 bg-black text-white px-10 py-5 rounded-sm hover:bg-gray-900 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span className="text-lg font-medium tracking-wide">
                お問い合わせ
              </span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 pt-12 border-t border-gray-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">
                  For Media
                </p>
                <p className="text-gray-700">メディア取材</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">
                  For Sponsorship
                </p>
                <p className="text-gray-700">スポンサー契約</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">
                  For Events
                </p>
                <p className="text-gray-700">イベント出演</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
