import styles from "./Person.module.css";

const Person = (props) => {
  return (
    <div
      className={styles.personGrid}
      onClick={() => {
        props.onClick();
      }}
    >
      <div
        className={`${styles.cell} ${styles.startColumnTwo} ${styles.personName}`}
      >
        <div className={styles.personImg}>
          <img src={props.image} />
        </div>
        <p>{`${props.firstName} ${props.lastName}`}</p>
      </div>
      <div className={`${styles.cell} ${styles.accent}`}>
        <p>{props.company}</p>
      </div>
      <div className={`${styles.cell} ${styles.light}`}>
        <p>{`${props.title === "" ? "—" : props.title}`}</p>
      </div>
      <div className={`${styles.cell} ${styles.accent}`}>
        <p>{props.email}</p>
      </div>
      <div className={`${styles.cell} ${styles.accent}`}>
        <p>{`${props.ownedBy === "" ? "—" : props.ownedBy}`}</p>
      </div>
      <div className={`${styles.cell} ${styles.light}`}>
        <p>{props.street}</p>
      </div>
      <div className={`${styles.cell} ${styles.light}`}>
        <p>{props.created}</p>
      </div>
      <div className={`${styles.cell} ${styles.light}`}>
        <p>{props.lastContacted}</p>
      </div>
    </div>
  );
};

export default Person;
