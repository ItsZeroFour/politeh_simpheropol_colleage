import SpecialityDisciplines from "@/widgets/Speciality/SpecialityDisciplines";
import SpecialityMainInfo from "@/widgets/Speciality/SpecialityMainInfo";
import SpecialityTop from "@/widgets/Speciality/SpecialityTop";
import { useEffect, useState } from "react";

const Speciality = ({ specialityId }) => {
  const [speciality, setSpeciality] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const query = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/speciality/getSpeciality/${specialityId}`
      );
      const response = await query.json();
      setSpeciality(response);
    };

    getData();
  }, []);

  return (
    <section>
      {speciality && (
        <>
          <SpecialityTop speciality={speciality} />
          <SpecialityMainInfo speciality={speciality} />
          <SpecialityDisciplines speciality={speciality} />
        </>
      )}
    </section>
  );
};

export default Speciality;
