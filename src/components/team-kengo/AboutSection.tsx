"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Background Decorative Element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-bold tracking-tighter text-black leading-none select-none pointer-events-none whitespace-nowrap"
      >
        KENGO
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <span className="text-orange-500 font-medium tracking-[0.3em] uppercase text-sm mb-4 block">
              Team Kengo
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-black italic leading-[0.9]">
              ABOUT<span className="text-orange-500">.</span>
            </h1>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-black tracking-tight"
            >
              限界を、<span className="text-orange-500">過去にする。</span>
            </motion.p>

            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                2021年、びわ湖毎日マラソンで
                <span className="text-orange-500 font-semibold">2時間04分56秒</span>
                を記録して優勝。非アフリカ系選手として世界でも稀な「
                <span className="text-black font-semibold">2時間5分切り</span>
                」を達成し、日本のマラソン界に新たな歴史を刻むことができたことを誇りに思っています。
              </p>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="h-[1px] w-24 bg-orange-500 origin-left"
            />

            {/* History Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-medium text-orange-500 uppercase tracking-[0.2em]">
                History
              </h3>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                神奈川大学時代には箱根駅伝に出場し、3年生から主将としてチームを牽引させていただきました。3年時には憧れの花の2区で区間賞を獲得でき、今でも忘れられない思い出です。
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                卒業後は富士通に入社し、実業団選手としてさらなる成長を目指してきました。ニューイヤー駅伝では区間賞を獲得し、チームの優勝にも貢献することができました。
              </p>
            </motion.div>

            {/* Future Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-medium text-orange-500 uppercase tracking-[0.2em]">
                Future
              </h3>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                現在は「
                <span className="text-black font-medium">世界と戦える日本人ランナー</span>
                」として国際舞台での挑戦を続けると同時に、地元・愛媛県宇和島市の「うわじまアンバサダー」として地域振興にも携わらせていただいています。
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                競技を通じて人々に勇気と希望を届けること——これが私の信念です。
              </p>
            </motion.div>

            {/* Message Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-medium text-orange-500 uppercase tracking-[0.2em]">
                Message
              </h3>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                そして
                <span className="text-orange-500 font-semibold">2024年10月</span>
                、これまで所属していた富士通陸上競技部を退団し、
                <span className="text-black font-semibold">合同会社Kemmmyを設立</span>
                しました。プロランナーとしての歩みを進めることを決断しました。長年支えてくださった富士通の皆様、チームメイト、そしてファンの皆様には心から感謝しています。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
