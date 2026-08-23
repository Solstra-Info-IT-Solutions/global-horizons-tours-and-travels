const DEFAULT_WHATSAPP_NUMBER = "919422200000"; // Placeholder format for international routing

export function getWhatsAppNumber(): string {
  return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || DEFAULT_WHATSAPP_NUMBER;
}

export function getWhatsAppUrl(customMessage?: string): string {
  const number = getWhatsAppNumber();
  const defaultText = "Hello Global Horizons Tours & Travels, I would like to enquire about a travel package and private transportation.";
  const text = customMessage || defaultText;
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${number.replace(/\D/g, "")}?text=${encodedText}`;
}

export function getTourWhatsAppUrl(tourTitle: string): string {
  const text = `Hello Global Horizons Tours & Travels, I am interested in the "${tourTitle}" tour package. Please share the suggested itinerary and customized quotation.`;
  return getWhatsAppUrl(text);
}

export function getDestinationWhatsAppUrl(destinationName: string): string {
  const text = `Hello Global Horizons Tours & Travels, I am planning to visit ${destinationName}. Please share transportation details, itinerary options, and a quotation.`;
  return getWhatsAppUrl(text);
}

export function getCustomTripWhatsAppUrl(): string {
  const text = "Hello Global Horizons Tours & Travels, I would like to plan a customized trip to Maharashtra. Please help me create a tailored itinerary and share a quote.";
  return getWhatsAppUrl(text);
}

export function getAirportTransferWhatsAppUrl(): string {
  const text = "Hello Global Horizons Tours & Travels, I need private airport transfer assistance (pickup/drop). Please provide availability and a quote.";
  return getWhatsAppUrl(text);
}

export function getCorporateWhatsAppUrl(): string {
  const text = "Hello Global Horizons Tours & Travels, I am reaching out regarding corporate travel and executive transportation services. Please provide details and corporate quotation.";
  return getWhatsAppUrl(text);
}
