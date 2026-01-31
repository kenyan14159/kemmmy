"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const profileData = [
  { label: "氏名", value: "鈴木 健吾（すずき けんご）" },
  { label: "出身", value: "愛媛県 宇和島市" },
  { label: "生年月日", value: "1995年 6月 11日 (30歳）" },
];

const achievementData = [
  { year: "2021年", event: "びわ湖毎日マラソン", result: "優勝", time: "2時間04分56秒" },
  { year: "2022年", event: "東京マラソン", result: "4位", time: "2時間05分28秒", note: "日本人トップ" },
];

export default function NewsContent() {
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
          src="/images/SuzukiKengoProfile.jpg"
          alt="鈴木健吾 プロランナー"
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
          <span className="px-3 py-1 bg-black text-white text-xs font-medium">
            ニュース
          </span>
          <time className="text-gray-500 text-sm">2026.01.01</time>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-3">
          男子マラソン日本記録保持者 鈴木健吾<br />
          プロランナーとしての新たな挑戦を宣言！
        </h1>
        <p className="text-gray-600">
          鈴木健吾 プロランナー転向およびスポンサー契約締結のお知らせ
        </p>
      </motion.header>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-10"
      >
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            このたび、マラソンランナーの鈴木健吾は10月8日付で富士通株式会社を退社し、
            <strong>プロランナーとしての活動を開始</strong>いたします。
          </p>
          <p>
            それに伴い、自身が代表を務める
            <span className="text-orange-500 font-semibold">合同会社 Kemmmy</span>
            （神奈川県港北区 代表社員：鈴木健吾）を設立いたしました。
          </p>
          <p>
            また、<strong>キユーピー株式会社</strong>（東京都渋谷区 代表取締役 社長執行役員：髙宮 満）とスポンサー契約を締結いたしました。
          </p>
        </div>

        <hr className="my-8 border-gray-200" />

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            鈴木健吾は2021年2月に開催された第76回びわ湖毎日マラソンにおいて、
            <span className="text-orange-500 font-bold">2時間04分56秒の男子マラソン日本記録</span>
            を樹立し、非アフリカ系選手として初めて2時間05分の壁を突破。日本長距離界のトップランナーとして注目を集めました。
          </p>
          <p>
            今後は、<strong>ロサンゼルスオリンピックでのメダル獲得を最大の目標</strong>とし、マラソン競技に専念するため、プロ選手として新たにスタートを切ります。
          </p>
          <p>
            キユーピー株式会社とは、神奈川大学在学中に共同研究プロジェクトを通じて出会いました。長距離アスリートの疲労を軽減する効果がある卵白の栄養成分について、共に研究を進めてきた背景があります。この度、プロランナーとして新たな挑戦を始めるにあたり、キユーピー株式会社に、ともに高みを目指すパートナーとしてサポートいただけることになりました。
          </p>
        </div>
      </motion.div>

      {/* Athlete Overview */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gray-100 p-6 mb-10"
      >
        <h2 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500"></span>
          アスリート概要
        </h2>

        {/* Profile */}
        <div className="mb-6">
          <h3 className="font-bold text-black mb-3">プロフィール</h3>
          <dl className="space-y-2">
            {profileData.map((item, index) => (
              <div key={index} className="flex gap-4">
                <dt className="text-gray-500 text-sm min-w-[80px]">{item.label}</dt>
                <dd className="text-gray-800">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="font-bold text-black mb-3">主な戦績</h3>
          <div className="space-y-3">
            {achievementData.map((item, index) => (
              <div key={index} className="bg-white p-4 border-l-4 border-orange-500">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-orange-500 font-bold">{item.year}</span>
                  <span className="text-gray-800">{item.event}</span>
                  <span className="font-bold">：{item.result}</span>
                </div>
                <p className="text-gray-600 text-sm mt-1">
                  タイム：{item.time}
                  {item.note && <span className="text-orange-500 ml-2">※{item.note}</span>}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Comment */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500"></span>
          コメント
        </h2>

        <div className="bg-gray-900 text-white p-6">
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              これまで支えてくださった関係者やファンの皆様に心から感謝申し上げます。
            </p>
            <p>
              この度、プロランナーとしての活動を決意し、キユーピー株式会社様とスポンサー契約を締結させていただくこととなりました。長年お世話になった実業団を離れ、新たなステージに挑むにあたり、このように心強いご支援をいただけることに、心より感謝申し上げます。
            </p>
            <p className="text-white font-medium">
              これまで支えてくださった方々の思いを胸に、そしてキユーピー様のサポートを力に変えて、競技に真摯に向き合い、マラソンランナーとして更なる高みを目指してまいります。
            </p>
          </div>
          <p className="mt-6 text-right text-orange-500 font-bold">
            鈴木 健吾
          </p>
        </div>
      </motion.section>
    </article>
  );
}
