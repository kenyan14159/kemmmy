"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PhotoGallery from "@/components/team-kengo/PhotoGallery";

const raceDetails = [
  { label: "開催日", value: "2026年01月19日" },
  { label: "開催地", value: "米国・テキサス州ヒューストン" },
  { label: "記録", value: "1時間00分56秒", highlight: true, note: "自己新" },
  { label: "順位", value: "16位" },
];

const galleryImages = [
  "/images/aramco-houston-half-marathon/a1.jpg",
  "/images/aramco-houston-half-marathon/a2.jpg",
  "/images/aramco-houston-half-marathon/a3.jpg",
  "/images/aramco-houston-half-marathon/a4.jpg",
  "/images/aramco-houston-half-marathon/a5.jpg",
];

export default function ResultContent() {
  return (
    <article>
      {/* Eye Catch Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative aspect-[16/9] mb-8 overflow-hidden bg-gray-100"
      >
        <Image
          src="/images/aramco-houston-half-marathon/a5.jpg"
          alt="2026 Aramco Houston Half Marathon"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-10"
      >
        <div className="flex items-center gap-4 mb-4">
          <span className="px-3 py-1 bg-orange-500 text-white text-xs font-medium">
            リザルト
          </span>
          <time className="text-gray-500 text-sm">2026.01.19</time>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight">
          2026 Aramco Houston Half Marathon
        </h1>
      </motion.header>

      {/* Race Result */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gray-900 text-white p-8 mb-10"
      >
        <h2 className="text-lg font-bold mb-6 text-orange-500">レース結果</h2>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {raceDetails.map((detail, index) => (
            <div key={index} className="border-b border-gray-700 pb-3">
              <dt className="text-gray-400 text-sm mb-1">{detail.label}</dt>
              <dd className={`text-lg font-medium ${detail.highlight ? "text-orange-500" : "text-white"}`}>
                {detail.value}
                {detail.note && (
                  <span className="ml-2 text-sm text-orange-400">（{detail.note}）</span>
                )}
              </dd>
            </div>
          ))}
        </dl>

        <div className="pt-6 border-t border-gray-700">
          <p className="text-gray-400 text-sm mb-2">FINISH TIME</p>
          <p className="text-4xl md:text-5xl font-bold tracking-tight">
            1:00<span className="text-orange-500">:</span>56
          </p>
        </div>
      </motion.div>

      {/* Photo Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <PhotoGallery images={galleryImages} />
      </motion.div>

      {/* Comment */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500"></span>
          コメント
        </h2>
        <div className="bg-gray-50 p-6 border-l-4 border-orange-500">
          <p className="text-gray-700 leading-relaxed">
            独立して初のレースとなりましたが、良いスタートがきれたと思っています。
            ここからマラソンに向けてもうひとつギアをあげていきます。
          </p>
          <p className="mt-4 text-right text-gray-600 font-medium">
            — 鈴木 健吾
          </p>
        </div>
      </motion.section>
    </article>
  );
}
