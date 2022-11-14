import React, { useContext, useState } from "react";
import {
  IconesChevronUp,
  IconesrChevronDown,
  IconesSkillshare,
} from "../../Assets/Icones/icones";
import Global from "../../Globals/Context";

function Skills(props) {
  const { displaySkillsFields } = useContext(Global);
  const [changesIconesChevron, setChangesIconesChevron] = useState(true);

  return (
    <div
      className={"skills " + (changesIconesChevron ? "" : "skillsClosed")}
      onClick={() => setChangesIconesChevron(!changesIconesChevron)}
    >
      <div className="hearderSkills">
        <div className="hearderSkillsIcones hearderSkillsIcones_iconeSkill">
          <IconesSkillshare />
        </div>
        <h1>Compétences</h1>
        <div
          className="hearderSkillsIcones hearderSkillsIcones_iconesChevrons"
          onClick={() => setChangesIconesChevron(!changesIconesChevron)}
        >
          {changesIconesChevron ? <IconesChevronUp /> : <IconesrChevronDown />}
        </div>
      </div>

      <div
        className={
          "bodySkills" + (changesIconesChevron ? " bodySkillsShow" : "")
        }
      >
        {displaySkillsFields.map((el, index) => {
          return (
            <div
              className={
                "bodySkillsDisplaySkills" +
                (changesIconesChevron ? " bodySkillsDisplaySkillsShow" : "")
              }
              key={"Affichage de compétence numéro " + index}
            >
              <h3>{el.inputValue}</h3>
              <div className="pourcentHome">
                <div
                  className="pourcentContent"
                  style={{ width: `${el.valeurPourcentage}` + "%" }}
                >
                  <div className="pourcentaffichage">
                    {el.valeurPourcentage}%
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

export default Skills;
