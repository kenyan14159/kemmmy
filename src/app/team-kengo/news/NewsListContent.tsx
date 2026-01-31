"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type NewsCategory = "リザルト" | "ニュース" | "お知らせ";

interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: NewsCategory;
  href: string;
  image?: string;
  excerpt?: string;
}

// 降順（新しい順→古い順）で並べる
const newsItems: NewsItem[] = [
  {
    id: "houston-half-2026",
    title: "2026 Aramco Houston Half Marathon",
    date: "2026.01.19",
    category: "リザルト",
    href: "/team-kengo/news/houston-half-marathon-2026",
    excerpt: "ヒューストンハーフマラソンにて1時間00分56秒の自己新記録を達成",
    image: "/images/aramco-houston-half-marathon/a5.jpg",
  },
  {
    id: "pro-runner-2026",
    title: "男子マラソン日本記録保持者 鈴木健吾 プロランナーとしての新たな挑戦を宣言！",
    date: "2026.01.01",
    category: "ニュース",
    href: "/team-kengo/news/pro-runner-announcement",
    excerpt: "鈴木健吾 プロランナー転向およびスポンサー契約締結のお知らせ",
    image: "/images/SuzukiKengoProfile.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

function getCategoryColor(category: NewsCategory): string {
  switch (category) {
    case "リザルト":
      return "bg-orange-500 text-white";
    case "ニュース":
      return "bg-black text-white";
    case "お知らせ":
      return "bg-gray-500 text-white";
    default:
      return "bg-gray-300 text-black";
  }
}

export default function NewsListContent() {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <Link
            href="/team-kengo"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors duration-300 mb-8 group"
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
            <span className="text-sm font-medium tracking-wide">
              Team Kengo に戻る
            </span>
          </Link>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-black italic">
            NEWS<span className="text-orange-500">.</span>
          </h1>
          <p className="text-gray-500 mt-4 tracking-wide">
            News・Information
          </p>
        </motion.div>

        {/* News List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {newsItems.map((item) => (
            <motion.article key={item.id} variants={itemVariants}>
              <Link href={item.href} className="group block h-full">
                <div className="bg-white h-full overflow-hidden border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                  {/* Image Area */}
                  <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-150">
                        <span className="text-3xl font-bold text-gray-200 tracking-tighter italic">
                          NO IMAGE
                        </span>
                      </div>
                    )}
                    {/* Category Badge */}
                    <span
                      className={`absolute top-4 left-4 px-3 py-1 text-xs font-medium tracking-wide ${getCategoryColor(
                        item.category
                      )}`}
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Date */}
                    <time className="text-sm text-gray-400 font-medium">
                      {item.date}
                    </time>

                    {/* Title */}
                    <h2 className="mt-2 text-lg font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
                      {item.title}
                    </h2>

                    {/* Excerpt */}
                    {item.excerpt && (
                      <p className="mt-3 text-sm text-gray-500 line-clamp-2">
                        {item.excerpt}
                      </p>
                    )}

                    {/* Read More */}
                    <div className="mt-4 text-sm font-medium text-orange-500 group-hover:underline">
                      続きを読む →
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* Empty State (for future) */}
        {newsItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">記事がありません</p>
          </div>
        )}
      </div>
    </div>
  );
}
