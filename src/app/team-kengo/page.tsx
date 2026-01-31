import HeroSection from "@/components/team-kengo/HeroSection";
import AboutSection from "@/components/team-kengo/AboutSection";
import NewsSection from "@/components/team-kengo/NewsSection";
import ProfileSection from "@/components/team-kengo/ProfileSection";
import RecordSection from "@/components/team-kengo/RecordSection";
import ContactSection from "@/components/team-kengo/ContactSection";
import Footer from "@/components/sections/Footer";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team Kengo | 鈴木健吾",
  description:
    "プロマラソンランナー鈴木健吾。2021年びわ湖毎日マラソンで2時間04分56秒を記録。限界を、過去にする。世界に挑戦し続けるプロランナー。",
  openGraph: {
    title: "Team Kengo | 鈴木健吾 - プロマラソンランナー",
    description:
      "2021年びわ湖毎日マラソンで2時間04分56秒を記録。限界を、過去にする。",
    images: ["/images/SuzukiKengoProfile.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Team Kengo | 鈴木健吾",
    description: "プロマラソンランナー鈴木健吾。限界を、過去にする。",
    images: ["/images/SuzukiKengoProfile.jpg"],
  },
};

export default function TeamKengoPage() {
  return (
    <main className="relative">
      <HeroSection />
      <AboutSection />
      <NewsSection />
      <ProfileSection />
      <RecordSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
