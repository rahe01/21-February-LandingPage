import { Card } from "@/components/ui/card";

const eventGallery = [
  // First 4 remain the same
  {
    title: "Shaheed Minar Flower Tribute",
    desc: "People gather at Shaheed Minar to pay respect to the martyrs",
    img: "/events/event1.jpeg",
  },
  {
    title: "Language Movement Seminar",
    desc: "Historians and scholars discuss the historical significance of the Language Movement",
    img: "/events/event2.jpeg",
  },
  {
    title: "Cultural Night Performance",
    desc: "Songs, dramas, storytelling, and poetry dedicated to the martyrs",
    img: "/events/event3.jpeg",
  },
  {
    title: "Tribute Program",
    desc: "Honoring martyrs with cultural performances and discussions",
    img: "/events/event4.jpeg",
  },

  // Movement-related short titles for the rest
  {
    title: "Student Protest",
    desc: "Students march to honor the martyrs",
    img: "/events/event5.jpeg",
  },
  {
    title: "Poetry Recitation",
    desc: "Poems in memory of the Language Movement",
    img: "/events/event6.jpeg",
  },
  {
    title: "Historical Exhibition",
    desc: "Photos and artifacts from 1952",
    img: "/events/event7.jpeg",
  },
  {
    title: "Documentary Screening",
    desc: "Stories of the martyrs and their sacrifice",
    img: "/events/event8.jpeg",
  },
  {
    title: "Patriotic Songs",
    desc: "Music performances celebrating Bangla language",
    img: "/events/event9.jpeg",
  },
  {
    title: "Essay Competition",
    desc: "Students write on the significance of mother language",
    img: "/events/event10.jpeg",
  },
  {
    title: "Street Drama",
    desc: "Dramas depicting 1952 events",
    img: "/events/event11.jpeg",
  },
  {
    title: "Photography Display",
    desc: "Capturing Language Day celebrations",
    img: "/events/event12.jpeg",
  },
  {
    title: "Panel Discussion",
    desc: "Scholars talk about the Language Movement legacy",
    img: "/events/event13.jpeg",
  },
  {
    title: "Community Tribute",
    desc: "Community members pay homage to martyrs",
    img: "/events/event14.jpeg",
  },
  {
    title: "Closing Ceremony",
    desc: "Final cultural and tribute program",
    img: "/events/event15.jpeg",
  },
];

const GalleryHeader = () => (
  <section
    className="relative w-full h-72 flex flex-col items-center justify-center bg-cover bg-center px-6"
    style={{ backgroundImage: "url('/hero-bg.jpeg')" }}
  >
    <div className="absolute inset-0 bg-black/60"></div>
    <h1 className="relative text-3xl md:text-5xl font-extrabold text-red-500 text-center mb-4">
      Gallery of Language Martyrs Tribute
    </h1>
    <p className="relative text-gray-200 text-center text-lg md:text-xl max-w-2xl">
      A visual journey through the heartfelt tributes, cultural performances, and community gatherings that honor the brave souls of the 1952 Language Movement.
    </p>
  </section>
); 

const Gallery = () => {
  const chunkArray = (arr: typeof eventGallery, size: number) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  // split into groups of 4 (1-left, 3-right)
  const galleryRows = chunkArray(eventGallery, 4);

  return (
    <div className=" w-full bg-gray-50">
      <GalleryHeader />
      <div className=" mx-auto px-4 lg:px-8 xl:px-16 py-10 w-full">
        {galleryRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-10"
          >
            {/* LEFT – Large card */}
            {row[0] && (
              <Card className="group relative overflow-hidden rounded-2xl border-none p-0 after:absolute after:w-full after:h-full after:bg-linear-to-b after:from-transparent after:from-60% after:to-gray-950">
                <img
                  src={row[0].img}
                  alt={row[0].title}
                  className="object-cover transition-transform duration-500 group-hover:scale-105 h-full w-full"
                />
                <div className="absolute bottom-0 ps-8 pb-8 z-10 flex flex-col gap-1">
                  <h3 className="text-2xl font-semibold text-white">
                    {row[0].title}
                  </h3>
                  <p className="text-white/80 text-sm">{row[0].desc}</p>
                </div>
              </Card>
            )}

            {/* RIGHT SIDE */}
            <div className="grid grid-rows-2 gap-6">
              {row[1] && (
                <Card className="group relative overflow-hidden rounded-2xl border-none p-0 after:absolute after:w-full after:h-full after:bg-linear-to-b after:from-transparent after:from-40% after:to-gray-950">
                  <img
                    src={row[1].img}
                    alt={row[1].title}
                    className="object-cover transition-transform duration-500 group-hover:scale-105 h-full w-full"
                  />
                  <div className="absolute bottom-0 ps-8 pb-8 z-10 flex flex-col gap-1">
                    <h3 className="text-xl font-semibold text-white">
                      {row[1].title}
                    </h3>
                    <p className="text-white/80">{row[1].desc}</p>
                  </div>
                </Card>
              )}

              <div className="grid grid-cols-2 gap-6">
                {row[2] && (
                  <Card className="group relative overflow-hidden rounded-2xl border-none p-0 after:absolute after:w-full after:h-full after:bg-linear-to-b after:from-transparent after:from-40% after:to-gray-950">
                    <img
                      src={row[2].img}
                      alt={row[2].title}
                      className="object-cover transition-transform duration-500 group-hover:scale-105 h-full w-full"
                    />
                    <div className="absolute bottom-0 ps-8 pb-8 z-10 flex flex-col gap-1">
                      <h3 className="text-lg font-semibold text-white">
                        {row[2].title}
                      </h3>
                      <p className="text-sm text-white/80">{row[2].desc}</p>
                    </div>
                  </Card>
                )}

                {row[3] && (
                  <Card className="group relative overflow-hidden rounded-2xl border-none p-0 after:absolute after:w-full after:h-full after:bg-linear-to-b after:from-transparent after:from-40% after:to-gray-950">
                    <img
                      src={row[3].img}
                      alt={row[3].title}
                      className="object-cover transition-transform duration-500 group-hover:scale-105 h-full w-full"
                    />
                    <div className="absolute bottom-0 ps-8 pb-8 z-10 flex flex-col gap-1">
                      <h3 className="text-lg font-semibold text-white">
                        {row[3].title}
                      </h3>
                      <p className="text-sm text-white/80">{row[3].desc}</p>
                    </div>
                  </Card>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
