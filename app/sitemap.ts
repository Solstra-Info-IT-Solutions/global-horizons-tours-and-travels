import { MetadataRoute } from "next";
import { FEATURED_TOURS } from "@/src/data/tours";
import { DESTINATIONS } from "@/src/data/destinations";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://globalhorizonstours.com";

  const staticRoutes = [
    "",
    "/about",
    "/tours",
    "/destinations",
    "/transportation",
    "/airport-transfers",
    "/customized-trips",
    "/foreign-travelers",
    "/corporate-travel",
    "/contact",
    "/enquiry",
    "/privacy-policy",
    "/terms",
    "/cancellation-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const tourRoutes = FEATURED_TOURS.map((tour) => ({
    url: `${baseUrl}/tours/${tour.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const destinationRoutes = DESTINATIONS.map((dest) => ({
    url: `${baseUrl}/destinations/${dest.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...tourRoutes, ...destinationRoutes];
}
