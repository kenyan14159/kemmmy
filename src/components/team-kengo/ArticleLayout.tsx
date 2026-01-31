import Link from "next/link";
import Footer from "@/components/sections/Footer";

interface ArticleLayoutProps {
  children: React.ReactNode;
}

export default function ArticleLayout({ children }: ArticleLayoutProps) {
  return (
    <>
      <main className="relative pt-24 pb-20 bg-white min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link
              href="/team-kengo/news"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors duration-300 mb-8 group"
            >
              <svg
                className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span className="text-sm font-medium tracking-wide">
                News一覧に戻る
              </span>
            </Link>

            {/* Article Content */}
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
