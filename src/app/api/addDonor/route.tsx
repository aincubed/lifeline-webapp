"use server";

import { donorInfoSchema } from "@/lib/api/models/donorInfo";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { z } from "zod";

// 2. Define a submit handler.
export async function onSubmit(data: z.infer<typeof donorInfoSchema>) {
  const formData = {
    lastName: data.lastName,
    firstName: data.firstName,
    middleName: data.middleName,
    age: data.age,
    sex: data.sex,
    practitionerName: data.practitionerName,
    bloodType: data.bloodType,
  };
  console.log(data);
  await prisma.entry.create({ data: formData });
  redirect("/CaptureImage");
}
