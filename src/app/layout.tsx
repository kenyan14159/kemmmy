import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kemmmy.com"),
  title: {
    default: "Kemmmy LLC | 鈴木健吾オフィシャルサイト",
    template: "%s | Kemmmy LLC",
  },
  description:
    "プロマラソンランナー鈴木健吾の公式サイト。2021年びわ湖毎日マラソンで2時間04分56秒を記録。合同会社Kemmmyとして世界に挑戦し続ける。",
  keywords: [
    "鈴木健吾",
    "Kengo Suzuki",
    "マラソン",
    "プロランナー",
    "日本記録",
    "Kemmmy",
    "合同会社Kemmmy",
    "Team Kengo",
    "陸上競技",
    "長距離",
  ],
  authors: [{ name: "Kemmmy LLC" }],
  creator: "Kemmmy LLC",
  publisher: "Kemmmy LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Kemmmy LLC | 鈴木健吾オフィシャルサイト",
    description:
      "プロマラソンランナー鈴木健吾の公式サイト。2021年びわ湖毎日マラソンで2時間04分56秒を記録。",
    url: "https://kemmmy.com",
    siteName: "Kemmmy LLC",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/SuzukiKengoProfile.jpg",
        width: 1200,
        height: 630,
        alt: "鈴木健吾 - プロマラソンランナー",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kemmmy LLC | 鈴木健吾オフィシャルサイト",
    description:
      "プロマラソンランナー鈴木健吾の公式サイト。2021年びわ湖毎日マラソンで2時間04分56秒を記録。",
    images: ["/images/SuzukiKengoProfile.jpg"],
    creator: "@Kengo_Suzuki_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Google Search Console の確認コードがある場合は追加
    // google: "verification_token",
  },
};

// 構造化データ（JSON-LD）
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "合同会社Kemmmy",
  alternateName: "Kemmmy LLC",
  url: "https://kemmmy.com",
  logo: "https://kemmmy.com/images/SuzukiKengoProfile.jpg",
  description:
    "プロマラソンランナー鈴木健吾が代表を務める合同会社Kemmmy。",
  founder: {
    "@type": "Person",
    name: "鈴木健吾",
    alternateName: "Kengo Suzuki",
    jobTitle: "プロマラソンランナー",
    description:
      "2021年びわ湖毎日マラソンで2時間04分56秒を記録。プロランナーとして世界に挑戦。",
    image: "https://kemmmy.com/images/SuzukiKengoProfile.jpg",
    sameAs: [
      "https://x.com/Kengo_Suzuki_",
      "https://www.instagram.com/Kengo_Suzuki_",
    ],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "横浜市",
    addressRegion: "神奈川県",
    addressCountry: "JP",
  },
  sameAs: [
    "https://x.com/Kengo_Suzuki_",
    "https://www.instagram.com/Kengo_Suzuki_",
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "鈴木健吾",
  alternateName: "Kengo Suzuki",
  jobTitle: "プロマラソンランナー",
  description:
    "2021年びわ湖毎日マラソンで2時間04分56秒を記録。日本記録保持者。プロランナーとして世界に挑戦。",
  image: "https://kemmmy.com/images/SuzukiKengoProfile.jpg",
  url: "https://kemmmy.com/team-kengo",
  birthDate: "1995-06-11",
  birthPlace: {
    "@type": "Place",
    name: "愛媛県宇和島市",
  },
  nationality: {
    "@type": "Country",
    name: "Japan",
  },
  sameAs: [
    "https://x.com/Kengo_Suzuki_",
    "https://www.instagram.com/Kengo_Suzuki_",
  ],
  knowsAbout: ["マラソン", "長距離走", "陸上競技"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="bg-white antialiased font-sans">
        <Header />
        {children}
      </body>
    </html>
  );
}
