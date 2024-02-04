/* itsZeroFour@gmail.com code side */

import React from "react";
import SpecialityContent from "../../../pages/speciality/Speciality";

const Speciality = ({ params }) => {
  return <SpecialityContent specialityId={params.specialityId} />;
};

export default Speciality;
