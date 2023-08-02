"use server";
export async function shareCarPost(formData: FormData) {
  const car = {
    carName: formData.get("carName"),
    review: formData.get("review"),
    image: formData.get("image"),
    creator: formData.get("creator"),
    creator_email: formData.get("creator_email"),
  };

  console.log(car);
}
