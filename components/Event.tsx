"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

// Event type
interface Event {
  title: string;
  date: string;
  desc: string;
  img: string;
}

// Timeline type
interface TimelineItem {
  title: string;
  desc: string;
}

const events: Event[] = [
  {
    title: "21 February Tribute Program",
    date: "21 February",
    desc: "A tribute ceremony honoring the martyrs of the Language Movement with cultural performances, poetry recitations, and discussions about the importance of preserving the mother language. Everyone is invited to participate and reflect on the history that shaped our nation.",
    img: "/events/event1.jpeg",
  },
  {
    title: "Shaheed Minar Flower Tribute",
    date: "21 February Morning",
    desc: "People gather at Shaheed Minar to offer flowers and pay respect to the martyrs who sacrificed their lives for the Bangla language. This heartfelt ceremony reminds us of the courage and determination of our heroes.",
    img: "/events/event2.jpeg",
  },
  {
    title: "Language Movement Seminar",
    date: "20 February",
    desc: "An educational seminar where historians and scholars discuss the historical significance of the 1952 Language Movement, highlighting the struggles and victories that laid the foundation of our linguistic heritage.",
    img: "/events/event3.jpeg",
  },
  {
    title: "Cultural Night",
    date: "21 February Evening",
    desc: "A cultural event including songs, dramas, storytelling, and poetry recitations dedicated to the history and legacy of the language movement. Experience the creativity and passion of our youth as they celebrate the martyrs.",
    img: "/events/event4.jpeg",
  },
];

const timeline: TimelineItem[] = [
  {
    title: "20 February",
    desc: "Preparation programs, seminars, and awareness campaigns discussing the history of the Language Movement. Students and community members come together to plan the next day's tributes.",
  },
  {
    title: "21 February Morning",
    desc: "Thousands gather at Shaheed Minar to offer flowers and honor the martyrs. The morning is filled with solemn respect and reflection.",
  },
  {
    title: "21 February Afternoon",
    desc: "Educational institutions host discussions, essay competitions, and cultural activities highlighting the significance of the Language Movement and its relevance today.",
  },
  {
    title: "21 February Evening",
    desc: "Cultural night with songs, dramas, and poetry recitations dedicated to the martyrs. An evening full of inspiration, remembrance, and celebration of the Bangla language.",
  },
];

const EventPagee = () => {
  return (
    <main className="bg-gray-50">
      {/* HERO SECTION */}
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Events & Programs
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover the important events and programs dedicated to honoring the
            martyrs of the 1952 Language Movement and celebrating the beauty of
            the Bangla language.
          </p>
        </div>
      </section>

      {/* EVENTS SECTION */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-red-600 font-semibold tracking-widest uppercase mb-3">
              21 February 2026
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Remembering the Language Martyrs
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed text-lg">
              Join us as we celebrate the courage, sacrifice, and cultural
              heritage of the Language Movement. Through events, tributes, and
              discussions, we honor the martyrs whose sacrifices shaped our
              nation.
            </p>
          </div>

          {/* Event Cards: 2 per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col transform hover:-translate-y-2"
              >
                <div className="h-56 w-full relative overflow-hidden">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-red-600 font-semibold mb-3">
                    {event.date}
                  </p>
                  <p className="text-gray-700 text-md leading-relaxed flex-1">
                    {event.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="py-20 bg-gray-50 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Event Timeline
          </h2>

          <div className="relative border-l-4 border-red-600 ml-4 md:ml-0">
            {timeline.map((item, index) => (
              <div key={index} className="mb-10 ml-6 md:ml-12 relative">
                {/* Timeline Dot */}
                <span className="absolute -left-7 md:-left-10 top-0 w-6 h-6 rounded-full bg-red-600 border-4 border-white shadow-lg"></span>

                {/* Timeline Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500">
                  <h3 className="text-xl font-bold text-red-600 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-md leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default EventPagee;
