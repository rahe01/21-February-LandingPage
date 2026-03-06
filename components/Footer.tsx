"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function LanguageDayFooter() {
  const menu = [
    { title: "Home", url: "/" },
    { title: "History", url: "/history" },
    { title: "Language Heroes", url: "/heroes" },
    { title: "Gallery", url: "/gallery" },
    { title: "Events", url: "/events" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-8">
      <div className="container mx-auto px-6 md:px-8">
        {/* Top section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0">
          {/* Logo & Description (Left) */}
          <div className="flex flex-col gap-4 md:w-1/3">
            <div className="flex items-center gap-3">
              <img
                src="/bangladesh.png"
                alt="Bangladesh Flag"
                className="h-10 w-auto"
              />
              <span className="text-2xl md:text-3xl font-extrabold text-red-500">
                Bangla Heritage
              </span>
            </div>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Honoring the heroes and martyrs of the Bengali Language Movement
              of 1952. Their courage and sacrifice preserve our culture,
              language, and identity for generations.
            </p>
          </div>

          {/* Quick Links (Center) */}
          <div className="flex flex-col items-center md:w-1/3">
            <h4 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2 text-gray-400 text-center">
              {menu.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="hover:text-red-500 transition-colors duration-300 font-medium"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Media (Right) */}
          <div className="flex flex-col items-center md:items-end   md:w-1/3">
            <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="p-3 bg-gray-800 rounded-full hover:bg-red-500 text-white transition-colors duration-300 flex items-center justify-center"
                  >
                    <Icon />
                  </a>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm md:text-base">
          &copy; {new Date().getFullYear()} Bangla Heritage. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
