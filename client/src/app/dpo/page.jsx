import DPO from "../../pages/DPO/DPO";

const getFiles = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/files/get?forPage=dpo`, {
    next: { revalidate: 1200 }
  })

  return await response.json()
}

const page = async () => {
  const files = await getFiles()
  return <DPO files={files} />;
};

export default page;
