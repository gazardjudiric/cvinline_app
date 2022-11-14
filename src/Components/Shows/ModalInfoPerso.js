import React, { useContext } from "react";
import {
  IconesChevronFill,
  IconesClose,
  IonesChevronCircle,
} from "../../Assets/Icones/icones";
import Global from "../../Globals/Context";

function ModalInfoPerso(props) {
  const { etatModalInfoPerso, setEtatModalInfoPerso, userInfo } =
    useContext(Global);

  const infoPerso = [
    { title: "Date de Naissance", type: "date" },
    {
      title: "Situation Matrimonial",
      type: "situationMatrimonial",
    },
    { title: "Sexe", type: "sexe" },
    { title: "Nationalité", type: "nationalite" },
    { title: "Pays de Résidence", type: "pays" },
    { title: "Ville de Résidence", type: "ville" },
    { title: "Addresse Complète", type: "addresse" },
    { title: "Personne à contacter", type: "contact" },
  ];
  return (
    <div
      className={
        etatModalInfoPerso
          ? "modalInfoPerso modalInfoPersoAfficher"
          : "modalInfoPerso"
      }
    >
      <div className="modalInfoPerso_title">
        <h2>Informations Personnelles</h2>
        <IconesClose
          className="modalInfoPerso_title_icons"
          onClick={() => setEtatModalInfoPerso(false)}
        />
      </div>
      <div className="modalInfoPerso_home">
        {infoPerso.map((el, index) => (
          <div key={index} className="modalInfoPerso_home_content">
            <div className="modalInfoPerso_home_content_label">
              <IconesChevronFill /> <h2>{el.title}</h2>
            </div>
            <div className="modalInfoPerso_home_content_text">
              <IonesChevronCircle />
              <span>{userInfo[el.type]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ModalInfoPerso;
