"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Mail } from "lucide-react";

const socialLinks = [
  {
    href: "https://x.com/Kengo_Suzuki_",
    label: "X (Twitter)",
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/Kengo_Suzuki_",
    label: "Instagram",
    icon: <Instagram className="w-5 h-5" />,
  },
];

const contactEmail = "info@kemmmy.com";

const footerLinks = {
  company: [
    { label: "会社概要", href: "/#overview" },
    { label: "メンバー", href: "/members" },
    { label: "お問い合わせ", href: "/#contact" },
    { label: "プライバシーポリシー", href: "/privacy-policy" },
  ],
  teamKengo: [
    { label: "About", href: "/team-kengo" },
    { label: "News・Information", href: "/team-kengo/news" },
    { label: "Profile", href: "/team-kengo#profile" },
    { label: "Record", href: "/team-kengo#record" },
  ],
  business: [
    { label: "サポート企業", href: "/sponsors" },
    { label: "法人の皆様へ", href: "/business" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 md:py-20 bg-black text-white px-6 overflow-hidden">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-10 md:mb-16"
        >
          {/* Logo & Info */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-3 md:mb-4"
            >
              <span className="text-orange-500">K</span>emmmy
            </motion.h2>

            <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
              鈴木健吾の挑戦を支える
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 md:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Team Kengo Links */}
          <div>
            <h3 className="text-orange-500 font-bold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
              Team Kengo
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.teamKengo.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Links */}
          <div>
            <h3 className="text-orange-500 font-bold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
              Business
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.business.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-orange-500 font-bold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
              Company
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-orange-500 font-bold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
              Contact
            </h3>
            <p className="text-gray-400 text-xs md:text-sm mb-2">お問い合わせ</p>
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-2 text-white hover:text-orange-500 transition-colors duration-300 text-xs md:text-sm"
            >
              <Mail className="w-4 h-4" />
              {contactEmail}
            </a>
            <div className="mt-4 md:mt-6">
              <Link
                href="/#contact"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-xs md:text-sm"
              >
                お問い合わせフォームへ →
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-6 md:mb-8"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4"
        >
          <p className="text-gray-500 text-xs md:text-sm tracking-wide">
            © {currentYear} Kemmmy LLC. All rights reserved.
          </p>
          <p className="text-gray-600 text-[10px] md:text-xs text-center">
            合同会社Kemmmy | 神奈川県横浜市港北区新横浜3-7-18
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
