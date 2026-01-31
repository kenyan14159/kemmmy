import { Metadata } from "next";
import MembersContent from "./MembersContent";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "メンバー・スタッフ紹介",
  description:
    "合同会社Kemmmyのメンバー紹介。代表・鈴木健吾をはじめ、チームをサポートするスタッフをご紹介します。",
  openGraph: {
    title: "メンバー・スタッフ紹介 | Kemmmy LLC",
    description: "代表・鈴木健吾をはじめ、チームをサポートするスタッフをご紹介します。",
    images: ["/images/SuzukiKengoProfile.jpg"],
  },
};

export default function MembersPage() {
  return (
    <>
      <main className="relative pt-24 pb-20 bg-white min-h-screen">
        <MembersContent />
      </main>
      <Footer />
    </>
  );
}
