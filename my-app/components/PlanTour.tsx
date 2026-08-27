import { ArrowRight } from "lucide-react";

export default function PlanTour() {
  return (
    <section className="bg-[#faf9f5] px-6 py-20 md:px-10 lg:px-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

        {/* ================= LEFT CONTENT ================= */}
        <div>
          {/* Small Heading */}
          <p className="font-serif text-[26px] font-semibold text-[#9ba5a8] md:text-[28px]">
            Let&apos;s Go Together
          </p>

          {/* Main Heading */}
          <h2 className="mt-2 font-serif text-[34px] font-bold leading-tight text-black md:text-[38px]">
            Plan Tour Trip With Us
          </h2>

          {/* Paragraph 1 */}
          <p className="mt-8 max-w-[590px] text-[16px] leading-[22px] text-[#4f585c]">
            Every journey is more than simply travelling from one place to
            another. It is about discovering new destinations, spending
            meaningful time with the people you care about, and creating
            memories that stay with you long after the journey ends.
          </p>

          {/* Paragraph 2 */}
          <p className="mt-5 max-w-[590px] text-[16px] leading-[22px] text-[#4f585c]">
            We are committed to making every trip comfortable, safe, reliable,
            and enjoyable. Whether you are planning a family vacation, a group
            tour, an airport transfer, a sightseeing trip, or a customized
            travel experience, we provide dependable transportation and
            thoughtful travel solutions designed around your needs.
          </p>

          {/* Paragraph 3 */}
          <p className="mt-5 max-w-[590px] text-[16px] leading-[22px] text-[#4f585c]">
            With comfortable vehicles, experienced drivers, and a strong focus
            on safety and service, we take care of the details so you can focus
            on enjoying the journey. From the first enquiry to the moment you
            reach your destination, our team is here to make your travel
            experience smooth and stress-free.
          </p>

          {/* Button */}
          <a
            href="#tours"
            className="mt-9 inline-flex h-[54px] min-w-[186px] items-center justify-center gap-2 bg-[#dc6945] px-7 text-[14px] font-medium text-white transition duration-300 hover:bg-[#c65332]"
          >
            VIEW ALL TOURS
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* ================= RIGHT IMAGE COLLAGE ================= */}
        <div className="mx-auto w-full max-w-[480px]">
          <div className="grid grid-cols-[1fr_120px] gap-7">

            {/* Main Images */}
            <div className="grid grid-rows-[118px_319px] gap-7">

              {/* Top Main Image */}
              <div className="overflow-hidden rounded-tl-[90px]">
                <img
                  src="/4.png"
                  alt="Tour group"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Bottom Main Image */}
              <div className="overflow-hidden rounded-bl-[85px]">
                <img
                  src="/2.png"
                  alt="Travel group"
                  className="h-full w-full object-cover"
                />
              </div>

            </div>

            {/* Small Images */}
            <div className="grid grid-rows-[118px_319px] gap-7">

              {/* Top Small Image */}
              <div className="overflow-hidden rounded-tr-[45px]">
                <img
                  src="/1.png"
                  alt="Tour guide"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Bottom Small Image */}
              <div className="overflow-hidden rounded-br-[75px]">
                <img
                  src="/3.png"
                  alt="Traveler"
                  className="h-full w-full object-cover"
                />
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}