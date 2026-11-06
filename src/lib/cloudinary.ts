export function cloudinaryDeliveryUrl(src: string) {
  const marker = "/upload/";
  if (!src.includes("res.cloudinary.com") || !src.includes(marker)) {
    return src;
  }
  if (src.includes("/upload/f_auto,q_auto/")) {
    return src;
  }
  return src.replace(marker, "/upload/f_auto,q_auto/");
}
