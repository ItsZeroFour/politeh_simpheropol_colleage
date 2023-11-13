/* itsZeroFourX@gmail.com code side */

import DormitoryAnnouncementBlock from "@widgets/DormitoryAccommodination/DormitoryAnnouncement";
import DormitoryFiles from "@widgets/DormitoryAccommodination/DormitoryFiles";
import DormitoryNote from "@widgets/DormitoryAccommodination/DormitoryNote";
import DormitoryPrice from "@widgets/DormitoryAccommodination/DormitoryPrice";
import DormitoryTop from "@widgets/DormitoryAccommodination/DormitoryTop";

const DormitoryAccommodination = () => {
  return (
    <section>
      <DormitoryTop />
      <DormitoryNote />
      <DormitoryFiles />
      <DormitoryAnnouncementBlock />
      <DormitoryPrice />
    </section>
  );
};

export default DormitoryAccommodination;
