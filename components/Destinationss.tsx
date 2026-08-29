import { ArrowRight } from "lucide-react";

const destinations = [
  {
    title: "Ellora Caves",
    tag: "UNESCO Heritage",
    description:
      "Marvel at the monolithic Kailasa temple, a masterpiece of ancient Indian...",
    image: "/Container1.png",
    tagColor: "gold",
  },
  {
    title: "Bibi Ka Maqbara",
    tag: "Mughal Architecture",
    description:
      "Discover the 'Taj of the Deccan', a stunning 17th-century mausoleum built",
    image: "/Container2.png",
    tagColor: "blue",
  },
  {
    title: "Daulatabad Fort",
    tag: "Historic Fort",
    description:
      "Explore the formidable 12th-century hill fortress, renowned for its ingenious...",
    image: "/Container3.png",
    tagColor: "gold",
  },
];

export default function Destinations() {
  return (
    <section
      id="destinations"
      className="bg-[#faf9f5] px-6 py-20 md:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* ================= HEADER ================= */}
        <div className="mb-16">

          {/* Small Heading */}
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-8 bg-[#5f8e9b]" />

            <p className="text-[16px] font-medium tracking-[1.5px] text-[#125467]">
              ICONIC LANDMARKS
            </p>
          </div>

          {/* Title + View All */}
          <div className="mt-5 flex items-center justify-between">
            <h2 className="font-serif text-[16px] font-bold text-[#125467]">
              Curated Destinations
            </h2>

            <a
              href="#"
              className="group flex items-center gap-2 text-[15px] font-medium text-[#125467] transition hover:text-[#0c3c4c]"
            >
              View All Destinations

              <ArrowRight
                size={21}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-1 gap-9 md:grid-cols-3">

          {destinations.map((destination) => (
            <article
              key={destination.title}
              className="group overflow-hidden rounded-lg bg-white shadow-[0_12px_30px_rgba(0,0,0,0.07)]"
            >

              {/* Image */}
              <div className="relative h-[315px] overflow-hidden">

                <img
                  src={destination.image}
                  alt={destination.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Tag */}
                <div className="absolute left-4 top-4">
                  <span className="inline-flex items-center gap-1.5 rounded-xl bg-white px-3 py-1.5 text-[15px] font-medium text-[#125467] shadow-sm">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        destination.tagColor === "gold"
                          ? "bg-[#e6b442]"
                          : "bg-[#125467]"
                      }`}
                    />

                    {destination.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="min-h-[185px] px-6 py-7">

                <h3 className="font-serif text-[16px] font-bold text-[#125467]">
                  {destination.title}
                </h3>

                <p className="mt-3 max-w-[320px] text-[16px] leading-6 text-gray-600">
                  {destination.description}
                </p>

              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}