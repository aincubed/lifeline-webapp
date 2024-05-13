"use client";

import { useState } from "react";
import Predict from "./predict";

export default function RetrieveResult() {
  const [result, setResult] = useState<string>("");

  const receiveDataFromChild = (data: string) => {
    setResult(data);
  };

  console.log(result);

  return (
    <>
      <Predict result={receiveDataFromChild} />
      {/* <UpdateBloodGroup /> */}
      <h1>RECEIVED: {result}</h1>
    </>
  );
}
