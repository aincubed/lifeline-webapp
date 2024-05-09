// Importing DataTable component from the listDonor directory
import { createClient } from "@/utils/supabase/server";
import { DataTable } from "../../components/molecules/listDonor/DataTable";

// Importing DonorInfo type and columns definition from listDonor directory
import {
  DonorInfo,
  columns,
} from "../../components/molecules/listDonor/column";

const supabase = createClient();
// Function to asynchronously fetch donor data
async function getData(): Promise<DonorInfo[]> {
  try {
    // Fetch specific columns from the 'donor_info' table in Supabase
    const { data, error } = await supabase
      .from("todos")
      .select("id, lastName, firstName, bloodGroup, acquiredDate");
    if (error) {
      throw error;
    }
    // Return the fetched data
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return [];
  }
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
      <DataTable columns={columns} data={data} />
    </div>
  );
}
