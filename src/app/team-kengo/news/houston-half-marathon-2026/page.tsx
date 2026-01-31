import { Metadata } from "next";
import ArticleLayout from "@/components/team-kengo/ArticleLayout";
import ResultContent from "./ResultContent";

export const metadata: Metadata = {
  title: "2026 Aramco Houston Half Marathon | Team Kengo",
  description:
    "鈴木健吾が2026年1月19日開催のヒューストンハーフマラソンにて1時間00分56秒の自己新記録を達成。プロ転向後初レースで好発進。",
  openGraph: {
    title: "2026 Aramco Houston Half Marathon | 鈴木健吾",
    description: "ヒューストンハーフマラソンにて1時間00分56秒の自己新記録を達成。",
    type: "article",
    publishedTime: "2026-01-19T00:00:00.000Z",
    authors: ["鈴木健吾"],
    images: ["/images/aramco-houston-half-marathon/a5.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "2026 Aramco Houston Half Marathon",
    description: "1時間00分56秒の自己新記録を達成",
    images: ["/images/aramco-houston-half-marathon/a5.jpg"],
  },
};

// 記事の構造化データ
const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "2026 Aramco Houston Half Marathon",
  description: "鈴木健吾がヒューストンハーフマラソンにて1時間00分56秒の自己新記録を達成。",
  image: "https://kemmmy.com/images/aramco-houston-half-marathon/a5.jpg",
  datePublished: "2026-01-19T00:00:00.000Z",
  dateModified: "2026-01-19T00:00:00.000Z",
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

export default function HoustonHalfMarathonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <ArticleLayout>
        <ResultContent />
      </ArticleLayout>
    </>
  );
}
