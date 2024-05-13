import { createClient } from "@/utils/supabase/server";
import { DataTable } from "../../components/molecules/listDonor/DataTable";

import {
  DonorInfo,
  columns,
} from "../../components/molecules/listDonor/column";

const supabase = createClient();
async function getData(): Promise<DonorInfo[]> {
  try {
    const { data, error } = await supabase
      .from("todos")
      .select(
        "id, lastName, firstName, bloodGroup, acquiredDate, age, sex, middleName, practitionerName"
      );
    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error fetching data:", (error as Error).message);
    return [];
  }
}

export default async function DemoPage() {
  const data = await getData();
  return (
    <div className="container mx-auto py-10">
      <div className="mb-5 text-center">
        <h1 className="text-2xl font-bold">Donor Information</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
