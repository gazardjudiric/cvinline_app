import React, { useContext } from "react";
import Global from "../../Globals/Context";
import { DropDown, HomeDropDown } from "../../Helps/Helps";

function FormationProfessional(props) {
  const { displayProfessionalFormation } = useContext(Global);
  return (
    <div className="formationProfessional">
      <HomeDropDown
        propriete={{
          title: "Formation Professionnelles",
          blockDropDown: (
            <>
              {displayProfessionalFormation.map((el, index) => {
                return (
                  <DropDown
                    key={"Block Formation" + index}
                    propriete={{
                      logo: el.valuelogoEntreprise,
                      altFor: "Logo de l'école",
                      titleHead: el.valuePostOccuper,
                      nameStructure: el.valueNameEntreprise,
                      yearStructure: el.valueYearEntreprise,
                      lienCertificat: el.valuefichierAttestation,
                      lienStructure: el.valueLienEntreprise,
                    }}
                  />
                );
              })}
            </>
          ),
        }}
      />
    </div>
  );
}

export default FormationProfessional;
