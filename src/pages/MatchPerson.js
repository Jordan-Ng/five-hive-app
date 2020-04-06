import React from "react";
import MatchActions from "./MatchActions";
import "./Match.css";

const MatchPerson = ({ person, modifySuperficialChoices }) => {
  const { name, desc, age, image } = person;

  return (
    <>
      <div className="person">
        <div className="person-photo">
          <img src={`/images/${image}`} alt={name} />
        </div>

        <div className="person-description">
          <p className="person-name-age">
            {name}, <span>{age}</span>
          </p>
          <p className="person-info">{desc}</p>
        </div>
      </div>

      <MatchActions
        person={person}
        modifySuperficialChoices={modifySuperficialChoices}
      />
    </>
  );
};

export default MatchPerson;
