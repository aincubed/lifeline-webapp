"use server";
import { LocalDateTime } from "@/components/molecules/DateAndTime";
import { DonorCountCard } from "@/components/molecules/DonorCountCard";
import { RecentlyAdd } from "@/components/molecules/listDonor/RecentlyAdd";
import { DonorInfo, columns } from "@/components/molecules/listDonor/column";
import { Card, CardContent } from "@/components/ui/card";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import dateTime from "date-time";
import { CalendarIcon, ChevronRight, SmilePlus } from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

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

  const dateToday = dateTime();
  const data = await getData();

  return (
    <div className="container mx-auto">
      <h1 className="mb-5 text-3xl font-medium">Dashboard</h1>
      <div className="">
        <div className="justify-left mb-5 flex justify-between rounded-md bg-blue p-10 text-[1.5rem] text-white">
          Hey, Admin!
          <div className="flex items-center justify-center gap-x-2 text-[16px]">
            <CalendarIcon />
            <LocalDateTime date={dateToday} />
          </div>
        </div>
      </div>
      {/* <h2 className="text-2xl font-medium mb-5">Donor Count Today</h2> */}
      <div className="grid grid-cols-1 gap-x-[1rem] md:grid-cols-5">
        <DonorCountCard />
        <Link href="/NewDonor">
          <Card className="border-2 border-dashed border-blue border-opacity-20 text-center transition-all ease-in-out hover:border-opacity-60">
            <CardContent className="flex flex-col items-center gap-y-2 p-10 text-blue opacity-20 hover:opacity-90">
              <div className="flex h-[70px] w-[70px] items-center justify-center rounded-md bg-lightGrey text-3xl font-bold">
                <SmilePlus className="h-[70px] w-[70px]" />
              </div>
              New Donor
            </CardContent>
          </Card>
        </Link>
      </div>

      <Card className="mt-4 h-[38vh] border-lightGrey px-2 py-10 transition-all ease-in-out hover:border-grey hover:border-opacity-40">
        <CardContent>
          <div className="mb-4 flex flex-row items-center justify-between">
            <h1 className="text-2xl font-medium">Recently Added</h1>
            <Link
              className="flex items-center text-sm text-darkGrey opacity-50 hover:cursor-pointer hover:opacity-100"
              href={"/DonorList"}
            >
              See Full List
              <ChevronRight className="h-10" />
            </Link>
          </div>
          <RecentlyAdd columns={columns} data={data} />
        </CardContent>
      </Card>
    </div>
  );
}
