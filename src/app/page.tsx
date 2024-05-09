import { LocalDateTime } from "@/components/molecules/DateAndTime";
import { DonorCountCard } from "@/components/molecules/DonorCountCard";
import { Card, CardContent } from "@/components/ui/card";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import dateTime from "date-time";
import { CalendarFold, ChevronRight, SmilePlus } from "lucide-react";
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

  const dateToday = dateTime();

  return (
    <div className="container mx-auto py-10">
      <div className="">
        <div className="mb-5 flex flex-row justify-between">
          <h1 className="text-3xl font-medium">Dashboard</h1>
          <div className="align-center flex flex-row items-center justify-center gap-x-2 text-sm font-medium">
            <CalendarFold />
            <LocalDateTime date={dateToday} />
            {/* <User /> */}
          </div>
        </div>
      </div>
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

      <Card className="mt-4 h-[100vh] border-lightGrey px-2 py-10 transition-all ease-in-out hover:border-grey hover:border-opacity-40">
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
        </CardContent>
      </Card>
    </div>
  );
}
