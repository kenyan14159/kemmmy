import { Metadata } from "next";
import BusinessContent from "./BusinessContent";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "法人・企業の皆様へ",
  description:
    "鈴木健吾を起用した広告・プロモーション、講演依頼、イベント出演など法人様向けサービスのご案内。",
  openGraph: {
    title: "法人・企業の皆様へ | Kemmmy LLC",
    description: "鈴木健吾を起用した広告・プロモーション、講演依頼など法人様向けサービスのご案内。",
  },
};

export default function BusinessPage() {
  return (
    <>
      <main className="relative pt-24 pb-20 bg-white min-h-screen">
        <BusinessContent />
      </main>
      <Footer />
    </>
  );
}
