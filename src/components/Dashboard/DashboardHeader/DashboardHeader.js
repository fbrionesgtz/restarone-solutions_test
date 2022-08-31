import styles from "./DashboardHeader.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsPlus, BsBellFill, BsFillQuestionCircleFill } from "react-icons/bs";
import { TbLetterP } from "react-icons/tb";

const DashboardHeader = () => {
  return (
    <div className={styles.dashboardHeader}>
      <h1>People</h1>
      <div className={styles.search}>
        <form action="#" method="POST">
          <input
            type="text"
            name="dashboard-search"
            id="dashboard-search"
            placeholder="Search by name, email, domain, or phone number"
          />
          <button type="submit">
            <BiSearchAlt2 />
          </button>
        </form>
      </div>
      <div className={styles.actions}>
        <BsPlus />
        <div className={styles.notifications}>
          <p>47</p>
          <BsBellFill />
        </div>
        <div className={styles.pIcon}>
          <TbLetterP />
        </div>
        <BsFillQuestionCircleFill />
      </div>
    </div>
  );
};

export default DashboardHeader;
