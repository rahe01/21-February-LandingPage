"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HistorySection() {
  return (
    <section className="py-5 md:py-20 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        {/* Left Image */}
        <div className="md:w-1/2 relative">
          <img
            src="/fav.jpeg"
            alt="Language Movement 1952"
            className="w-full h-auto rounded-xl shadow-xl object-cover border border-gray-200 hidden md:block"
          />
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 flex flex-col gap-6">
          {/* Decorative small line above heading */}
          <span className="w-20 h-1 bg-red-600 rounded-full mb-2"></span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Brief History of the 1952 Language Movement
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            The 1952 Language Movement was a historic struggle for the
            recognition of Bangla as one of the state languages of Pakistan.
            Students, activists, and ordinary citizens stood together, demanding
            linguistic rights, ultimately leading to the martyrs sacrificing
            their lives on 21 February 1952.
          </p>
          <Link href="/history" className="w-max">
            <Button className="bg-red-600 text-white hover:bg-red-700 px-6 py-3">
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
