"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Instagram, Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/team-kengo", label: "TEAM KENGO" },
  { href: "/team-kengo/news", label: "NEWS" },
  { href: "/members", label: "MEMBERS" },
  { href: "/sponsors", label: "SPONSORS" },
  { href: "/business", label: "FOR BUSINESS" },
];

const socialLinks = [
  {
    href: "https://x.com/Kengo_Suzuki_",
    label: "X (Twitter)",
    icon: (
      <svg
        className="w-4 h-4"
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
    icon: <Instagram className="w-4 h-4" />,
  },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.95)"]
  );

  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ["0 0 0 rgba(0,0,0,0)", "0 1px 20px rgba(0,0,0,0.08)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        style={{
          backgroundColor: headerBg,
          boxShadow: headerShadow,
        }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl font-bold tracking-tighter"
              >
                <span className="text-orange-500">K</span>
                <span
                  className={`transition-colors duration-300 ${
                    isScrolled ? "text-black" : "text-black"
                  }`}
                >
                  emmmy
                </span>
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:flex items-center gap-8"
            >
              <ul className="flex items-center gap-8">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`relative text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                          isActive
                            ? "text-orange-500"
                            : "text-gray-600 hover:text-black"
                        }`}
                      >
                        {item.label}
                        {isActive && (
                          <motion.span
                            layoutId="activeNav"
                            className="absolute -bottom-1 left-0 right-0 h-[2px] bg-orange-500"
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Social Links */}
              <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-200">
                {socialLinks.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-gray-500 hover:text-orange-500 transition-colors duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-600 hover:text-black transition-colors duration-300"
              aria-label="メニューを開く"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu - Outside of header to avoid transform containment issues */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-black/50 z-[60] md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white z-[70] shadow-2xl md:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-8">
                  <button
                    onClick={closeMobileMenu}
                    className="text-gray-600 hover:text-black transition-colors duration-300"
                    aria-label="メニューを閉じる"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Items */}
                <nav className="mb-8">
                  <ul className="space-y-4">
                    {navItems.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={closeMobileMenu}
                            className={`block py-3 text-lg font-medium tracking-wide uppercase transition-colors duration-300 border-b border-gray-100 ${
                              isActive
                                ? "text-orange-500"
                                : "text-gray-600 hover:text-black"
                            }`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                {/* Social Links */}
                <div className="pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-4 uppercase tracking-wide">
                    Follow Us
                  </p>
                  <div className="flex items-center gap-6">
                    {socialLinks.map((social) => (
                      <a
                        key={social.href}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="text-gray-500 hover:text-orange-500 transition-colors duration-300"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
