import { Metadata } from "next";
import NewsListContent from "./NewsListContent";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "News・Information | Team Kengo",
  description: "プロマラソンランナー鈴木健吾の最新ニュース、レース結果、お知らせを掲載しています。",
  openGraph: {
    title: "News・Information | Team Kengo",
    description: "鈴木健吾の最新ニュース、レース結果、お知らせを掲載しています。",
  },
};

export default function NewsPage() {
  return (
    <>
      <NewsListContent />
      <Footer />
    </>
  );
}
