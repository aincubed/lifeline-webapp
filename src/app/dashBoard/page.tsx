import { LocalDateTime } from "@/components/molecules/dateAndTime/dateAndTime";
import { DonorCountCard } from "@/components/molecules/donorCountCard/donorCountCard";
import { Card, CardContent } from "@/components/ui/card";
import dateTime from "date-time";
import { CalendarFold, ChevronRight, SmilePlus } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  const dateToday = dateTime();

  return (
    <>
      <div className="">
        <div className="flex flex-row justify-between mb-4">
          <h1 className="text-3xl font-medium">Report</h1>
          <div className="flex flex-row align-center justify-center items-center gap-x-2 text-sm font-medium">
            <CalendarFold />
            <LocalDateTime date={dateToday} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-x-[1rem] md:grid-cols-5">
        <DonorCountCard />
        <Link href="AddDonor">
          <Card className="text-center border-2 border-blue border-opacity-20 border-dashed hover:border-opacity-60 transition-all ease-in-out">
            <CardContent className="text-blue opacity-20 hover:opacity-90 flex flex-col items-center p-10 gap-y-2">
              <div className="text-3xl rounded-md font-bold items-center justify-center flex h-[70px] w-[70px] bg-lightGrey">
                <SmilePlus className="h-[70px] w-[70px]" />
              </div>
              New Donor
            </CardContent>
          </Card>
        </Link>
      </div>

      <Card className="h-[100vh] mt-4 py-10 px-2 border-lightGrey hover:border-grey hover:border-opacity-40 transition-all ease-in-out">
        <CardContent>
          <div className="flex flex-row justify-between items-center mb-4">
            <h1 className="text-2xl font-medium">Recently Added</h1>
            <Link
              className="flex text-sm items-center hover:cursor-pointer text-darkGrey opacity-50 hover:opacity-100"
              href={"/DonorList"}
            >
              See Full List
              <ChevronRight className="h-10" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
