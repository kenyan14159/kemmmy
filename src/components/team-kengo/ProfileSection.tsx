"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const profileData = [
  { label: "生年月日", value: "1995年6月11日" },
  { label: "出身地", value: "愛媛県" },
  { label: "出身校", value: "宇和島東高 → 神奈川大学" },
  { label: "役職", value: "うわじまアンバサダー" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function ProfileSection() {
  return (
    <section className="py-32 bg-[#F3F4F6] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] bg-gray-200 rounded-sm overflow-hidden">
              <Image
                src="/images/SuzukiKengoProfile.jpg"
                alt="鈴木健吾"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                quality={100}
                priority
              />

              {/* Decorative Frame */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute inset-0 border-2 border-orange-500/20 m-4 pointer-events-none"
              />
            </div>

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-500 -z-10"
            />
          </motion.div>

          {/* Profile Content */}
          <div className="lg:col-span-7">
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-black italic">
                PROFILE<span className="text-orange-500">.</span>
              </h2>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10"
            >
              <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">
                Name
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-black">
                鈴木 健吾
              </h3>
              <p className="text-gray-500 text-lg mt-1 tracking-wide">
                Kengo Suzuki
              </p>
            </motion.div>

            {/* Profile Details */}
            <motion.dl
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {profileData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 py-4 border-b border-gray-300"
                >
                  <dt className="text-gray-400 text-sm uppercase tracking-widest min-w-[120px]">
                    {item.label}
                  </dt>
                  <dd className="text-lg md:text-xl font-medium text-black">
                    {item.value}
                  </dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
