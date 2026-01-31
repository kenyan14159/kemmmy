import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import CompanyInfo from "@/components/sections/CompanyInfo";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Philosophy />
      <CompanyInfo />
      <ContactForm />
      <Footer />
    </main>
  );
}
