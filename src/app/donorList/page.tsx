// Importing DataTable component from the listDonor directory
import { redirect } from "next/navigation";
import { DataTable } from "../../components/molecules/listDonor/DataTable";

// Importing DonorInfo type and columns definition from listDonor directory
import { createClient } from "@/utils/supabase/server";
import {
  DonorInfo,
  columns,
} from "../../components/molecules/listDonor/column";

// Function to asynchronously fetch donor data
async function getData(): Promise<DonorInfo[]> {
  const supabase = createClient();
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
    // Add more data objects as needed
  ];
}

// Default function for the DemoPage component
export default async function DemoPage() {
  // Asynchronously fetch donor data
  const data = await getData();

  // Rendering DemoPage component
  return (
    <div className="container mx-auto py-10">
      <div className="mb-5 text-center">
        <h1 className="text-2xl font-bold">Donor Information</h1>
      </div>
      {/* Rendering DataTable component with columns and data */}
      <DataTable columns={columns} data={data} />
    </div>
  );
}
