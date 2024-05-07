"use client";

import { donorInfoSchema } from "@/lib/api/models/donorInfo";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";

import { z } from "zod";

export async function onSubmit(
  data: z.infer<typeof donorInfoSchema>
): Promise<void> {
  const {
    lastName,
    firstName,
    middleName,
    sex,
    age,
    bloodGroup,
    practitionerName,
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
    });
    if (error) {
      throw error;
    }
    redirect("/NewDonor");
  } catch (error) {
    console.log("Error occurred", { error });
  }
}
