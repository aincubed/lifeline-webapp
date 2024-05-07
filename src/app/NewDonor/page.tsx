import { Card, CardContent } from "@/components/ui/card";

import { CaptureImage } from "@/components/molecules/CaptureImage";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AddDonor() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }
  return (
    <>
      <Card>
        <CardContent>
          <CaptureImage />
        </CardContent>
      </Card>
    </>
  );
}
