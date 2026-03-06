"use client";

import Link from "next/link";

const heroes = [
  {
    name: "Salam",
    desc: "Salam was one of the key figures in the Language Movement of 1952 in Bangladesh. He sacrificed his life to uphold the recognition of the Bengali language as a state language.",
    img: "/heroes/salam.jpeg",
  },
  {
    name: "Barkat",
    desc: "Barkat was a dedicated student of Dhaka University who actively participated in the Language Movement. His courage and commitment made him a prominent figure among the martyrs.",
    img: "/heroes/barkot.jpeg",
  },
  {
    name: "Rafiq",
    desc: "Rafiq was one of the brave martyrs of the 1952 Language Movement, who laid down his life fighting for the rights of the Bengali-speaking people, symbolizing bravery and patriotism.",
    img: "/heroes/rafiq.jpeg",
  },
  {
    name: "Jabbar",
    desc: "Jabbar was a martyr of the language movement, remembered for his unwavering dedication to the cause of the Bengali language and his ultimate sacrifice during the struggle.",
    img: "/heroes/jabbar.jpeg",
  },
];

export default function HeroesPage() {
  return (
    <main className="py-16 px-6 md:px-20 bg-gray-50">
      {/* Header Section */}
      <div className="text-center mb-12 px-4 md:px-0">
        <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
          Remembering the Brave Language Heroes
        </h2>
        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
          Honoring the martyrs of 1952 who gave their lives for the recognition
          of the Bengali language. Their courage and sacrifice inspire
          generations to stand for their culture, identity, and voice.
        </p>
      </div>

      {/* Heroes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {heroes.map((hero) => (
          <div
            key={hero.name}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition-shadow duration-300 flex flex-col"
          >
            {/* Hero Image */}
            <div className="relative h-64 w-full overflow-hidden">
              <img
                src={hero.img}
                alt={hero.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Hero Details */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {hero.name}
              </h3>
              <p className="text-gray-600 text-sm flex-grow">{hero.desc}</p>
              <Link href={`/heroes`}>
                <button className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
