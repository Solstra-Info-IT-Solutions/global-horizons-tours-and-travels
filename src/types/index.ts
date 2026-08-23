export type TripType =
  | "Sightseeing"
  | "Private Transportation"
  | "Airport Transfer"
  | "Customized Trip"
  | "Family Trip"
  | "Corporate Travel"
  | "Religious Travel"
  | "International Tourist"
  | "Other";

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  destination: string;
  duration: string;
  highlights: string[];
  description: string;
  inclusions: string[];
  exclusions: string[];
  imageUrl: string;
  badge?: string;
  popular?: boolean;
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  title: string;
  tagline: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  distanceFromAurangabad?: string;
  bestTimeToVisit?: string;
  imageUrl: string;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  badge?: string;
  features: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: "booking" | "tours" | "transport" | "general";
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  tripType: string;
  rating: number;
  comment: string;
  date: string;
  isPlaceholder: boolean;
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  email?: string;
  travelDate: string;
  numberOfTravelers: number | string;
  startingLocation: string;
  destination: string;
  tripType: TripType;
  transportationRequirement?: string;
  accommodationRequirement?: string;
  budgetRange?: string;
  additionalRequirements?: string;
}

export type EnquiryStatus =
  | "New"
  | "Contacted"
  | "Quotation Sent"
  | "Follow-up"
  | "Confirmed"
  | "Completed"
  | "Cancelled";

export interface EnquiryRecord extends EnquiryFormData {
  id: string;
  createdAt: string;
  status: EnquiryStatus;
}
