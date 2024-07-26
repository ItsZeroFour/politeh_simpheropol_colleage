import Admission from "@pages/admission/Admission";
import React from "react";

const getFiles = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/files/get?forPage=admission`,
      {
        next: { revalidate: 300 },
      }
    );

    const data = await response.json();

    return data;
  } catch {
    const data = [];
    return data;
  }
};

const page = async () => {
  const files = await getFiles();

  return <Admission files={files} />;
};

export default page;
