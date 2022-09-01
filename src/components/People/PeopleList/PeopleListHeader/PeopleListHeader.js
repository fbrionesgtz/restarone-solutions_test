import styles from "./PeopleListHeader.module.css";
import { BsFilterLeft, BsFilterRight } from "react-icons/bs";
import { Fragment } from "react";

const PeopleListHeader = () => {
  return (
    <div className={styles.headerGrid}>
      <div>
        <div className={styles.headerCellContent}>
          <input type="checkbox" name="select-people" id="select-people" />
        </div>
      </div>
      <div>
        <div className={`${styles.headerCellContent} ${styles.active}`}>
          <p>First Name</p>
          <BsFilterRight className={styles.flip} />
        </div>
      </div>
      <div>
        <div className={styles.headerCellContent}>
          <p>Company</p>
          <BsFilterLeft />
        </div>
      </div>
      <div>
        <div className={styles.headerCellContent}>
          <p>Title</p>
          <BsFilterLeft />
        </div>
      </div>
      <div>
        <div className={styles.headerCellContent}>
          <p>Email</p>
          <BsFilterLeft />
        </div>
      </div>
      <div>
        <div className={styles.headerCellContent}>
          <p>Owned By</p>
          <BsFilterLeft />
        </div>
      </div>
      <div>
        <div className={styles.headerCellContent}>
          <p>Street</p>
        </div>
      </div>
      <div>
        <div className={styles.headerCellContent}>
          <p>Created</p>
          <BsFilterLeft />
        </div>
      </div>
      <div>
        <div className={styles.headerCellContent}>
          <p>Last Contacted</p>
          <BsFilterRight className={styles.flip} />
        </div>
      </div>
    </div>
  );
};

export default PeopleListHeader;
