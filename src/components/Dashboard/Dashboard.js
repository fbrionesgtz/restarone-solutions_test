import FloatingButton from "../FloatingButton/FloatingButton";
import styles from "./Dashboard.module.css";
import DashboardHeader from "./DashboardHeader/DashboardHeader";
import People from "../People/People";

const Dashboard = (props) => {
  return (
    <section className={styles.dashboard}>
      <DashboardHeader />
      <People people={props.people} />
      <FloatingButton />
    </section>
  );
};

export default Dashboard;
