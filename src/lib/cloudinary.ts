import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: import.meta.env.CLOUDINARY_CLOUD_NAME,
  api_key: import.meta.env.CLOUDINARY_API_KEY,
  api_secret: import.meta.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(
  image: string,
  slug: string
): Promise<string> {
  const result = await cloudinary.uploader.upload(image, {
    folder: "sarvaseo",
    public_id: slug,
    overwrite: true,
    resource_type: "image",
  });
  return result.secure_url;
}

export { cloudinary };
