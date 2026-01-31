"use client";

import { motion } from "framer-motion";

const records = [
  {
    year: "2019",
    event: "マラソングランドチャンピオンシップ",
    result: "7位",
    highlight: false,
  },
  {
    year: "2021",
    event: "ニューイヤー駅伝 6区",
    result: "区間賞",
    highlight: true,
  },
  {
    year: "2021",
    event: "びわ湖毎日マラソン",
    result: "優勝",
    highlight: true,
    special: true,
  },
  {
    year: "2021",
    event: "シカゴマラソン",
    result: "4位",
    highlight: false,
  },
  {
    year: "2022",
    event: "東京マラソン",
    result: "4位（日本人1位）",
    highlight: true,
  },
  {
    year: "2022",
    event: "世界選手権（オレゴン）",
    result: "日本代表",
    highlight: true,
  },
  {
    year: "2024",
    event: "東京マラソン",
    result: "28位",
    highlight: false,
  },
  {
    year: "2025",
    event: "大阪マラソン",
    result: "8位",
    highlight: false,
  },
  {
    year: "2025",
    event: "ベルリンマラソン",
    result: "19位",
    highlight: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

export default function RecordSection() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-black italic">
            RECORD<span className="text-orange-500">.</span>
          </h2>
          <p className="text-gray-500 mt-4 tracking-wide">主な戦績</p>
        </motion.div>

        {/* Personal Bests Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto mb-20 p-8 md:p-12 bg-gradient-to-br from-gray-900 to-black text-white rounded-sm relative overflow-hidden"
        >
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 text-[15vw] font-bold text-white/5 leading-none select-none pointer-events-none">
            PB
          </div>

          <div className="relative z-10">
            <p className="text-orange-500 font-medium tracking-[0.2em] uppercase text-sm mb-8">
              Personal Bests
            </p>

            {/* Personal Bests Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {/* 5000M */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">5000M</p>
                <p className="text-2xl md:text-3xl font-bold tracking-tight">13:57.88</p>
              </motion.div>

              {/* 10000M */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">10000M</p>
                <p className="text-2xl md:text-3xl font-bold tracking-tight">27:49.16</p>
              </motion.div>

              {/* Half Marathon */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Half Marathon</p>
                <p className="text-2xl md:text-3xl font-bold tracking-tight">1:00:56</p>
              </motion.div>

              {/* Marathon */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center"
              >
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Marathon</p>
                <p className="text-3xl md:text-4xl font-bold tracking-tight">2:04:56</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* University Ekiden Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold tracking-tighter text-black italic mb-8 text-center">
            UNIVERSITY EKIDEN<span className="text-orange-500">.</span>
          </h3>

          <div>
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-4 px-2 md:px-4 text-left text-xs md:text-sm font-medium text-gray-400 tracking-wide">
                    学年
                  </th>
                  <th className="py-4 px-2 md:px-4 text-left text-xs md:text-sm font-medium text-gray-400 tracking-wide">
                    全日本大学駅伝
                  </th>
                  <th className="py-4 px-2 md:px-4 text-left text-xs md:text-sm font-medium text-gray-400 tracking-wide">
                    箱根駅伝
                  </th>
                </tr>
              </thead>
              <tbody>
                <motion.tr
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="border-b border-gray-100"
                >
                  <td className="py-4 px-2 md:px-4 font-medium text-black text-sm md:text-base">1年生</td>
                  <td className="py-4 px-2 md:px-4 text-gray-600 text-xs md:text-base">3区-区間9位 28:16</td>
                  <td className="py-4 px-2 md:px-4 text-gray-600 text-xs md:text-base">6区-区間19位 1:02:42</td>
                </motion.tr>
                <motion.tr
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="border-b border-gray-100"
                >
                  <td className="py-4 px-2 md:px-4 font-medium text-black text-sm md:text-base">2年生</td>
                  <td className="py-4 px-2 md:px-4 text-gray-600 text-xs md:text-base">1区-区間8位 43:28</td>
                  <td className="py-4 px-2 md:px-4 text-gray-600 text-xs md:text-base">2区-区間14位 1:10:20</td>
                </motion.tr>
                <motion.tr
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="border-b border-gray-100 bg-orange-50"
                >
                  <td className="py-4 px-2 md:px-4 font-medium text-black text-sm md:text-base">3年生</td>
                  <td className="py-4 px-2 md:px-4 text-gray-600 text-xs md:text-base">不参加</td>
                  <td className="py-4 px-2 md:px-4 text-orange-600 font-semibold text-xs md:text-base">2区-区間賞 1:07:17</td>
                </motion.tr>
                <motion.tr
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="border-b border-gray-100"
                >
                  <td className="py-4 px-2 md:px-4 font-medium text-black text-sm md:text-base">4年生</td>
                  <td className="py-4 px-2 md:px-4 text-gray-600 text-xs md:text-base">8区-区間2位 57:24</td>
                  <td className="py-4 px-2 md:px-4 text-gray-600 text-xs md:text-base">2区-区間4位 1:07:26</td>
                </motion.tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Records Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-4xl mx-auto"
        >
          {records.map((record, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative flex items-stretch gap-4 md:gap-8 ${
                record.special ? "my-4" : ""
              }`}
            >
              {/* Timeline Line */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-3 h-3 rounded-full ${
                    record.highlight ? "bg-orange-500" : "bg-gray-300"
                  } ${record.special ? "w-4 h-4 ring-4 ring-orange-500/20" : ""}`}
                />
                {index < records.length - 1 && (
                  <div className="w-[1px] flex-1 bg-gray-200" />
                )}
              </div>

              {/* Content */}
              <div
                className={`flex-1 pb-8 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 ${
                  record.special
                    ? "bg-orange-50 -mx-4 px-4 py-4 rounded-sm border-l-4 border-orange-500"
                    : ""
                }`}
              >
                <span
                  className={`text-sm font-medium tracking-widest min-w-[60px] ${
                    record.highlight ? "text-orange-500" : "text-gray-400"
                  }`}
                >
                  {record.year}
                </span>
                <span className="flex-1 text-gray-700 text-lg">
                  {record.event}
                </span>
                <span
                  className={`font-medium text-lg ${
                    record.highlight
                      ? "text-black"
                      : "text-gray-500"
                  } ${record.special ? "text-orange-600 font-bold" : ""}`}
                >
                  {record.result}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
