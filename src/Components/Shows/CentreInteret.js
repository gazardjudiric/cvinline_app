import React, { useContext, useState } from "react";
import {
  IconesChevronFill,
  IconesChevronUp,
  IconesParkOutlineEntertainment,
  IconesrChevronDown,
} from "../../Assets/Icones/icones";
import Global from "../../Globals/Context";

function CentreInteret(props) {
  const { displayInteretFields } = useContext(Global);
  const [changesIconesChevronForInteret, setChangesIconesChevronForInteret] =
    useState(true);

  return (
    <div
      className={
        "skills " + (changesIconesChevronForInteret ? "" : "skillsClosed")
      }
      onClick={() =>
        setChangesIconesChevronForInteret(!changesIconesChevronForInteret)
      }
    >
      <div className="hearderSkills">
        <div className="hearderSkillsIcones hearderSkillsIcones_iconeSkill">
          <IconesParkOutlineEntertainment />
        </div>
        <h1>Centren d'intéret</h1>
        <div
          className="hearderSkillsIcones hearderSkillsIcones_iconesChevrons"
          onClick={() =>
            setChangesIconesChevronForInteret(!changesIconesChevronForInteret)
          }
        >
          {changesIconesChevronForInteret ? (
            <IconesChevronUp />
          ) : (
            <IconesrChevronDown />
          )}
        </div>
      </div>

      <div
        className={
          "bodySkills" +
          (changesIconesChevronForInteret ? " bodySkillsShow" : "")
        }
      >
        {displayInteretFields.map((el, index) => {
          return (
            <div
              className={
                "bodySkillsDisplaySkills" +
                (changesIconesChevronForInteret
                  ? " bodySkillsDisplaySkillsShow"
                  : "")
              }
              key={"Affichage du centre d'interet numéro " + index}
            >
              <div className="centreInteretHome">
                <IconesChevronFill />
                <h3>{el.inputValue}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CentreInteret;
