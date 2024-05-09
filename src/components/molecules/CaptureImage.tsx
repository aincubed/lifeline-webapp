"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

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
        if (error) {
          console.error("Error uploading image:", error.message);
        } else if (data) {
          console.log("Image uploaded successfully:", data);
        }
      } catch (error) {
        console.error("Error uploading image:", error.message);
      }
    }
  };

  return (
    <>
      {isCaptureEnable || (
        <Button variant={"outline"} onClick={() => setCaptureEnable(true)}>
          Start
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
              width={540}
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
                Upload
              </Button>
            </div>
          )}
        </>
      )}
    </>
  );
}
