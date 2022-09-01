import { Fragment } from "react";
import styles from "./PersonOverlay.module.css";
import { AiOutlineArrowRight, AiOutlineStar } from "react-icons/ai";
import { RiShareBoxLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineLockOpen, MdContentCopy } from "react-icons/md";

const PersonOverlay = (props) => {
  const profile = props.profile;
  const handleClosePersonOverlay = () => {
    props.onClose(null);
  };

  return (
    <div
      className={`${styles.personOverlay} ${props.profile ? styles.show : ""}`}
    >
      {profile && (
        <div className={styles.profileContent}>
          <div class={styles.profileActions}>
            <AiOutlineArrowRight onClick={handleClosePersonOverlay} />
            <div>
              <RiShareBoxLine />
              <AiOutlineStar />
              <BsThreeDotsVertical />
            </div>
          </div>
          <div className={styles.profileName}>
            <div className={styles.profileImg}>
              <img src={profile.image} />
            </div>
            <div>
              <h1>{`${profile.firstName} ${profile.lastName}`}</h1>
              <p>{profile.company}</p>
            </div>
          </div>
          <div className={styles.sectionOptions}>
            <button
              className={`${styles.sectionBtn} ${styles.sectionBtnActive}`}
            >
              DETAILS
            </button>
            <button className={styles.sectionBtn}>ACTIVITY</button>
            <button className={styles.sectionBtn}>RELATED</button>
          </div>
          <div className={styles.profileInfo}>
            <ul>
              <li>
                <p className={styles.required}>Name</p>
                <MdContentCopy className={styles.alignEnd} />
                <p
                  className={styles.regular}
                >{`${profile.firstName} ${profile.lastName}`}</p>
              </li>
              <li>
                <p>Company</p>
                <p className={styles.accent}>{profile.company}</p>
              </li>
              <li>
                <p>Title</p>
                <input
                  type="text"
                  value={profile.title}
                  placeholder="Add Title"
                />
              </li>
              <li>
                <select className={styles.selectLight}>
                  <option>Work Email</option>
                </select>
                <p className={styles.accent}>{profile.email}</p>
              </li>
              <li>
                <select className={styles.selectLight}>
                  <option>Work Phone</option>
                </select>
                <p>{profile.phone}</p>
              </li>
              <li>
                <p>Raiting</p>
                <select>
                  <option>- Select Rating -</option>
                </select>
              </li>
              <li>
                <p>Status</p>
                <select>
                  <option>- Select Status -</option>
                </select>
              </li>
              <li>
                <p>Recycled Reasons</p>
                <select>
                  <option>- Select Recycoled Reasons -</option>
                </select>
              </li>
              <li>
                <p>Owner</p>
                <p className={styles.accent}>{profile.ownedBy}</p>
              </li>
              <li>
                <p>AE Assignee</p>
                <select>
                  <option>- Select AE Assignee -</option>
                </select>
              </li>
              <li>
                <p>Account Owner</p>
                <input type="checkbox" checked={true} />
              </li>
              <li>
                <p className={styles.inline}>Company Size</p>
                <MdOutlineLockOpen />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonOverlay;
