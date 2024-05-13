"use client";

import { LocalDateTime } from "@/components/molecules/DateAndTime";
import { DonorCountCard } from "@/components/molecules/DonorCountCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import dateTime from "date-time";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  const dateToday = dateTime();

  return (
    <>
      <Card className="mt-4 border-lightGrey px-2 py-10 transition-all ease-in-out hover:border-grey hover:border-opacity-40">
        <CardContent>
          <div className="flex justify-between mb-5">
            <h1 className="text-xl font-medium">Donor Count Today</h1>
            <div className="flex font-medium text-[16px] items-center justify-center gap-x-2">
              <CalendarIcon />
              <LocalDateTime date={dateToday} />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-[1rem] md:grid-cols-4">
            <DonorCountCard />
          </div>
        </CardContent>
      </Card>
      <Card className="mt-5 border-lightGrey px-2 py-10 transition-all ease-in-out hover:border-grey hover:border-opacity-40">
        <CardContent>
          <div className="mb-4 flex flex-row items-center justify-between">
            <h1 className="text-xl font-medium">Recently Added</h1>
            <Button variant="outline">
              <Link href={"/DonorList"}>See Full List</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
