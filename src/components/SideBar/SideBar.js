import styles from "./SideBar.module.css";
import logo from "../../img/logo.png";
import Profile from "./Profile/Profile";
import Nav from "./Nav/Nav";
import { BsPlus, BsThreeDots } from "react-icons/bs";

const SideBar = () => {
  return (
    <section className={styles.sidebar}>
      <BsPlus className={styles.btnX} />
      <Profile />
      <Nav />
      <div className={styles.logo}>
        <img src={logo} height="110%" width="110%" />
      </div>
      <BsThreeDots className={styles.btnThreeDots} />
    </section>
  );
};

export default SideBar;
