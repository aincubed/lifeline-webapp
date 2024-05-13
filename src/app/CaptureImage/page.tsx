"use client";

// import { DonorInfo } from "@/components/molecules/listDonor/column";
// import { createClient } from "@/utils/supabase/client";
import { useState } from "react";
import CaptureImage from "../../components/CaptureImage";

export default function ScreenBlood() {
  // const supabase = createClient();

  // async function getData(): Promise<DonorInfo[]> {
  //   try {
  //     // Fetch specific columns from the 'donor_info' table in Supabase
  //     const { data, error } = await supabase
  //       .from("todos")
  //       .select("id, lastName, firstName, bloodGroup, acquiredDate");
  //     if (error) {
  //       throw error;
  //     }
  //     // Return the fetched data
  //     return data;
  //   } catch (error) {
  //     console.error("Error fetching data:", (error as Error).message);
  //     return [];
  //   }
  // }

  // const data = await getData();
  const [dataFromChild, setDataFromChild] = useState<string>("");

  const receiveDataFromChild = (data: string) => {
    setDataFromChild(data);
  };

  return (
    <>
      {/* {data.map((value) => (
        <h1 key={value.id}>{value.id}</h1>
      ))} */}
      <CaptureImage sendDataToParent={receiveDataFromChild} />
      <h1 className="hidden">{dataFromChild}</h1>
    </>
  );
}
