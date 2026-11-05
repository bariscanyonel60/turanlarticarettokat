import { business } from "@/data/business";

export function whatsappUrl(message: string) {
  return `https://wa.me/${business.whatsappE164}?text=${encodeURIComponent(message)}`;
}

export function generalOrderMessage() {
  return "Merhaba Turanlar Ticaret, tüp siparişi vermek istiyorum. Tokat Merkez için servis durumunu öğrenebilir miyim?";
}

export function productOrderMessage(productName: string) {
  return `Merhaba Turanlar Ticaret, ${productName} hakkında bilgi almak ve sipariş vermek istiyorum. Tokat Merkez için servis durumunu öğrenebilir miyim?`;
}

export function generalWhatsappUrl() {
  return whatsappUrl(generalOrderMessage());
}

export function productWhatsappUrl(productName: string) {
  return whatsappUrl(productOrderMessage(productName));
}
