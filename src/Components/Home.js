import React, { useContext, useState } from "react";
import Modal from "./Modal";
import {
  BeforeCompetence,
  CertifcationsFields,
  InteretFields,
  LanguesFields,
  ProfessionnalExperience,
  ProfessionnalFormation,
  ProfilFields,
  SkillsFields,
  SocialMediaFields,
} from "./Fields/Fields";
import Global from "../Globals/Context";

function Home(props) {
  const [stepNum, setStepNum] = useState(1);
  const { showModal, setShowModal } = useContext(Global);
  const steppers = [
    { niveau: 1, show: <ProfilFields /> },
    { niveau: 2, show: <SocialMediaFields /> },
    { niveau: 3, show: <BeforeCompetence /> },
    { niveau: 4, show: <SkillsFields /> },
    { niveau: 5, show: <ProfessionnalExperience /> },
    { niveau: 6, show: <ProfessionnalFormation /> },
    { niveau: 7, show: <CertifcationsFields /> },
    { niveau: 8, show: <LanguesFields /> },
    { niveau: 9, show: <InteretFields /> },
  ];

  function handleClickPrevious() {
    if (stepNum === 1) {
      return;
    } else {
      setStepNum(stepNum - 1);
    }
  }

  function handleClickNext() {
    if (stepNum === steppers.length) {
      return;
    } else {
      setStepNum(stepNum + 1);
    }
  }

  const filtered = steppers.filter((item) => item.niveau === stepNum);

  return (
    <div className="home">
      <h2 className="homeTitle">Formulaie de Remplissage du CV</h2>
      {filtered.map((el, index) => (
        <div key={index}>{el.show}</div>
      ))}

      <div className="pagination">
        <button className="btn btnPagination" onClick={handleClickPrevious}>
          Précédent
        </button>
        <button className="btn btnPagination" onClick={handleClickNext}>
          Suivant
        </button>
      </div>

      <button className="btn appercu" onClick={() => setShowModal(true)}>
        Appercu
      </button>

      {showModal ? (
        <button className="btn btnRetour" onClick={() => setShowModal(false)}>
          Retour
        </button>
      ) : (
        ""
      )}

      {showModal ? <Modal /> : ""}
    </div>
  );
}

export default Home;
