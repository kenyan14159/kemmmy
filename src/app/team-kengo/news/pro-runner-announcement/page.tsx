import { Metadata } from "next";
import ArticleLayout from "@/components/team-kengo/ArticleLayout";
import NewsContent from "./NewsContent";

export const metadata: Metadata = {
  title: "鈴木健吾 プロランナーとしての新たな挑戦を宣言 | Team Kengo",
  description:
    "男子マラソン日本記録保持者・鈴木健吾がプロランナーに転向。合同会社Kemmmyを設立し、キユーピー株式会社とスポンサー契約を締結。",
  openGraph: {
    title: "鈴木健吾 プロランナーとしての新たな挑戦を宣言",
    description: "合同会社Kemmmyを設立し、プロランナーとして新たなスタート。",
    type: "article",
    publishedTime: "2026-01-01T00:00:00.000Z",
    authors: ["鈴木健吾"],
    images: ["/images/SuzukiKengoProfile.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "鈴木健吾 プロランナー転向",
    description: "合同会社Kemmmyを設立し、プロランナーとして新たなスタート。",
    images: ["/images/SuzukiKengoProfile.jpg"],
  },
};

// 記事の構造化データ
const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "男子マラソン日本記録保持者 鈴木健吾 プロランナーとしての新たな挑戦を宣言",
  description:
    "鈴木健吾がプロランナーに転向。合同会社Kemmmyを設立し、キユーピー株式会社とスポンサー契約を締結。",
  image: "https://kemmmy.com/images/SuzukiKengoProfile.jpg",
  datePublished: "2026-01-01T00:00:00.000Z",
  dateModified: "2026-01-01T00:00:00.000Z",
  author: {
    "@type": "Person",
    name: "鈴木健吾",
    url: "https://kemmmy.com/team-kengo",
  },
  publisher: {
    "@type": "Organization",
    name: "Kemmmy LLC",
    url: "https://kemmmy.com",
  },
};

export default function ProRunnerAnnouncementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <ArticleLayout>
        <NewsContent />
      </ArticleLayout>
    </>
  );
}
