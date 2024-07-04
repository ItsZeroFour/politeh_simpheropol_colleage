/* itsZeroFour@gmail.com code side */

"use client";

import EnrolleeDocuments from "@/widgets/Enrollee/EnrolleeDocuments";
import EnrolleeMarCapital from "@/widgets/Enrollee/EnrolleeMarCapital";
import EnrolleeOrder from "@/widgets/Enrollee/EnrolleeOrder";
import EnrolleeOtherLinks from "@/widgets/Enrollee/EnrolleeOtherLinks";
import EnrolleeTop from "@/widgets/Enrollee/EnrolleeTop";
import EnrolleeSpecialityes from "@/widgets/Enrollee/EnrolleeSpecialityes";
import EnrolleeNecessary from "@/widgets/Enrollee/EnrolleeNecessary";
import EnrolleeRequzits from "@/widgets/Enrollee/EnrolleeRequzits";

import EnrolleRecomendations from "@widgets/Enrollee/EnrolleRecomendations";

const Enrollee = ({ files, specialityes }) => {

  return (
    <section>
      <EnrolleeTop />
      <EnrolleeDocuments />
      <EnrolleeOrder files={files ? files[0] : null} />
      <EnrolleeOtherLinks files={files ? files[1] : null} />
      <EnrolleRecomendations />
      <EnrolleeSpecialityes specialityes={specialityes} />
      <EnrolleeNecessary />
      <EnrolleeMarCapital />

      <EnrolleeRequzits />
    </section>
  );
};

export default Enrollee;
