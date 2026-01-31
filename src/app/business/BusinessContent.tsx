"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BusinessContent() {
  return (
    <div className="container mx-auto px-6 flex flex-col items-center justify-center min-h-[calc(100vh-6rem)]">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-black italic">
          FOR BUSINESS<span className="text-orange-500">.</span>
        </h1>
        <p className="text-gray-500 mt-4 tracking-wide">法人・企業の皆様へ</p>
      </motion.header>

      {/* Coming Soon Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-2xl w-full"
      >
        <div className="bg-gray-50 p-12 md:p-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              準備中
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              こちらのページは現在準備中です。
              <br />
              詳細情報は順次公開予定です。
            </p>
            <p className="text-gray-500 text-sm">
              お急ぎのご相談がございましたら、
              <br className="md:hidden" />
              お問い合わせフォームよりご連絡ください。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 hover:bg-gray-900 transition-colors duration-300 font-medium"
            >
              お問い合わせフォームへ
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Back Link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-8"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors duration-300 group"
        >
          <svg
            className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="text-sm font-medium tracking-wide">トップに戻る</span>
        </Link>
      </motion.div>
    </div>
  );
}
