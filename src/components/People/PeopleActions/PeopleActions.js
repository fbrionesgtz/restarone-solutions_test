import styles from "./PeopleActions.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { IoSettingsSharp, IoFilterSharp } from "react-icons/io5";

const PeopleActions = () => {
  return (
    <div className={styles.peopleActions}>
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
        <div className={styles.filters}>
          <IoFilterSharp />
          <p>Filters</p>
        </div>
      </div>
    </div>
  );
};

export default PeopleActions;
