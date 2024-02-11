/* itsZeroFour@gmail.com code side */

import SpecialityContent from '../../../pages/speciality/Speciality'

const getSpecialities = async (specialityId) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/speciality/getSpeciality/${specialityId}`,
    {
      next: { revalidate: 1200 },
    }
  )

  return await response.json()
}

const Speciality = async ({ params }) => {
  const speciality = await getSpecialities(params.specialityId)
  return <SpecialityContent speciality={speciality} />
}

export default Speciality
