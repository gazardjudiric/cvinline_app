import { useState } from "react";
import {
  IconesChevronUp,
  IconesEmailSolid,
  IconesProfile,
  IconesrChevronDown,
  IconesTelephone,
} from "../Assets/Icones/icones";

export function DropDown(props) {
  const {
    logo,
    altFor,
    titleHead,
    nameStructure,
    yearStructure,
    descriptionFacultatif,
    lienCertificat,
    lienStructure,
    namePersonRessource,
    mailPersonRessource,
    telPersonRessource,
  } = props.propriete;

  const [oponedProfessionalExo, setOponedProfessionalExo] = useState(true);

  return (
    <div
      className={
        "professionalExperiences_InfoPart " +
        (oponedProfessionalExo ? "" : "professionalExperiences_InfoPartClosed")
      }
      onClick={() => setOponedProfessionalExo(!oponedProfessionalExo)}
    >
      <div className="professionalExperiences_InfoPart_Header">
        <div className="professionalExperiences_InfoPart_HeaderContent">
          <div className="professionalExperiences_InfoPart_HeaderLogo">
            <img src={logo} alt={altFor} />
          </div>
          <div className="professionalExperiences_InfoPart_LogoTitle">
            <h1>{titleHead}</h1>
            <p>
              <>{nameStructure}</>
              <>({yearStructure})</>
            </p>
          </div>
        </div>

        {oponedProfessionalExo ? (
          <IconesChevronUp
            className={"iconeChrevronUpProfessionalExp"}
            onClick={() => setOponedProfessionalExo(!oponedProfessionalExo)}
          />
        ) : (
          <IconesrChevronDown
            className={"iconeChrevronUpProfessionalExp"}
            onClick={() => setOponedProfessionalExo(!oponedProfessionalExo)}
          />
        )}
      </div>
      <div
        className={
          "professionalExperiences_InfoPart_body " +
          (oponedProfessionalExo
            ? "professionalExperiences_InfoPart_bodyOponed"
            : "")
        }
      >
        <div className="professionalExperiences_InfoPart_body_part1">
          <p>{descriptionFacultatif}</p>
        </div>

        <div className="professionalExperiences_InfoPart_body_part2">
          <a href={lienCertificat}>Voir le certificat</a>
          <a href={lienStructure}>Visiter l'entreprise</a>
          <div className="professionalExperiences_InfoPart_body_part2_ContactPerson">
            <IconesProfile className="iconeProfilProfessionalExp" />
            <span>{namePersonRessource}</span>
            <a href={mailPersonRessource}>
              <IconesEmailSolid className="iconeEmailProfessionalExp" />
            </a>
            <a href={telPersonRessource}>
              <IconesTelephone className="iconeTelephoneProfessionalExp" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HomeDropDown(props) {
  const { title, blockDropDown } = props.propriete;

  return (
    <div className="professionalExperiences">
      <div className="professionalExperiences_ImagePart">
        <h2>{title}</h2>
      </div>
      <div className="professionalExperiences_InfoPartHome">
        {blockDropDown}
      </div>
    </div>
  );
}
