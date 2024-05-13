"use client";

import { donorInfoSchema } from "@/lib/api/models/donorInfo";
import { createClient } from "@/utils/supabase/client";

import { z } from "zod";

export async function onSubmit(
  data: z.infer<typeof donorInfoSchema>,
): Promise<void> {
  const {
    lastName,
    firstName,
    middleName,
    sex,
    age,
    bloodGroup,
    practitionerName,
    donorID,
  } = data;
  const supabase = createClient();

  try {
    const { error } = await supabase.from("todos").insert({
      lastName,
      firstName,
      middleName,
      sex,
      age,
      practitionerName,
      bloodGroup,
      donorID,
    });
    if (error) {
      throw error;
    }
  } catch (error) {
    console.log("Error occurred", { error });
  }
}
