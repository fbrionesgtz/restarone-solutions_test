import styles from "./DashboardActions.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { IoSettingsSharp, IoFilterSharp } from "react-icons/io5";

const DashboardActions = () => {
  return (
    <div className={styles.dashboardActions}>
      <div>
        <select
          name="people-action_select"
          id="people-action_select"
          className={styles.peopleSelect}
        >
          <option value="All People">All People (156663)</option>
          {/*More options ...*/}
        </select>
        <select
          name="action_select"
          id="action_select"
          className={styles.addNewSelect}
        >
          <option value="ADD NEW">ADD NEW</option>
          {/*More options ...*/}
        </select>
      </div>

      <div className={styles.actions}>
        <BiSearchAlt2 />
        <BsPersonFill />
        <IoSettingsSharp />
        <div class={styles.filters}>
          <IoFilterSharp />
          <p>Filters</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardActions;
