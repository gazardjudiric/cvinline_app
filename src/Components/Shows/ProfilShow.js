import React, { useContext, useState } from "react";
import {
  IconesEmailSolid,
  IconesFacebook,
  IconesInstagramLogoFill,
  IconesLinkedinWithCircle,
  IconesPdf2,
  IconesProfile,
  IconesSaveFill,
  IconesSiteWeb,
  IconesSnapchat,
  IconesTelephone,
  IconesTwitterWithCircle,
  IconesVideo,
} from "../../Assets/Icones/icones";
import Global from "../../Globals/Context";
import ModalInfoPerso from "./ModalInfoPerso";

function ProfilShow(props) {
  const { userInfo, etatModalInfoPerso, setEtatModalInfoPerso } =
    useContext(Global);

  const iconesSocialMedia = [
    { lien: "num", icones: <IconesTelephone /> },
    { lien: "mail", icones: <IconesEmailSolid /> },
    { lien: "facebook", icones: <IconesFacebook /> },
    { lien: "linkedin", icones: <IconesLinkedinWithCircle /> },
    { lien: "insta", icones: <IconesInstagramLogoFill /> },
    { lien: "twiter", icones: <IconesTwitterWithCircle /> },
    { lien: "snap", icones: <IconesSnapchat /> },
  ];

  const beforeCompetenceDisplay = [
    {
      icones: <IconesVideo />,
      title: "Ma présentation",
      lien: "lienVideo",
      identifiation: 1,
    },
    {
      icones: <IconesPdf2 />,
      title: "Ma lettre de motivation",
      lien: "lettreMotivation",
      identifiation: 2,
    },
    {
      icones: <IconesSaveFill />,
      title: "Enrégistrer mon contact",
      lien: "saveContact",
      identifiation: 3,
    },
  ];

  function dispacthClassName(classe) {
    if (classe === 1) {
      return "beforeSkillsContentLienVideo";
    } else if (classe === 2) {
      return "beforeSkillsContentLettreMotivation";
    } else {
      return "beforeSkillsContentSaveContact";
    }
  }

  return (
    <div className="profilsShow">
      <div>
        <div className="profilsShow_ImgContainer">
          <div>
            <img src={userInfo["image"]} alt="Photo de Profil" />
          </div>
        </div>
        <div className="profilsShow_Information_home">
          <div className="profilsShow_Information_content">
            <div>
              <h1>{userInfo["name"]}</h1>
              <h1>{userInfo["prenom"]}</h1>
            </div>
            <h2>{userInfo["job"]}</h2>
            <p>{userInfo["description"]}</p>
            <div className="profilsShow_Information_content_AfterDescription">
              <div>
                <IconesSiteWeb />
                <a href={userInfo["lienPortfolio"]}>Mon portfolio</a>
              </div>
              <div
                className="infoPerso"
                onClick={() => setEtatModalInfoPerso(true)}
              >
                <IconesProfile />
                <span>information Personnelles</span>
              </div>
              {etatModalInfoPerso ? <ModalInfoPerso /> : ""}
            </div>
          </div>
        </div>
      </div>

      <div className="socialMedia">
        {iconesSocialMedia.map((el, index) => {
          return (
            <div
              className="socialMediaContent"
              key={"L'index de l'icones est " + index}
            >
              <a
                href={userInfo[el.lien]}
                key={"icones numéro " + index}
                className="socialMediaIcones"
              >
                {el.icones}
              </a>
            </div>
          );
        })}
      </div>
      <div className="beforeSkills">
        {beforeCompetenceDisplay.map((el, index) => {
          return (
            <a
              href={userInfo[el.lien]}
              key={"Before skills button numéro" + index}
              className={
                "beforeSkillsContent " + dispacthClassName(el.identifiation)
              }
            >
              {el.icones}
              {el.title}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default ProfilShow;
