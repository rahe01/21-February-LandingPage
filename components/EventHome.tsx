"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const events = [
  {
    title: "21 February Tribute Program",
    date: "21 February",
    desc: "A tribute ceremony honoring the martyrs of the Language Movement with cultural performances, poetry recitations, and discussions about the importance of preserving the mother language.",
    img: "/events/event1.jpeg",
  },
  {
    title: "Shaheed Minar Flower Tribute",
    date: "21 February Morning",
    desc: "People gather at Shaheed Minar to offer flowers and pay respect to the martyrs who sacrificed their lives for the Bangla language.",
    img: "/events/event2.jpeg",
  },
  {
    title: "Language Movement Seminar",
    date: "20 February",
    desc: "An educational seminar where historians and scholars discuss the historical significance of the 1952 Language Movement.",
    img: "/events/event3.jpeg",
  },
  {
    title: "Cultural Night",
    date: "21 February Evening",
    desc: "A cultural event including songs, dramas, and storytelling dedicated to the history and legacy of the language movement.",
    img: "/events/event4.jpeg",
  },
];

const EventPageHome = () => {
  return (
    <main className="bg-gray-50">
      {/* EVENTS SECTION */}
      <section className="py-16 px-4 sm:px-10 md:px-20">
        <div className="mx-auto">
          <div className="text-center mb-12 sm:mb-14">
            <p className="text-red-600 font-semibold tracking-widest uppercase mb-2 text-sm sm:text-base">
              21 February 2026
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-500">
              Remembering the Language Martyrs
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
              A tribute to the brave souls who sacrificed their lives for the
              recognition of the Bangla language. Through cultural programs,
              tributes, and educational events, we honor the spirit of the
              Language Movement that shaped the identity, pride, and heritage of
              our nation.
            </p>
          </div>

          {/* Grid: 2 cards per row on small devices, 4 on large */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col h-full"
              >
                <img
                  src={event.img}
                  alt={event.title}
                  className="h-40 sm:h-44 md:h-48 w-full object-cover"
                />

                <div className="p-4 sm:p-6 flex flex-col flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">
                    {event.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-red-600 font-semibold mt-1">
                    {event.date}
                  </p>

                  <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-relaxed flex-1">
                    {event.desc}
                  </p>

                  {/* Button stays at bottom */}
                  <Link href={`/events`} className="w-full mt-auto">
                    <Button className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 text-sm sm:text-base">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default EventPageHome;
