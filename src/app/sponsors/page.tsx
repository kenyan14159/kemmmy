import { Metadata } from "next";
import SponsorsContent from "./SponsorsContent";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "サポート企業・スポンサー",
  description:
    "鈴木健吾・合同会社Kemmmyをサポートいただいているパートナー企業・スポンサーのご紹介。",
  openGraph: {
    title: "サポート企業・スポンサー | Kemmmy LLC",
    description: "鈴木健吾・合同会社Kemmmyをサポートいただいているパートナー企業のご紹介。",
  },
};

export default function SponsorsPage() {
  return (
    <>
      <main className="relative pt-24 pb-20 bg-white min-h-screen">
        <SponsorsContent />
      </main>
      <Footer />
    </>
  );
}
