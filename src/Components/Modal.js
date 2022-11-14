import React from "react";
import CentreInteret from "./Shows/CentreInteret";
import Certifications from "./Shows/Certifications";
import Footer from "./Shows/Footer";
import FormationProfessional from "./Shows/FormationProfessional";
import Langues from "./Shows/Langues";
import ProfessionalExperiences from "./Shows/ProfessionalExperiences";
import ProfilShow from "./Shows/ProfilShow";
import Skills from "./Shows/Skills";

function Modal(props) {
  return (
    <div className="modal">
      <ProfilShow />
      <Skills />
      <ProfessionalExperiences />
      <FormationProfessional />
      <Certifications />
      <Langues />
      <CentreInteret />
      <Footer />
    </div>
  );
}

export default Modal;
