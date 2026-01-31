"use client";

import { motion } from "framer-motion";

const infoItems = [
  { label: "会社名", value: "合同会社Kemmmy", en: "Kemmmy LLC" },
  { label: "代表社員", value: "鈴木 健吾", en: "Kengo Suzuki" },
  {
    label: "所在地",
    value: "神奈川県横浜市港北区新横浜3-7-18 日総第18ビル6階",
    en: "Shin-Yokohama, Yokohama",
  },
  { label: "URL", value: "kemmmy.com", en: "Official Domain", isLink: true },
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
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function CompanyInfo() {
  return (
    <section className="py-32 bg-[#F3F4F6]">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-12 gap-12"
        >
          {/* Section Title */}
          <div className="md:col-span-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-black italic"
            >
              OVERVIEW<span className="text-orange-500">.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-4 text-gray-500 text-sm tracking-wide"
            >
              会社概要
            </motion.p>
          </div>

          {/* Info List */}
          <motion.div className="md:col-span-8" variants={containerVariants}>
            <dl className="divide-y divide-gray-300">
              {infoItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="py-8 flex flex-col md:flex-row md:items-baseline justify-between gap-2 group"
                >
                  <dt className="text-gray-400 text-sm uppercase tracking-widest">
                    {item.label}{" "}
                    <span className="text-[10px] text-gray-300">/ {item.en}</span>
                  </dt>
                  <dd className="text-xl md:text-2xl font-medium text-black">
                    {item.isLink ? (
                      <a
                        href={`https://${item.value}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-orange-500 transition-colors duration-300 inline-flex items-center gap-2"
                      >
                        {item.value}
                        <svg
                          className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
