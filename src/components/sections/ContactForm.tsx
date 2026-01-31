"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Send, Loader2, CheckCircle } from "lucide-react";

const inquiryTypes = [
  { value: "メディア取材", label: "メディア取材" },
  { value: "講演依頼", label: "講演依頼" },
  { value: "スポンサーについて", label: "スポンサーについて" },
  { value: "その他", label: "その他" },
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@kemmmy.com", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        formRef.current?.reset();
      } else {
        alert("送信に失敗しました。もう一度お試しください。");
      }
    } catch {
      alert("送信に失敗しました。もう一度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-[#F3F4F6]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-black italic">
              CONTACT<span className="text-orange-500">.</span>
            </h2>
            <p className="text-gray-500 mt-4 tracking-wide">お問い合わせ</p>
          </motion.div>

          {/* Form */}
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-8 md:p-12 shadow-sm text-center"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-black mb-4">
                送信完了
              </h3>
              <p className="text-gray-600 mb-6">
                お問い合わせいただきありがとうございます。
                <br />
                内容を確認の上、担当者よりご連絡いたします。
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-orange-500 hover:text-orange-600 font-medium"
              >
                新しいお問い合わせを送る
              </button>
            </motion.div>
          ) : (
            <motion.form
              ref={formRef}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-white p-8 md:p-12 shadow-sm"
            >
              {/* FormSubmit設定 */}
              <input type="hidden" name="_subject" value="【Kemmmy】お問い合わせがありました" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    お名前 <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="お名前"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors"
                    placeholder="山田 太郎"
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    貴社名 <span className="text-gray-400 text-xs">（任意）</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="貴社名"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors"
                    placeholder="株式会社〇〇"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    メールアドレス <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="メールアドレス"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors"
                    placeholder="example@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    電話番号 <span className="text-gray-400 text-xs">（任意）</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="電話番号"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors"
                    placeholder="090-1234-5678"
                  />
                </div>

                {/* Inquiry Type */}
                <div>
                  <label
                    htmlFor="inquiryType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    お問い合わせ項目 <span className="text-orange-500">*</span>
                  </label>
                  <select
                    id="inquiryType"
                    name="お問い合わせ項目"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors bg-white"
                  >
                    <option value="">選択してください</option>
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    お問い合わせ内容 <span className="text-orange-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="お問い合わせ内容"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors resize-none"
                    placeholder="お問い合わせ内容をご記入ください"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-12 py-4 bg-black text-white font-medium tracking-wide hover:bg-gray-900 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300 flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        送信中...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        送信する
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.form>
          )}

          {/* Privacy Policy Link */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center text-gray-500 text-sm"
          >
            送信いただく前に
            <a
              href="/privacy-policy"
              className="text-orange-500 hover:text-orange-600 underline underline-offset-2 mx-1"
            >
              プライバシーポリシー
            </a>
            をご確認ください。
          </motion.p>
        </div>
      </div>
    </section>
  );
}
