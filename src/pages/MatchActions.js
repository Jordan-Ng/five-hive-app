import React from "react";
import "./Match.css";
import like from "../assets/images/like.png";
import superlike from "../assets/images/superlike.png";
import dislike from "../assets/images/dislike.png";
import rewind from "../assets/images/rewind.png";

const MatchActions = ({ person, modifySuperficialChoices }) => (
  <div id="actions">
    <button type="button">
      <img src={rewind} alt="Rewind User" />
    </button>
    <button
      type="button"
      onClick={() =>
        modifySuperficialChoices(person.id, "ADD_TO_DISLIKED_USERS")
      }
    >
      <img src={dislike} alt="Dislike User" />
    </button>
    <button
      type="button"
      onClick={() => modifySuperficialChoices(person.id, "ADD_TO_LIKED_USERS")}
    >
      <img src={like} alt="Like User" />
    </button>
    <button
      type="button"
      onClick={() =>
        modifySuperficialChoices(person.id, "ADD_TO_SUPERLIKED_USERS")
      }
    >
      <img src={superlike} alt="Superlike User" />
    </button>
  </div>
);

export default MatchActions;
