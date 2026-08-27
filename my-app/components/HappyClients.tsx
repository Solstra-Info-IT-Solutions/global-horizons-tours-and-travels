const clients = [
  {
    image: "/5.png",
    className: "h-[210px] md:h-[210px]",
  },
  {
    image: "/2.png",
    className: "h-[235px] md:h-[495px]",
  },
  {
    image: "/4.png",
    className: "h-[210px] md:h-[210px]",
  },
  {
    image: "/1.png",
    className: "h-[210px] md:h-[210px]",
  },
  {
    image: "/3.png",
    className: "h-[210px] md:h-[210px]",
  },
];

export default function HappyClients() {
  return (
    <section className="bg-[#14596a] px-6 py-16 md:px-10 md:py-20 lg:px-20">

      {/* ================= HEADER ================= */}
      <div className="mb-16 text-center">

        <p className="text-[14px] font-medium tracking-[1.5px] text-[#efb83f]">
          MAKE YOUR TOUR MORE PLEASURE
        </p>

        <h2 className="mt-5 font-serif text-3xl font-bold text-white md:text-[32px]">
          Our Happy Clients
        </h2>

      </div>

      {/* ================= CLIENT IMAGES ================= */}
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-5 md:grid-cols-[1fr_1.15fr_1fr] md:items-center md:gap-8">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-5">

          <div className="overflow-hidden rounded-[16px]">
            <img
              src={clients[0].image}
              alt="Happy client"
              className="h-[210px] w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden rounded-[16px]">
            <img
              src={clients[3].image}
              alt="Happy client"
              className="h-[210px] w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

        </div>

        {/* CENTER COLUMN */}
        <div className="overflow-hidden rounded-[16px]">

          <img
            src={clients[1].image}
            alt="Happy clients"
            className="h-[495px] w-full object-cover transition duration-500 hover:scale-105"
          />

        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-5">

          <div className="overflow-hidden rounded-[16px]">
            <img
              src={clients[2].image}
              alt="Happy clients"
              className="h-[210px] w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden rounded-[16px]">
            <img
              src={clients[4].image}
              alt="Happy client"
              className="h-[210px] w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

        </div>

      </div>
    </section>
  );
}