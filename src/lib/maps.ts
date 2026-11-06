import { business, fullAddress } from "@/data/business";

export function mapsSearchUrl() {
  return `https://www.google.com/maps?cid=${business.googleMapsCid}&hl=tr`;
}

export function mapsDirectionsUrl() {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress())}`;
}

export function mapsEmbedUrl() {
  const query = `${business.name}, ${fullAddress()}`;
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&hl=tr&z=17&output=embed`;
}
