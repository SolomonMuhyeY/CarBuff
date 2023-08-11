"use server";

import { redirect } from "next/navigation";
import { saveCar } from "./cars";
import { processFormData } from "./ProcessFormData";
import { revalidatePath } from "next/cache";

export async function shareCarPost(formData: FormData) {
  const car = processFormData(formData);
  // console.log(car);
  await saveCar(car);
  revalidatePath("/car");
  redirect("/car");
}
