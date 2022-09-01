import styles from "./Nav.module.css";
import { BsPersonFill, BsPlayCircle } from "react-icons/bs";
import { BiTargetLock } from "react-icons/bi";
import {
  MdOutlineBusiness,
  MdOutlineDoubleArrow,
  MdEmail,
  MdInsertChart,
  MdOutlineLockOpen,
} from "react-icons/md";
import { IoMdBriefcase } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { RiTaskFill } from "react-icons/ri";
import { AiFillPieChart, AiFillHome } from "react-icons/ai";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.separator}>
          <div className={styles.notifications}>
            <p>1</p>
          </div>
          <AiFillHome />
          <a href="#">Dashboard</a>
        </li>
        <li>
          <div className={styles.notifications}>
            <p>2</p>
          </div>
          <BiTargetLock />
          <a href="#">Leads</a>
          <MdOutlineLockOpen className={styles.alignEnd} />
        </li>
        <li className={styles.active}>
          <div className={styles.notifications}>
            <p>3</p>
          </div>
          <BsPersonFill />
          <a href="#">People</a>
        </li>
        <li>
          <div className={styles.notifications}>
            <p>4</p>
          </div>
          <MdOutlineBusiness />
          <a href="#">Companies</a>
        </li>
        <li>
          <div className={styles.notifications}>
            <p>5</p>
          </div>
          <MdOutlineDoubleArrow />
          <a href="#">Pipelines</a>
        </li>
        <li className={styles.separator}>
          <div className={styles.notifications}>
            <p>6</p>
          </div>
          <IoMdBriefcase />
          <a href="#">Projects</a>
        </li>
        <li>
          <div className={styles.notifications}>
            <p>7</p>
          </div>
          <RiTaskFill />
          <a href="#">Tasks</a>
        </li>
        <li>
          <div className={`${styles.notifications} ${styles.hidden}`}></div>
          <BsPlayCircle />
          <a href="#">Marketing Tools</a>
        </li>
        <li>
          <div className={styles.notifications}>
            <p>8</p>
          </div>
          <MdEmail />
          <a href="#">My Tracked Emails</a>
        </li>
        <li>
          <div className={`${styles.notifications} ${styles.hidden}`}></div>
          <AiFillPieChart />
          <a href="#">Reports</a>
        </li>
        <li className={styles.separator}>
          <div className={styles.notifications}>
            <p>9</p>
          </div>
          <MdInsertChart />
          <a href="#">Legacy Reports</a>
        </li>
        <li>
          <div className={styles.notifications}>
            <p>0</p>
          </div>
          <IoSettingsSharp />
          <a href="#">Settings</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
