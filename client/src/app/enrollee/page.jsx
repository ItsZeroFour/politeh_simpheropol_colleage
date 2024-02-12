import Enrollee from "../../pages/enrollee/Enrollee";

const getFiles = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/files/get?forPage=enrollee`,
    {
      next: { revalidate: 600 },
    }
  );

  return await response.json();
};

const getSpecialities = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/speciality/getSpecialities`,
    {
      next: { revalidate: 1488 },
    }
  );

  return await response.json();
};

const index = async () => {
  const files = await getFiles();
  const specialityes = await getSpecialities();

  return <Enrollee files={files} specialityes={specialityes} />;
};

export default index;
