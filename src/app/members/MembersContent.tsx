"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, X, Mail } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

interface StaffMember {
  name: string;
  nameEn: string;
  role: string;
  roleEn: string;
  description: string;
  credentials?: string[];
  imageSrc: string;
  featured?: boolean;
  email?: string;
}

const staffMembers: StaffMember[] = [
  {
    name: "鈴木 健吾",
    nameEn: "Kengo Suzuki",
    role: "代表・プロランナー",
    roleEn: "Professional Runner",
    description:
      "プロマラソンランナー。2021年びわ湖毎日マラソンで2時間04分56秒を記録し優勝。2024年10月、合同会社Kemmmyを設立し、プロランナーとして新たなスタートを切る。",
    imageSrc: "/images/SuzukiKengoProfile.jpg",
    featured: true,
    email: "suzuki@kemmmy.com",
  },
  {
    name: "大後 栄治",
    nameEn: "Eiji Daigo",
    role: "統括アドバイザー",
    roleEn: "General Advisor",
    description: "",
    credentials: [
      "神奈川大学 人間科学部 教授",
      "神奈川大学 陸上競技部 部長",
    ],
    imageSrc: "/images/members/daigo.png",
  },
  {
    name: "松永 道敬",
    nameEn: "Michitaka Matsunaga",
    role: "ゼネラルマネージャー",
    roleEn: "General Manager",
    description: "",
    credentials: [
      "体育科学 修士",
      "米国BOC公認 アスレティックトレーナー（ATC）",
      "神奈川大学 人間科学部 非常勤講師",
      "Medic First Aid インストラクター（救急法）",
      "日本サッカー協会 救急救命ライセンス",
    ],
    imageSrc: "/images/members/matsunaga.png",
    email: "matsunaga@kemmmy.com",
  },
  {
    name: "吉野 太樹",
    nameEn: "Taiki Yoshino",
    role: "マネージャー",
    roleEn: "Manager",
    description: "",
    credentials: ["神奈川大学駅伝部 主務（2018年卒）"],
    imageSrc: "/images/members/yoshino.jpg",
    email: "taiki.yoshino@kemmmy.com",
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
      ease: [0.16, 1, 0.3, 1],
    },
  },
} as const;

export default function MembersContent() {
  const [selectedMember, setSelectedMember] = useState<StaffMember | null>(
    null
  );
  const featuredMember = staffMembers.find((m) => m.featured);
  const otherMembers = staffMembers.filter((m) => !m.featured);

  const openModal = (member: StaffMember) => {
    setSelectedMember(member);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedMember) {
        closeModal();
      }
    };

    if (selectedMember) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedMember]);

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
          MEMBERS<span className="text-orange-500">.</span>
        </h1>
        <p className="text-gray-500 mt-4 tracking-wide">Staff</p>
      </motion.header>

      {/* Featured Member (CEO) */}
      {featuredMember && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              <button
                onClick={() => openModal(featuredMember)}
                className="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden rounded-sm cursor-pointer hover:opacity-90 transition-opacity"
              >
                <Image
                  src={featuredMember.imageSrc}
                  alt={featuredMember.name}
                  fill
                  className="object-cover object-top"
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 384px"
                  priority
                />
              </button>

              {/* Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-500 -z-10" />
            </div>

            {/* Info */}
            <div>
              <p className="text-orange-500 font-medium tracking-wide mb-2">
                {featuredMember.roleEn}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
                {featuredMember.role}
              </h2>
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-black">
                  {featuredMember.name}
                </h3>
                <p className="text-gray-500 tracking-wide">
                  {featuredMember.nameEn}
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                {featuredMember.description}
              </p>

              {/* Email */}
              {featuredMember.email && (
                <a
                  href={`mailto:${featuredMember.email}`}
                  className="mt-6 inline-flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{featuredMember.email}</span>
                </a>
              )}
            </div>
          </div>
        </motion.section>
      )}

      {/* Other Members */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl font-bold text-black mb-10 border-b border-gray-200 pb-4">
          チームスタッフ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherMembers.map((member) => (
            <motion.article
              key={member.nameEn}
              variants={itemVariants}
              className="group"
            >
              {/* Image */}
              <button
                onClick={() => openModal(member)}
                className="relative w-full max-w-[280px] mx-auto aspect-[3/4] bg-gray-100 mb-6 overflow-hidden rounded-sm cursor-pointer hover:opacity-90 transition-opacity"
              >
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  quality={95}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 280px"
                />
              </button>

              {/* Info */}
              <div>
                <p className="text-orange-500 text-sm font-medium tracking-wide mb-1">
                  {member.roleEn}
                </p>
                <h3 className="text-lg font-bold text-black mb-1">
                  {member.role}
                </h3>
                <div className="mb-4">
                  <p className="text-xl font-bold text-black">{member.name}</p>
                  <p className="text-gray-500 text-sm tracking-wide">
                    {member.nameEn}
                  </p>
                </div>

                {/* Credentials */}
                {member.credentials && member.credentials.length > 0 && (
                  <ul className="space-y-1">
                    {member.credentials.map((credential, index) => (
                      <li
                        key={index}
                        className="text-gray-600 text-sm flex items-start gap-2"
                      >
                        <span className="w-1 h-1 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        {credential}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Description */}
                {member.description && (
                  <p className="text-gray-600 text-sm leading-relaxed mt-4">
                    {member.description}
                  </p>
                )}

                {/* Email */}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="mt-4 inline-flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{member.email}</span>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            >
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
                  {/* Image */}
                  <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
                    <Image
                      src={selectedMember.imageSrc}
                      alt={selectedMember.name}
                      fill
                      className="object-cover object-top"
                      quality={95}
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>

                  {/* Info */}
                  <div>
                    <button
                      onClick={closeModal}
                      className="ml-auto mb-4 flex items-center justify-center w-8 h-8 text-gray-500 hover:text-black transition-colors"
                      aria-label="閉じる"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <p className="text-orange-500 font-medium tracking-wide mb-2">
                      {selectedMember.roleEn}
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
                      {selectedMember.role}
                    </h2>
                    <div className="mb-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-black">
                        {selectedMember.name}
                      </h3>
                      <p className="text-gray-500 tracking-wide">
                        {selectedMember.nameEn}
                      </p>
                    </div>

                    {/* Description */}
                    {selectedMember.description && (
                      <p className="text-gray-600 leading-relaxed text-lg mb-6">
                        {selectedMember.description}
                      </p>
                    )}

                    {/* Credentials */}
                    {selectedMember.credentials &&
                      selectedMember.credentials.length > 0 && (
                        <ul className="space-y-2">
                          {selectedMember.credentials.map(
                            (credential, index) => (
                              <li
                                key={index}
                                className="text-gray-600 flex items-start gap-2"
                              >
                                <span className="w-1 h-1 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                                {credential}
                              </li>
                            )
                          )}
                        </ul>
                      )}

                    {/* Email in Modal */}
                    {selectedMember.email && (
                      <a
                        href={`mailto:${selectedMember.email}`}
                        className="mt-6 inline-flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors duration-300"
                      >
                        <Mail className="w-4 h-4" />
                        <span className="text-sm">{selectedMember.email}</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
