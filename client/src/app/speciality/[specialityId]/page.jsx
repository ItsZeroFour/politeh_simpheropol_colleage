/* itsZeroFour@gmail.com code side */

"use client";

import React from "react";
import SpecialityContent from "@/pages/speciality/Speciality";
import { useRouter } from "next/navigation";

const Speciality = ({ params }) => {
  return <SpecialityContent specialityId={params.specialityId} />;
};

export default Speciality;
