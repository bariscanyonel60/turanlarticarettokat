import { createHash } from "node:crypto";

type UploadResult = {
  src: string;
  width: number;
  height: number;
};

function cloudinaryConfig() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error("Cloudinary ayarları eksik.");
  }
  return { cloudName, apiKey, apiSecret };
}

function sign(params: Record<string, string>, apiSecret: string) {
  const payload = Object.keys(params)
    .sort()
    .map((key) => `${key}=${params[key]}`)
    .join("&");
  return createHash("sha1").update(payload + apiSecret).digest("hex");
}

export async function uploadProductImage(file: File, publicId: string): Promise<UploadResult> {
  const { cloudName, apiKey, apiSecret } = cloudinaryConfig();
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const params = { public_id: publicId, timestamp };
  const body = new FormData();
  body.append("file", file);
  body.append("api_key", apiKey);
  body.append("timestamp", timestamp);
  body.append("public_id", publicId);
  body.append("signature", sign(params, apiSecret));

  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
    method: "POST",
    body,
  });
  const result = (await response.json()) as {
    secure_url?: string;
    width?: number;
    height?: number;
    error?: { message?: string };
  };
  if (!response.ok || !result.secure_url || !result.width || !result.height) {
    throw new Error(result.error?.message || "Görsel Cloudinary'ye yüklenemedi.");
  }
  return { src: result.secure_url, width: result.width, height: result.height };
}
