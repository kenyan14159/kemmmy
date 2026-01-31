"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const policyItems = [
  {
    title: "取得する個人情報と利用目的",
    content:
      "当サイトでは、お問い合わせフォームを通じて、氏名・メールアドレス・電話番号などの個人情報を取得する場合があります。取得した情報は、お問い合わせへの対応および必要なご連絡のために利用いたします。",
  },
  {
    title: "Cookieの使用について",
    content:
      "当サイトでは、ログイン状態の保持やパスワード保護されたページへのアクセス管理のためにCookieを使用しています。これらのCookieは、個人を特定する情報を含まず、サイトの機能維持およびセキュリティ向上の目的で利用されます。今後、利便性向上やアクセス解析のためにCookieを使用する場合は、その目的・内容を明示し、必要に応じてユーザーの同意を得た上で導入いたします。",
  },
  {
    title: "埋め込みコンテンツについて",
    content:
      "当サイトには、YouTubeなど外部サービスからの埋め込みコンテンツが含まれる場合があります。これらのコンテンツは、訪問者がその外部サイトを訪れた場合と同様に振る舞い、Cookieの使用やトラッキングが行われる可能性があります。",
  },
  {
    title: "個人情報の管理と保存期間",
    content:
      "取得した個人情報は、適切な安全対策を講じた上で管理し、漏えいや改ざん等の防止に努めます。お問い合わせ内容は、対応完了後一定期間保管し、その後適切に削除いたします。",
  },
  {
    title: "第三者への提供",
    content:
      "取得した個人情報は、法令に基づく場合を除き、第三者に提供することはありません。",
  },
  {
    title: "ユーザーの権利",
    content:
      "ご本人からの個人情報の開示・訂正・削除等のご希望があった場合には、本人確認の上、速やかに対応いたします。ただし、法令により保存が義務付けられている情報については、削除できない場合があります。",
  },
  {
    title: "お問い合わせ窓口",
    content:
      "個人情報の取り扱いに関するお問い合わせは、お問い合わせフォームよりご連絡ください。",
    hasLink: true,
  },
  {
    title: "プライバシーポリシーの改定",
    content:
      "本ポリシーの内容は、必要に応じて予告なく変更する場合があります。変更後の内容は当サイトに掲載された時点で効力を生じます。",
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
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function PrivacyContent() {
  return (
    <article className="max-w-4xl">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black">
          プライバシーポリシー
        </h1>
        <p className="mt-4 text-gray-500 tracking-wide">Privacy Policy</p>
      </motion.header>

      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 p-6 bg-gray-50 border-l-4 border-orange-500"
      >
        <p className="text-gray-700 leading-relaxed">
          合同会社Kemmmy（以下「当社」）は、当社が運営するウェブサイト（以下「当サイト」）において取得する個人情報の保護に努めます。
        </p>
      </motion.div>

      {/* Policy Items */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {policyItems.map((item, index) => (
          <motion.section
            key={index}
            variants={itemVariants}
            className="border-b border-gray-200 pb-8"
          >
            <h2 className="flex items-baseline gap-4 text-xl font-bold text-black mb-4">
              <span className="text-orange-500 font-bold text-2xl">
                {index + 1}.
              </span>
              {item.title}
            </h2>
            <p className="text-gray-600 leading-relaxed pl-10">
              {item.content}
              {item.hasLink && (
                <Link
                  href="/#contact"
                  className="inline-block ml-2 text-orange-500 hover:text-orange-600 underline underline-offset-2 transition-colors"
                >
                  お問い合わせフォームはこちら
                </Link>
              )}
            </p>
          </motion.section>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 pt-8 border-t border-gray-200 text-center"
      >
        <p className="text-gray-500 text-sm">
          制定日：2026年1月1日
        </p>
        <p className="text-gray-700 font-medium mt-2">合同会社Kemmmy</p>
      </motion.div>
    </article>
  );
}
