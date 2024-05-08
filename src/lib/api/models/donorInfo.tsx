import { z } from "zod";

export const donorInfoSchema = z.object({
  lastName: z.string({
    required_error: "Please input your last name",
  }),
  firstName: z.string({
    required_error: "Please input your first name",
  }),
  middleName: z.string(),
  sex: z.enum(["Male", "Female"], {
    required_error: "Please select your gender on birth",
  }),
  age: z.number({
    required_error: "Please input your age",
  }),
  practitionerName: z.string({
    required_error: "Practitioner name should be filled",
  }),
  bloodGroup: z.enum(["A", "B", "AB", "O", "undefined"], {
    required_error: "Please select your gender on birth",
  }),
});

export type DonorInfo = z.infer<typeof donorInfoSchema>;
