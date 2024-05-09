"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import { ToastAction } from "@radix-ui/react-toast";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { useToast } from "../ui/use-toast";

const videoConstraints = {
  width: 720,
  height: 360,
  facingMode: "user",
};

type DonorInfoProps = {
  firstName?: string;
  lastName?: string;
};

export default function CaptureImage({ firstName, lastName }: DonorInfoProps) {
  const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
  const webcamRef = useRef<Webcam>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const supabase = createClient();
  const { toast } = useToast();

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setCapturedImage(imageSrc);
    }
  }, [webcamRef]);

  const handleUpload = async () => {
    if (capturedImage) {
      try {
        const blobData = await fetch(capturedImage).then((res) => res.blob());
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { data, error }: { data: any; error: any } =
          await supabase.storage
            .from("blood group")
            .upload(`${lastName}, ${firstName}`, blobData);
        toast({
          title: "Donor Added Succesfully!",
          description: "Donor information has been saved",
          action: (
            <ToastAction altText="Back to main page">
              <Link
                className="border border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2"
                href="/"
              >
                Back
              </Link>
            </ToastAction>
          ),
        });
        if (error) {
          console.error("Error uploading image:", error.message);
        } else if (data) {
          console.log("Image uploaded successfully:", data);
        }
      } catch (error) {
        console.error("Error uploading image:", (error as Error).message);
      }
    }
  };

  return (
    <>
      {isCaptureEnable || (
        <Button variant={"outline"} onClick={() => setCaptureEnable(true)}>
          Star Blood Screening
        </Button>
      )}
      {isCaptureEnable && (
        <>
          <div>
            <Button variant={"outline"} onClick={() => setCaptureEnable(false)}>
              End
            </Button>
          </div>
          <div>
            <Webcam
              audio={false}
              width={950}
              height={360}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          </div>
          <Button variant={"outline"} onClick={capture}>
            Capture
          </Button>
          {capturedImage && (
            <div>
              <Image
                src={capturedImage}
                width={720}
                height={360}
                alt="Captured Image Preview"
              />
              <Button variant={"outline"} onClick={handleUpload}>
                Submit
              </Button>
            </div>
          )}
        </>
      )}
    </>
  );
}
