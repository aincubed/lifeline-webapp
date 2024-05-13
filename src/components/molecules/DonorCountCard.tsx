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
    </>
  );
};
