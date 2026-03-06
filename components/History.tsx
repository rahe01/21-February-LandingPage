"use client";



export default function HistoryPage() {
  return (
    <main className="bg-gray-50 font-sans">
      {/* HERO SECTION */}
      <section
        className="relative w-full h-72 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpeg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30"></div>
        <div className="relative text-center px-6 max-w-4xl animate-fadeIn">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            History of the 1952 Language Movement
          </h1>
          <p className="text-gray-200 text-lg md:text-xl lg:text-2xl leading-relaxed drop-shadow-md">
            A historic struggle that shaped Bangladesh’s cultural identity and
            inspired global recognition of native languages.
          </p>
         
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-20 md:py-28 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight border-b-4 border-red-600 inline-block pb-2">
            Introduction
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            The Language Movement of 1952 was a defining moment in Bangladesh’s
            history. Citizens protested against the imposition of Urdu as the
            sole state language, demanding recognition of Bangla.
          </p>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Students, intellectuals, and ordinary citizens united for their
            mother tongue, turning a protest into a movement symbolizing
            identity, dignity, and cultural pride.
          </p>
        </div>
      </section>

      {/* IMAGE + TEXT SECTION */}
      <section className="py-20 md:py-28 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <img
            src="/fav.jpeg"
            alt="Language Movement"
            className="rounded-3xl shadow-2xl object-cover w-full h-[400px] md:h-[500px] hover:scale-105 transition-transform duration-700"
          />
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Background of the Movement
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              After Pakistan’s creation in 1947, Urdu was declared the only
              state language. This sparked protests among the Bengali-speaking
              majority, who demanded recognition of Bangla.
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Students, cultural groups, and intellectuals organized rallies,
              meetings, and demonstrations. The movement spread nationwide,
              becoming a symbol of linguistic pride and identity.
            </p>
          </div>
        </div>
      </section>

      {/* KEY EVENTS TIMELINE */}
      <section className="py-20 md:py-28 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
            Key Events of 1952
          </h2>

          <div className="relative border-l-4 border-red-600 ml-4 md:ml-12 space-y-12">
            {[
              {
                title: "February 21 Protest",
                desc: "Students defied Section 144 and gathered near Dhaka University. Police opened fire, killing several students.",
              },
              {
                title: "Language Martyrs",
                desc: "Brave souls like Salam, Barkat, Rafiq, and Jabbar sacrificed their lives, becoming symbols of resistance and national pride.",
              },
              {
                title: "Nationwide Movement",
                desc: "News spread rapidly, intensifying protests across the country and uniting citizens for the cause.",
              },
              {
                title: "Recognition of Bangla",
                desc: "The movement led to Bangla being recognized as a state language in 1956, marking a historic victory.",
              },
            ].map((event, index) => (
              <div key={index} className="ml-6 md:ml-10 relative group">
                <div className="absolute -left-6 top-2 w-5 h-5 bg-red-600 rounded-full transition-all duration-300 group-hover:scale-125"></div>
                <h3 className="text-2xl md:text-3xl font-semibold text-red-600 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                  {event.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEGACY & IMPACT */}
      <section className="py-20 md:py-28 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 border-b-4 border-red-600 inline-block pb-2">
            Legacy and Global Impact
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            The Language Movement not only protected Bengali linguistic rights
            but also laid the foundation for Bangladesh’s independence movement.
            It strengthened national identity and unity.
          </p>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            UNESCO declared February 21 as International Mother Language Day in
            1999, honoring the martyrs. Today it is celebrated worldwide to
            promote linguistic diversity and cultural heritage.
          </p>
        </div>
      </section>
    </main>
  );
}
