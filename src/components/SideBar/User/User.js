import styles from "./User.module.css";
import profilePicture from "../../../img/Selfie.jpg";

const User = () => {
  return (
    <div className={styles.user}>
      <div className={styles.userImg}>
        <img src={profilePicture} />
      </div>
      <div className={styles.userName}>
        <h3>Kelly Cheng</h3>
        <p>Copper</p>
      </div>
    </div>
  );
};

export default User;
