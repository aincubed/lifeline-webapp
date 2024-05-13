"use client";

import { InferenceSession, Tensor } from "onnxruntime-web";
import { useCallback, useEffect, useState } from "react";

import ImagePreview from "@/components/imagePreview";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { detectImage } from "@/utils/model-detect";
import { downloadBuffer } from "@/utils/model-download";
import { resultTransform } from "@/utils/model-results";
import clsx from "clsx";
import { Droplet } from "lucide-react";
import Link from "next/link";

interface DetectionResultProps {
  label: string;
}

const MODEL_URL = "./model/best.onnx";
const MODEL_URL_2 = "./model/nms-yolov8.onnx";
const MODEL_SHAPES = [1, 3, 800, 800]; // 800x800 my preset image model

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Predict({ result }: any) {
  const [detectionResult, setDetectionResult] = useState<
    DetectionResultProps[] | null
  >(null);
  const [isDetectionReady, setIsDetectionReady] = useState(false);
  useEffect(() => {
    if (detectionResult) {
      setIsDetectionReady(true);
    }
  }, [detectionResult]);

  useEffect(() => {
    if (isDetectionReady) {
      handleData();
    }
  }, [isDetectionReady]);

  const handleData = () => {
    const data = detectionResult?.[0]?.label;
    if (data) {
      result(data);
    }
  };

  const [linkPasted, setLinkPasted] = useState<boolean>(false);
  const [session, setSession] = useState<{
    net: InferenceSession;
    nms: InferenceSession;
  } | null>(null);
  const [userInput, setUserInput] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const getModel = useCallback(async () => {
    const arrBufNet = await downloadBuffer(MODEL_URL);
    const yolov8 = await InferenceSession.create(arrBufNet);

    const arrBufNMS = await downloadBuffer(MODEL_URL_2);
    const nms = await InferenceSession.create(arrBufNMS, {
      executionProviders: ["wasm"],
    });

    const tensor = new Tensor(
      "float32",
      new Float32Array(MODEL_SHAPES.reduce((a, b) => a * b)),
      MODEL_SHAPES,
    );
    await yolov8.run({ images: tensor });

    setSession({ net: yolov8, nms: nms });

    console.log("model loaded");
  }, []);

  useEffect(() => {
    if (!session) getModel();
  }, [getModel, session]);

  async function handleImageUpload() {
    const imageUrl = userInput;
    const result = await detectImage(imageUrl, session);
    const resultTransformed = resultTransform(result);
    detectImage(imageUrl, session);
    console.log(resultTransformed);
    setDetectionResult(resultTransformed);
  }

  return (
    <Card className="mt-4 border-lightGrey px-2 py-10 transition-all ease-in-out hover:border-grey hover:border-opacity-40">
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="leading-6">
            <h1 className="text-xl font-medium">Run Inference</h1>
            <p className="text-sm text-slate-500">
              Image link may be obtained after{" "}
              <Link className="text-slate-700 underline" href="/CaptureImage">
                image capturing
              </Link>
            </p>
          </div>
          <Button
            variant={"outline"}
            onClick={() => {
              setLinkPasted(true);
              handleImageUpload();
              handleData();
            }}
            className={clsx(
              "w-1/4 py-2 text-[14px] rounded text-black transition-all mb-2",
              {
                "bg-red-600 text-slate-300 bg-slate-100 pointer-events-none":
                  !session,
              },
              {
                "bg-white text-black pointer-events-auto cursor-pointer":
                  session,
              },
            )}
          >
            {!session ? "Loading" : "Screen Blood"}
          </Button>
        </div>
        <input
          className="p-2 my-5 border border-gray-300 rounded-md w-full"
          type="text"
          value={userInput}
          onChange={handleChange}
          placeholder="image link"
        />
        <div>
          {linkPasted ? (
            <div className="flex">
              <ImagePreview userInput={userInput} />
              {detectionResult && (
                <div className="pl-5 text-[18px] w-full">
                  <p>Result:</p>
                  <div className="flex">
                    <Droplet className="text-red" />
                    <p className="text-red">{detectionResult[0].label}</p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex">
              <Skeleton className="w-[640px] h-[360px]" />
              <div>
                <Skeleton className="ml-5 mb-2 w-[120px] h-[25px]" />
                <Skeleton className="ml-5 w-[120px] h-[25px]" />
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
