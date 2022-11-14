import React, { useContext, useState } from "react";
import {
  IconesChevronUp,
  IconesGoogletranslate,
  IconesrChevronDown,
} from "../../Assets/Icones/icones";
import Global from "../../Globals/Context";

function Langues(props) {
  const { displayLanguesFields } = useContext(Global);
  const [changesIconesChevronForLangues, setChangesIconesChevronForLangues] =
    useState(true);

  return (
    <div
      className={
        "skills " + (changesIconesChevronForLangues ? "" : "skillsClosed")
      }
      onClick={() =>
        setChangesIconesChevronForLangues(!changesIconesChevronForLangues)
      }
    >
      <div className="hearderSkills">
        <div className="hearderSkillsIconesForlangues hearderSkillsIcones_iconeSkill">
          <IconesGoogletranslate />
        </div>
        <h1>Langues</h1>
        <div
          className="hearderSkillsIcones hearderSkillsIcones_iconesChevrons"
          onClick={() =>
            setChangesIconesChevronForLangues(!changesIconesChevronForLangues)
          }
        >
          {changesIconesChevronForLangues ? (
            <IconesChevronUp />
          ) : (
            <IconesrChevronDown />
          )}
        </div>
      </div>

      <div
        className={
          "bodySkills" +
          (changesIconesChevronForLangues ? " bodySkillsShow" : "")
        }
      >
        {displayLanguesFields.map((el, index) => {
          return (
            <div
              className={
                "bodySkillsDisplaySkills" +
                (changesIconesChevronForLangues
                  ? " bodySkillsDisplaySkillsShow"
                  : "")
              }
              key={"Affichage de compétence numéro " + index}
            >
              <div>
                <h3>{el.inputValue}</h3>

                <div className="displayBlockpourcentage">
                  <span>Parlé</span>
                  <div className="pourcentHome">
                    <div
                      className="pourcentContent"
                      style={{ width: `${el.valeurPourcentage1}` + "%" }}
                    >
                      <div className="pourcentaffichage">
                        {el.valeurPourcentage1}%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="displayBlockpourcentage">
                  <span>Ecrit</span>
                  <div className="pourcentHome">
                    <div
                      className="pourcentContent"
                      style={{ width: `${el.valeurPourcentage2}` + "%" }}
                    >
                      <div className="pourcentaffichage">
                        {el.valeurPourcentage2}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Langues;
