"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";

const sponsors = [
  {
    name: "Kewpie",
    category: "オフィシャルスポンサー",
    description:
      "神奈川大学在学中からの共同研究パートナー。長距離アスリートの疲労軽減に効果がある卵白の栄養成分について、ともに研究を進めてきました。",
    logo: "Kewpie",
    logoImage: "/images/kewpie.jpg",
    url: "https://www.kewpie.co.jp/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function SponsorsContent() {
  return (
    <div className="container mx-auto px-6">
      {/* Back Link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors duration-300 mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
        <span className="text-sm font-medium tracking-wide">トップに戻る</span>
      </Link>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-black italic">
          SPONSORS<span className="text-orange-500">.</span>
        </h1>
        <p className="text-gray-500 mt-4 tracking-wide">サポート企業</p>
      </motion.header>

      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-3xl mb-20"
      >
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          私たちの挑戦を支えてくださるパートナー企業の皆様をご紹介します。
          <br />
          世界への挑戦は、多くの方々のサポートによって実現しています。
        </p>
      </motion.div>

      {/* Sponsors Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl"
      >
        {sponsors.map((sponsor) => (
          <motion.article
            key={sponsor.name}
            variants={itemVariants}
            className="group bg-[#F3F4F6] p-8 md:p-10 hover:bg-gray-100 transition-colors duration-300"
          >
            {/* Logo */}
            <div className="mb-6">
              {sponsor.logoImage ? (
                <div className="relative w-32 h-16">
                  <Image
                    src={sponsor.logoImage}
                    alt={sponsor.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="w-32 h-16 bg-gray-200 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-400 tracking-tight">
                    {sponsor.logo}
                  </span>
                </div>
              )}
            </div>

            {/* Category */}
            <p className="text-orange-500 text-sm font-medium tracking-wide mb-2">
              {sponsor.category}
            </p>

            {/* Name */}
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              {sponsor.name}
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-6">
              {sponsor.description}
            </p>

            {/* Link */}
            <a
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors duration-300"
            >
              <span className="text-sm font-medium">公式サイト</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.article>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-20 pt-12 border-t border-gray-200"
      >
        <h3 className="text-2xl font-bold text-black mb-4">
          スポンサーシップについて
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl">
          私たちへのスポンサーシップにご興味をお持ちの企業様は、お問い合わせフォームよりご連絡ください。
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 hover:bg-gray-900 transition-colors duration-300"
        >
          お問い合わせ
        </Link>
      </motion.div>
    </div>
  );
}
