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
import Link from "next/link";

const Enrollee = ({ files, specialityes }) => {
  // const [files, setFiles] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         `${process.env.NEXT_PUBLIC_SERVER_URL}/files/get`,
  //         {
  //           params: { forPage: "enrollee" },
  //         }
  //       );

  //       setFiles(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <section>
      <EnrolleeTop />
      <EnrolleeDocuments />
      <EnrolleeOrder files={files ? files[0] : null} />
      <EnrolleeOtherLinks files={files ? files[1] : null} />
      <EnrolleeMarCapital />
      <EnrolleeSpecialityes specialityes={specialityes} />
      <EnrolleeNecessary />

      <EnrolleeRequzits />
    </section>
  );
};

export default Enrollee;
