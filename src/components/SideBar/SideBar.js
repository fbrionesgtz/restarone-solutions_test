import styles from "./SideBar.module.css";
import logo from "../../img/logo.png";
import Nav from "./Nav/Nav";
import { BsPlus, BsThreeDots } from "react-icons/bs";
import User from "./User/User";

const SideBar = () => {
  return (
    <section className={styles.sidebar}>
      <BsPlus className={styles.btnX} />
      <User />
      <Nav />
      <div className={styles.logo}>
        <img src={logo} height="110%" width="110%" />
      </div>
      <BsThreeDots className={styles.btnThreeDots} />
    </section>
  );
};

export default SideBar;
