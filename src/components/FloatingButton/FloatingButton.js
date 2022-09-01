import styles from "./FloatingButton.module.css";
import { RiQuestionnaireFill } from "react-icons/ri";

const FloatingButton = () => {
  return (
    <div className={styles.floatingBtn}>
      <div className={styles.icon}>
        <RiQuestionnaireFill />
      </div>
    </div>
  );
};

export default FloatingButton;
