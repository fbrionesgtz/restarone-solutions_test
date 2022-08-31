import styles from "./Dashboard.module.css";
import DashboardActions from "./DashboardActions/DashboardActions";
import DashboardHeader from "./DashboardHeader/DashboardHeader";

const Dashboard = () => {
  return (
    <section className={styles.dashboard}>
      <DashboardHeader />
      <DashboardActions />
    </section>
  );
};

export default Dashboard;
