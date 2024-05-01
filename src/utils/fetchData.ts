import { DonorInfo } from "@/components/molecules/listDonor/column";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getData(): Promise<DonorInfo[]> {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }
  return [
    {
      id: "728ed52f",
      lastName: "Termulo",
      firstName: "Erica",
      bloodGroup: "O",
      acquisitionDate: new Date("2024-04-22T12:30:00"),
    },
    {
        id: "728ed52h",
        lastName: "Bergola",
        firstName: "Khryx Rhoien",
        bloodGroup: "B",
        acquisitionDate: new Date("2024-03-22T12:30:00"),
    },
    {
        id: "728ed52g",
        lastName: "Gatus",
        firstName: "Mark Andrei",
        bloodGroup: "O",
        acquisitionDate: new Date("2024-02-22T12:30:00"),
    },
  ];
}