import slugify from "slugify";
import path from "path";
import { Car } from "@/types";

export function processFormData(formData: FormData): Car {
  const carName = formData.get("carName") as string;
  const slug = slugify(carName, { lower: true });
  const image = formData.get("image") as File;
  const extension = image.name.split(".").pop() ?? "";
  const imagePath = `/assets/${slug}.${extension}`;

  return {
    carName,
    review: formData.get("review") as string,
    image,
    imagePath,
    creator: formData.get("creator") as string,
    creator_email: formData.get("creator_email") as string,
    slug,
  };
}
