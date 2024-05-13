import { createClient } from "@/utils/supabase/server";
import { DataTable } from "../../components/molecules/listDonor/DataTable";

<<<<<<< HEAD
=======
// Importing DonorInfo type and columns definition from listDonor directory
import { Card, CardContent } from "@/components/ui/card";
>>>>>>> 5124107c0b15e46920a469e72a4028cb016076f1
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
<<<<<<< HEAD
    <div className="container mx-auto py-10">
      <div className="mb-5 text-center">
        <h1 className="text-2xl font-bold">Donor Information</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
=======
    <Card className="mt-4 border-lightGrey px-2 py-10 transition-all ease-in-out hover:border-grey hover:border-opacity-40">
      <CardContent>
        <h1 className="text-xl font-medium">Donor Directory</h1>
        {/* Rendering DataTable component with columns and data */}
        <DataTable columns={columns} data={data} />
      </CardContent>
    </Card>
>>>>>>> 5124107c0b15e46920a469e72a4028cb016076f1
  );
}
