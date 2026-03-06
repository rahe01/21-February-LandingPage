"use client";

import Link from "next/link";

const CallToActionPage = () => {
  return (
    <main className="bg-gray-50 flex flex-col ">
      {/* HERO / CTA Section */}
      <section className="relative flex-1 py-32 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/b1.jpeg"
            alt="Tribute Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto text-center px-6 z-10">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Join the Tribute & Celebrate the Legacy
          </h1>

          {/* Description */}
          <p className="text-lg md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto text-white drop-shadow-md bg-black/30 inline-block px-4 py-2 rounded-lg">
            Be part of the commemorative events honoring the Language Martyrs.
            Participate in programs, share your story, and help us preserve the
            pride and heritage of our nation.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6">
            <Link
              href="/events"
              className="inline-block bg-white text-red-600 font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              Join the Tribute
            </Link>

            <Link
              href="#share-story"
              className="inline-block bg-transparent border-2 border-white text-white font-semibold px-10 py-4 rounded-full hover:bg-white hover:text-red-600 hover:shadow-lg transition-all duration-300"
            >
              Share Your Story
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CallToActionPage;
