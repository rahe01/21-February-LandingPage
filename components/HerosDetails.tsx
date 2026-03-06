"use client";

const heroes = [
  {
    name: "Salam",
    title: "The Brave Martyr",
    desc: "Salam was one of the key figures in the 1952 Language Movement of Bangladesh. Despite facing severe oppression, he fearlessly protested for the recognition of the Bengali language as a state language. His courage and vision symbolized the spirit of resistance and a deep dedication to cultural identity. Salam’s sacrifice not only inspired his contemporaries but continues to resonate with generations of Bangladeshis, reminding them of the power of unity, resilience, and the fight for justice and human dignity.",
    img: "/heroes/salam.jpeg",
  },
  {
    name: "Barkat",
    title: "The Courageous Student",
    desc: "Barkat was a devoted student of Dhaka University who actively joined the Language Movement with unwavering determination. He stood firmly against injustice and participated in protests that demanded linguistic rights for the Bengali-speaking population. Barkat’s bravery in the face of threats and violence demonstrated his unwavering commitment to the cause. His contributions played a vital role in galvanizing public support, inspiring countless others to stand up for their language, and leaving a lasting legacy of courage and patriotic spirit.",
    img: "/heroes/barkot.jpeg",
  },
  {
    name: "Rafiq",
    title: "The Fearless Fighter",
    desc: "Rafiq was among the fearless martyrs who sacrificed his life during the 1952 Language Movement to defend the right to speak and preserve the Bengali language. He faced immense danger but never wavered in his commitment to justice and equality. Rafiq’s unwavering determination and selfless actions exemplify the courage and patriotism that defined the movement. His legacy continues to inspire people to uphold their cultural identity, fight against oppression, and honor the sacrifices of those who came before them.",
    img: "/heroes/rafiq.jpeg",
  },
  {
    name: "Jabbar",
    title: "The Dedicated Martyr",
    desc: "Jabbar was a steadfast participant in the Language Movement of 1952, remembered for his unwavering dedication to the cause of the Bengali language. Even in the face of extreme adversity and danger, he remained committed to fighting for linguistic recognition. Jabbar’s ultimate sacrifice served as a powerful reminder of the high cost of freedom, cultural pride, and the importance of standing firm for one’s beliefs. His story continues to motivate generations to honor their heritage and work towards justice and equality.",
    img: "/heroes/jabbar.jpeg",
  },
];
const HeroHeader = () => (
  <section
    className="relative w-full h-72 flex flex-col items-center justify-center bg-cover bg-center px-6"
    style={{ backgroundImage: "url('/hero-bg.jpeg')" }}
  >
    <div className="absolute inset-0 bg-black/60"></div>
    <h1 className="relative text-3xl md:text-5xl font-extrabold text-red-500 text-center mb-4">
      Remembering the Brave Language Heroes
    </h1>
    <p className="relative text-gray-200 text-center text-lg md:text-xl max-w-2xl">
      Honoring the martyrs of 1952 who gave their lives for the recognition of
      the Bengali language. Their courage and sacrifice inspire generations to
      stand for their culture and identity.
    </p>
  </section>
);

export default function HeroDetailsPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <HeroHeader />

      <div className="flex flex-col gap-16 px-6 md:px-20 py-16">
        {heroes.map((hero, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={hero.name}
              className={`flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-2xl overflow-hidden transition-transform duration-500 hover:scale-102 ${
                !isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Hero Image */}
              <div className="md:w-1/2 flex items-center justify-center bg-gray-100 p-6 md:p-10">
                <div className="w-full h-80 md:h-96 flex items-center justify-center">
                  <img
                    src={hero.img}
                    alt={hero.name}
                    className="max-w-full max-h-full object-contain rounded-2xl"
                  />
                </div>
              </div>

              {/* Hero Details */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="bg-red-100 inline-block px-4 py-2 rounded-md mb-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-red-600">
                    {hero.name}
                  </h3>
                  <h4 className="text-xl md:text-2xl font-semibold text-gray-800 mt-1">
                    {hero.title}
                  </h4>
                </div>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                  {hero.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
