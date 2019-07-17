import React from "react";
import Robo from "./Robo";

const RoboList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Robo
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default RoboList;
