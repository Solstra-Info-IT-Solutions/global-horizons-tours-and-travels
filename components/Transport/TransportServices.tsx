"use client";

import {
  Car,
  Plane,
  TrainFront,
  BriefcaseBusiness,
} from "lucide-react";

const services = [
  {
    title: "Private Taxi",
    description:
      "Personalized point-to-point travel for sightseeing, local errands, or intercity journeys with dedicated chauffeurs.",
    icon: Car,
    iconBg: "bg-[#eaf5f8]",
    iconColor: "text-[#0d4c5c]",
  },
  {
    title: "Airport Transfers",
    description:
      "Punctual and stress-free pickups and drop-offs to all major airports, ensuring you never miss a flight.",
    icon: Plane,
    iconBg: "bg-[#f9ece7]",
    iconColor: "text-[#b94721]",
  },
  {
    title: "Railway Transfers",
    description:
      "Seamless connections to and from major railway stations, complete with luggage assistance.",
    icon: TrainFront,
    iconBg: "bg-[#eaf5f8]",
    iconColor: "text-[#0d4c5c]",
  },
  {
    title: "Corporate",
    description:
      "Professional, discreet, and reliable transportation services for executives, delegates, and corporate events.",
    icon: BriefcaseBusiness,
    iconBg: "bg-[#f9ece7]",
    iconColor: "text-[#b94721]",
  },
];

export default function TransportServices() {
  return (
    <section className="bg-[#ebe5e5] px-6 py-8 md:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">

        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="min-h-[265px] rounded-sm bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${service.iconBg}`}
              >
                <Icon
                  size={22}
                  strokeWidth={2}
                  className={service.iconColor}
                />
              </div>

              <h2 className="mt-6 font-serif text-2xl font-bold leading-tight text-[#073f4e]">
                {service.title}
              </h2>

              <p className="mt-4 font-serif text-sm font-semibold leading-6 text-[#4c4c4c]">
                {service.description}
              </p>
            </div>
          );
        })}

      </div>
    </section>
  );
}