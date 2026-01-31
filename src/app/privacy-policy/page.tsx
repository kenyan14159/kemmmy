import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PrivacyContent from "./PrivacyContent";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "プライバシーポリシー | Kemmmy LLC",
  description: "合同会社Kemmmyのプライバシーポリシー。個人情報の取り扱いについて。",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="relative pt-24 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors duration-300 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-sm font-medium tracking-wide">
            トップに戻る
          </span>
        </Link>

        <PrivacyContent />
      </div>

      <Footer />
    </main>
  );
}
