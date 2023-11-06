/* itsZeroFour@gmail.com code side */

import EnrolleeDocuments from "@/widgets/Enrollee/EnrolleeDocuments";
import EnrolleeMarCapital from "@/widgets/Enrollee/EnrolleeMarCapital";
import EnrolleeOrder from "@/widgets/Enrollee/EnrolleeOrder";
import EnrolleeOtherLinks from "@/widgets/Enrollee/EnrolleeOtherLinks";
import EnrolleeTop from "@/widgets/Enrollee/EnrolleeTop";
import EnrolleeSpecialityes from "@/widgets/Enrollee/EnrolleeSpecialityes";
import EnrolleeNecessary from "@/widgets/Enrollee/EnrolleeNecessary";
import Button from "@/container/Button";
import EnrolleeRequzits from "@/widgets/Enrollee/EnrolleeRequzits";

const Enrollee = () => {
  return (
    <section>
      <EnrolleeTop />
      <EnrolleeDocuments />
      <EnrolleeOrder />
      <EnrolleeOtherLinks />
      <EnrolleeMarCapital />
      <EnrolleeSpecialityes />
      <EnrolleeNecessary />

      <div>
        <Button

          width={"100%"}
          textContent={"Приказ о зачислении"}
          marginTop={50}
          marginBottom={50}
          padding={24}
          fontSize={40}
        />
      </div>

      <EnrolleeRequzits />
    </section>
  );
};

export default Enrollee;
