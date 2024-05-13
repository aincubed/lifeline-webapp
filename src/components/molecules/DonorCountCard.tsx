"use client";
import { Card, CardContent } from "@/components/ui/card";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type DonorCountCardProps = {
  Ocount?: string;
  Acount?: string;
  Bcount?: string;
  ABcount?: string;
};

export const DonorCountCard: React.FC<DonorCountCardProps> = () => {
  const supabase = createClient();
  const [bloodGroupCounts, setBloodGroupCounts] = useState<{
    [key: string]: number;
  }>({});

  useEffect(() => {
    async function fetchBloodGroupCounts() {
      const { data, error } = await supabase.from("todos").select("bloodGroup");

      if (error) {
        console.error("Error fetching blood group counts:", error.message);
        return;
      }

      if (data) {
        const counts: { [key: string]: number } = {};
        data.forEach((row: any) => {
          const bloodGroup = row.bloodGroup;
          counts[bloodGroup] = (counts[bloodGroup] || 0) + 1;
        });
        setBloodGroupCounts(counts);
      }
    }

    fetchBloodGroupCounts();
  }, []);
  return (
    <>
<<<<<<< HEAD
      {Object.entries(bloodGroupCounts).map(([bloodGroup, count]) => (
        <Link href="/" key={bloodGroup}>
          <Card className="border-lightGrey transition-all ease-in-out hover:border-grey">
            <CardContent className="flex flex-col items-center gap-y-2 p-10">
              <div className="flex h-[70px] w-[70px] items-center justify-center rounded-md bg-lightGrey text-3xl font-bold text-darkGrey">
                {bloodGroup}
              </div>
              Donors
              <p className="rounded-xl bg-blue px-5 text-sm text-white">
                {count}
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
=======
      <Link href="/">
        <Card className="border-lightGrey hover:border-grey transition-all ease-in-out">
          <CardContent className="flex flex-col items-center p-10 gap-y-2">
            <div className="text-3xl text-red rounded-md font-bold items-center justify-center flex h-[70px] w-[70px] bg-lightGrey">
              A
            </div>
            Donors
            <p className="bg-red rounded-xl text-white text-sm px-5">10</p>
          </CardContent>
        </Card>
      </Link>

      <Link href="/">
        <Card className="border-lightGrey hover:border-grey transition-all ease-in-out">
          <CardContent className="flex flex-col items-center p-10 gap-y-2">
            <div className="text-3xl text-red rounded-md font-bold items-center justify-center flex h-[70px] w-[70px] bg-lightGrey">
              B
            </div>
            Donors
            <p className="bg-red rounded-xl text-white text-sm px-5">14</p>
          </CardContent>
        </Card>
      </Link>

      <Link href="/">
        <Card className="border-lightGrey hover:border-grey transition-all ease-in-out">
          <CardContent className="flex flex-col items-center p-10 gap-y-2">
            <div className="text-3xl text-red rounded-md font-bold items-center justify-center flex h-[70px] w-[70px] bg-lightGrey">
              AB
            </div>
            Donors
            <p className="bg-red rounded-xl text-white text-sm px-5">7</p>
          </CardContent>
        </Card>
      </Link>

      <Link href="/">
        <Card className="border-lightGrey hover:border-grey transition-all ease-in-out">
          <CardContent className="flex flex-col items-center p-10 gap-y-2">
            <div className="text-3xl text-red rounded-md font-bold items-center justify-center flex h-[70px] w-[70px] bg-lightGrey">
              O
            </div>
            Donors
            <p className="bg-red rounded-xl text-white text-sm px-5">25</p>
          </CardContent>
        </Card>
      </Link>
>>>>>>> 5124107c0b15e46920a469e72a4028cb016076f1
    </>
  );
};
