import React, { useContext } from "react";
import Global from "../../Globals/Context";
import { DropDown, HomeDropDown } from "../../Helps/Helps";

function ProfessionalExperiences(props) {
  const { displayProfessionalExperience } = useContext(Global);
  return (
    <div>
      <HomeDropDown
        propriete={{
          title: "Expériences Professionnelles",
          blockDropDown: (
            <>
              {displayProfessionalExperience.map((el, index) => {
                return (
                  <DropDown
                    key={"Block Expérience" + index}
                    propriete={{
                      logo: el.valuelogoEntreprise,
                      altFor: "Logo de l'entreprise",
                      titleHead: el.valuePostOccuper,
                      nameStructure: el.valueNameEntreprise,
                      yearStructure: el.valueYearEntreprise,
                      descriptionFacultatif: el.valueDescriptionTravaux,
                      lienCertificat: el.valuefichierAttestation,
                      lienStructure: el.valueLienEntreprise,
                      namePersonRessource: el.valueNomPersonneRessource,
                      mailPersonRessource: el.valueMailPersonneRessource,
                      telPersonRessource: el.valueTelephonePersonneRessource,
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

export default ProfessionalExperiences;
