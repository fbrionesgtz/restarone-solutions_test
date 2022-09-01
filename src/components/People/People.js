import styles from "./People.module.css";
import PeopleActions from "./PeopleActions/PeopleActions";
import PeopleList from "./PeopleList/PeopleList";

const People = (props) => {
  return (
    <div className={styles.people}>
      <PeopleActions />
      <PeopleList people={props.people} />
    </div>
  );
};

export default People;
