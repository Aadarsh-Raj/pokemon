import React from "react";
import "./Styles/pokemondetailscontainer.css";
const About = (props) => {
  return (
    <>
      <div className="more-details-container">
        <div className="about-item">
          <div className="tag-name">Species:</div>
          <div className="tag-details">
            {props.about.species}
          </div>
        </div>
        <div className="about-item">
          <div className="tag-name">Height:</div>
          <div className="tag-details">
            {props.about.height ? props.about.height : <p>No Data Found</p>}
          </div>
        </div>
        <div className="about-item">
          <div className="tag-name">Weight:</div>
          <div className="tag-details">
            {props.about.weight ? props.about.weight : <p>No Data Found</p>}
          </div>
        </div>
        <div className="about-item">
          <div className="tag-name">Abilities:</div>
          <div className="tag-details abilities-items">
            
              {props.about.abilities.map((ele) => (
                <p style={{ paddingLeft: "1rem" }}>{ele.ability.name}</p>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
