"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 720,
  height: 360,
  facingMode: "user",
};

export const CaptureImage = () => {
  const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
  const webcamRef = useRef<Webcam>(null);
  const [url, setUrl] = useState<string | null>(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setUrl(imageSrc);
    }
  }, [webcamRef]);

  return (
    <>
      {isCaptureEnable || (
        <Button variant={"outline"} onClick={() => setCaptureEnable(true)}>
          start
        </Button>
      )}
      {isCaptureEnable && (
        <>
          <div>
            <Button variant={"outline"} onClick={() => setCaptureEnable(false)}>
              end
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
            capture
          </Button>
        </>
      )}
      {url && (
        <>
          {/* <div>
            <button
              onClick={() => {
                setUrl(null);
              }}
            >
              delete
            </button>
          </div> */}
          <div>
            <Image
              src={url}
              width={720}
              height={360}
              alt="Screenshot of sample image"
            />
            <p>{url}</p>
          </div>
        </>
      )}
    </>
  );
};
