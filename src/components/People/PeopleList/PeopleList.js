import { Fragment, useState } from "react";
import PersonOverlay from "../../Overlay/Person/PersonOverlay";
import Person from "../Person/Person";
import styles from "./PeopleList.module.css";
import PeopleListHeader from "./PeopleListHeader/PeopleListHeader";

const PeopleList = (props) => {
  const [currProfile, setCurrProfile] = useState(null);

  const handleOpenProfile = (person) => {
    if (!person) {
      setCurrProfile(null);
    } else {
      setCurrProfile(person);
    }
  };

  return (
    <div>
      <PeopleListHeader />
      <div className={styles.peopleList}>
        {props.people.map((person) => (
          <Person
            key={person.id}
            firstName={person.firstName}
            lastName={person.lastName}
            company={person.company}
            title={person.title}
            email={person.email}
            ownedBy={person.ownedBy}
            street={person.street}
            created={person.created}
            lastContacted={person.lastContacted}
            image={person.image}
            onClick={handleOpenProfile.bind(null, person)}
          />
        ))}
      </div>
      <PersonOverlay profile={currProfile} onClose={handleOpenProfile} />
    </div>
  );
};

export default PeopleList;
