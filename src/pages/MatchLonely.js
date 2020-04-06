import React from "react";
import "./Match.css";
import profilePic from "../assets/images/calcifer.png";

const MatchLonely = ({ likedUsers, superLikedUsers }) => (
  <div id="lonely">
    <p>There is no new buddy around you.</p>

    <span className="pulse">
      <img src={profilePic} alt="You..." />
    </span>

    <div id="liked-people">
      <p>
        {likedUsers.length > 0
          ? "People you wish to workout with. Let's hope they like you too!"
          : ""}
      </p>

      {likedUsers.map(person => (
        <div key={person.id} className="liked-person">
          <div className="liked-person-image">
            <img
              src={`/images/${person.image}`}
              alt={`You liked ${person.name}`}
            />
          </div>
        </div>
      ))}

      <p>
        {superLikedUsers.length > 0
          ? "People you would die for to workout with!"
          : ""}
      </p>

      {superLikedUsers.map(person => (
        <div key={person.id} className="liked-person">
          <div className="liked-person-image">
            <img
              src={`/images/${person.image}`}
              alt={`You liked ${person.name}`}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default MatchLonely;
