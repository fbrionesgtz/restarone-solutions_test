import styles from "./Profile.module.css";
import profilePicture from "../../../img/Selfie.jpg";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileImg}>
        <img src={profilePicture} />
      </div>
      <div className={styles.profileName}>
        <h3>Kelly Cheng</h3>
        <p>Copper</p>
      </div>
    </div>
  );
};

export default Profile;
