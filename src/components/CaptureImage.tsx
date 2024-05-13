/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { createClient } from "@/utils/supabase/client";
import clsx from "clsx";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import uniqid from "uniqid";
import { useToast } from "./ui/use-toast";

const videoConstraints = {
  width: 500,
  height: 300,
  facingMode: "user",
};

const donorID = uniqid();

export default function CaptureImage({ sendDataToParent }: any) {
  const handleData = () => {
    const data = donorID;
    sendDataToParent(data);
  };

  const webcamRef = useRef<Webcam>(null);
  const [capturedImage, setCapturedImage] = useState<string>("");
  const [link, setLinkAvailable] = useState<boolean>(false);
  const supabase = createClient();
  const { toast } = useToast();

  const { data } = supabase.storage
    .from("bloodSampleStorage")
    .getPublicUrl(`${donorID}`);

  console.log(donorID);

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
            .from("bloodSampleStorage")
            .upload(`${donorID}`, blobData);
        toast({
          title: "Image uploaded successfully!",
          description: "Image is now stored in the database",
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
      <Card className="mt-4 border-lightGrey px-2 py-10 transition-all ease-in-out hover:border-grey hover:border-opacity-40">
        <CardContent>
          <h1 className="text-xl font-medium mb-5">Image Capturing</h1>
          <div className="flex justify-between">
            <div className="pb-5">
              <Webcam
                audio={false}
                width={500}
                height={300}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
              />
              <Button
                variant={"outline"}
                className="mt-3"
                onClick={() => {
                  capture();
                }}
              >
                Capture Image
              </Button>
            </div>
            {capturedImage ? (
              <div className="">
                <Image
                  src={capturedImage}
                  width={500}
                  height={300}
                  alt="Captured Image Preview"
                />
                <div className="flex justify-between pt-3">
                  <Button
                    variant={"outline"}
                    onClick={() => {
                      setLinkAvailable(true);
                      handleUpload();
                      handleData();
                    }}
                  >
                    Submit to database
                  </Button>
                  <Button
                    variant={"outline"}
                    onClick={() => {
                      toast({ title: "Link copied successfuly" });
                      navigator.clipboard.writeText(data.publicUrl);
                    }}
                    className={clsx(
                      {
                        "bg-red-600 text-slate-300 bg-slate-100 pointer-events-none":
                          !link,
                      },
                      {
                        "bg-white text-black pointer-events-auto cursor-pointer":
                          link,
                      },
                    )}
                  >
                    {!link ? "Submit First" : "Copy Link"}
                  </Button>
                </div>
              </div>
            ) : (
              <Skeleton className="w-[500px] h-[300px]" />
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
