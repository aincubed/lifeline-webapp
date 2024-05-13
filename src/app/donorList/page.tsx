import { createClient } from "@/utils/supabase/server";
import { DataTable } from "../../components/molecules/listDonor/DataTable";

// Importing DonorInfo type and columns definition from listDonor directory
import { Card, CardContent } from "@/components/ui/card";
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
    <Card className="mt-4 border-lightGrey px-2 py-10 transition-all ease-in-out hover:border-grey hover:border-opacity-40">
      <CardContent>
        <h1 className="text-xl font-medium">Donor Directory</h1>
        {/* Rendering DataTable component with columns and data */}
        <DataTable columns={columns} data={data} />
      </CardContent>
    </Card>
  );
}
