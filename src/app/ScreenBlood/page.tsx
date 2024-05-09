"use client";

import CaptureImage from "@/components/molecules/CaptureImage";

import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function ScreenBlood() {
  const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-medium mb-5">Blood Screening</h1>
      <Alert
        variant="destructive"
        className={cn("block mb-5", { hidden: isCaptureEnable })}
      >
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Emergency Use Only</AlertTitle>
        <AlertDescription>
          This function is specifically used for EMERGENCY SCREENINGS ONLY.
          Please adhere to the instructed process if not necessary.
        </AlertDescription>
      </Alert>
      <Button
        variant={"destructive"}
        className={cn("flex mb-5", { hidden: isCaptureEnable })}
        onClick={() => setCaptureEnable(true)}
      >
        I undestand
      </Button>
      {isCaptureEnable && <CaptureImage />}
    </div>
  );
}
