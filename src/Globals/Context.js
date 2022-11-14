import React, { createContext, useState } from "react";
import PhotoProfil from "../Assets/Images/photoProfil.png";
import Doc from "../Assets/Documents/doc1.pdf";

const Global = createContext();

export function GlobalProvider({ children }) {
  const [userInfo, setUserInfo] = useState({
    name: "GAZARD",
    prenom: "Judiric Villaria",
    ville: "Cotonou",
    job: "Dev Frontend",
    image: PhotoProfil,
    lienPortfolio: "https://www.portfolio.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolorum commodi, autem enim quod impedit facere assumenda. Porro, quos harum!",
    date: "jj/mm/aaaa",
    situationMatrimonial: "Non renseigné",
    sexe: "Non renseigné",
    nationalite: "Non renseigné",
    pays: "Non renseigné",
    ville: "Non renseigné",
    addresse: "Non renseigné",
    contact: "Non renseigné",
    num: "+29900000000",
    mail: "exemple@gmail.com",
    facebook: "Non renseigné",
    linkedin: "Non renseigné",
    insta: "Non renseigné",
    twiter: "Non renseigné",
    snap: "Non renseigné",
    lienVideo: "Non renseigné",
    lettreMotivation: "Non renseigné",
    saveContact: "Non renseigné",
  });

  const [displaySkillsFields, setDisplaySkillsFields] = useState([
    {
      title1: "Compétence",
      inputType1: "text",
      inputValue: "Compétence 1",
      title2: "Pourcentage de la Compétence",
      inputType2: "number",
      valeurPourcentage: 60,
    },
    {
      title1: "Nouvelle Compétence",
      inputType1: "text",
      inputValue: "Compétence 2",
      title2: "Pourcentage de la Compétence",
      inputType2: "number",
      valeurPourcentage: 20,
    },
    {
      title1: "Nouvelle Compétence",
      inputType1: "text",
      inputValue: "Compétence 2",
      title2: "Pourcentage de la Compétence",
      inputType2: "number",
      valeurPourcentage: 95,
    },
  ]);

  const [displayProfessionalExperience, setDisplayProfessionalExperience] =
    useState([
      {
        tileGeneral: "Expérience Professionelle",
        typeNameEntreprise: "text",
        valueNameEntreprise: "All Web Service",
        titleNameEntreprise:
          "Nom de l'entreprise dans laquelle vous avez travailler",
        typeLogoEntreprise: "file",
        valuelogoEntreprise: "logo192.png",
        titleLogoEntreprise:
          "Ajouter le logo de l'entreprise dans laquelle vous avez travailler",
        typeYearEntreprise: "text",
        valueYearEntreprise: "2020 - 2022",
        titleYearEntreprise:
          "Pendant combien de temps aviez vous travaillez dans cette entreprise",
        typePostOccuper: "text",
        valuePostOccuper: "Développeur Front end",
        titlePostOccuper: "Quel poste vous avez occuper dans cette entreprise",
        typeDescriptionTravaux: "textArea",
        valueDescriptionTravaux:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolorum commodi, autem enim quod impedit facere assumenda. Porro, quos harum!",

        titleDescriptionTravaux:
          "Décrire brièvement en quoi conscite votre travail",
        typeFichierAttestation: "file",
        valueFichierAttestation: <Doc />,
        titleFichierAttestation:
          "Ajouter le fichier pdf de l'attestation de travail",
        typeLienEntreprise: "text",
        lienEntreprise: "Non renseigné",
        titleLienEntreprise:
          "Ajouter le lien du site web de l'entreprise si l'entreprise à un site web",
        typeNomPersonneRessource: "text",
        valueNomPersonneRessource: "Mr Laurien",
        titleNomPersonneRessource:
          "Ajouter le Nom et le Prénom d'une personne à contacter pour comfirmer",
        typeMailPersonneRessource: "email",
        mailPersonneRessource: "exemple@gmail.com",
        titleMailPersonneRessource:
          "Ajouter le mail de cette personne à contacter pour comfirmer",
        typeTelephonePersonneRessource: "tel",
        valueTelephonePersonneRessource: "+29900000000",
        titleTelephonePersonneRessource:
          "Ajouter le mail de cette personne à contacter pour comfirmer",
      },
    ]);

  const [displayProfessionalFormation, setDisplayProfessionalFormation] =
    useState([
      {
        tileGeneral: "Formation Professionnelle",
        typeName: "text",
        valueNameEntreprise: "Projet Cerco",
        titleNameEntreprise: "Nom de l'école",
        typeLogoEntreprise: "file",
        valuelogoEntreprise: "logo192.png",
        titleLogoEntreprise: "Ajouter le logo de l'école",
        typeYearEntreprise: "text",
        valueYearEntreprise: "2020 - 2022",
        titleYearEntreprise: "Durer de la formation",
        typePostOccuper: "text",
        valuePostOccuper: "Développeur Front end",
        titlePostOccuper: "Nom de la formation",
        typeFichierAttestation: "file",
        valueFichierAttestation: <Doc />,
        titleFichierAttestation:
          "Ajouter le fichier pdf de l'attestation de la  formation",
        typeLienEntreprise: "text",
        valueLienEntreprise: "Non renseigné",
        titleLienEntreprise:
          "Ajouter le lien du site web de l'école si l'école à un site web",
      },
    ]);

  const [displayCertificationsFields, setDisplayCertificationsFields] =
    useState([
      {
        tileGeneral: "Certifications",
        typeNameEntreprise: "text",
        valueNameEntreprise: "All Web Service",
        titleNameEntreprise:
          "Nom de l'entreprise dans laquelle vous avez travailler",
        typeLogoEntreprise: "file",
        valuelogoEntreprise: "logo192.png",
        titleLogoEntreprise:
          "Ajouter le logo de l'entreprise dans laquelle vous avez travailler",
        typeYearEntreprise: "text",
        valueYearEntreprise: "2020 - 2022",
        titleYearEntreprise:
          "Pendant combien de temps aviez vous travaillez dans cette entreprise",
        typePostOccuper: "text",
        valuePostOccuper: "Développeur Front end",
        titlePostOccuper: "Quel poste vous avez occuper dans cette entreprise",
        typeDescriptionTravaux: "textArea",
        valueDescriptionTravaux:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolorum commodi, autem enim quod impedit facere assumenda. Porro, quos harum!",

        titleDescriptionTravaux:
          "Décrire brièvement en quoi conscite votre travail",
        typeFichierAttestation: "file",
        valueFichierAttestation: <Doc />,
        titleFichierAttestation:
          "Ajouter le fichier pdf de l'attestation de travail",
        typeLienEntreprise: "text",
        valueLienEntreprise: "Non renseigné",
        titleLienEntreprise:
          "Ajouter le lien du site web de l'entreprise si l'entreprise à un site web",
      },
    ]);

  const [displayLanguesFields, setDisplayLanguesFields] = useState([
    {
      title: "Langues",
      inputType: "text",
      inputValue: "Français",
      title1: "Pourcentage en Parlé",
      inputType1: "number",
      valeurPourcentage1: 60,
      title2: "Pourcentage en Ecrit",
      inputType2: "number",
      valeurPourcentage2: 100,
    },
  ]);

  const [displayInteretFields, setDisplayInteretFields] = useState([
    {
      title: "Centre d'intéret",
      inputType: "text",
      inputValue: "La musique",
    },
  ]);

  const verifyLink = (url) => {
    const regEx =
      /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
    return regEx.test(url);
  };

  function verifyMail(url) {
    const regExMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return regExMail.test(url);
  }

  function getMyError(name, errors) {
    const errorExist = errors.filter((el) => el.name == name);

    if (errorExist.length > 0) {
      return errorExist[0].message;
    }
    return "";
  }

  function sendValueInStatArray(
    el,
    string,
    seterofState,
    indexOfInput,
    nameOfInput,
    valueOfInput
  ) {
    if (el == string) {
      seterofState((prev) => {
        const copy = [...prev];
        copy[indexOfInput][nameOfInput] = valueOfInput;
        return copy;
      });
    }
  }

  function isEmail(
    etatLink,
    errorExistValue,
    copyErrorsTable,
    nameOfInput,
    setErrorsTable
  ) {
    if (etatLink) {
      if (errorExistValue >= 0) {
        copyErrorsTable.splice(errorExistValue, 1);
        // alert("erreur existant à été supprimer");
      }
    } else {
      const newError = { nameOfInput, message: "Incorrect lien" + nameOfInput };
      if (errorExistValue == -1) {
        copyErrorsTable.push(newError);
        // alert("erreur n'existe pas, on la creer");
      } else {
        // alert("erreur existe, donc on ne fait rien");
      }
      setErrorsTable(copyErrorsTable);
    }
  }

  const [inputErrors, setInputErrors] = useState([]);

  const handleChange = (e, index, el) => {
    const { name, value, files, type } = e.target;
    const verifyInput = [
      "lienPortfolio",
      "facebook",
      "linkedin",
      "insta",
      "twiter",
      "snap",
      "lienVideo",
      "lienEntreprise",
    ];

    if (type === "file") {
      const file = files;
      if (el == "forProfessionalExp") {
        setDisplayProfessionalExperience((prev) => {
          const copy = [...prev];
          copy[index][name] = URL.createObjectURL(file[0]);
          return copy;
        });
      } else {
        setUserInfo({ ...userInfo, [name]: URL.createObjectURL(file[0]) });
      }
    } else if (type === "text" && verifyInput.includes(name) == true) {
      const copyErrors = [...inputErrors];
      const errorExist = inputErrors.findIndex((el) => el.name == name);
      const validLink = verifyLink(value);

      if (validLink) {
        if (errorExist >= 0) {
          copyErrors.splice(errorExist, 1);
          // alert("erreur existant à été supprimer");
        }
      } else {
        const newError = { name, message: "Incorrect lien" + name };
        if (errorExist == -1) {
          copyErrors.push(newError);
          // alert("erreur n'existe pas, on la creer");
        } else {
          // alert("erreur existe, donc on ne fait rien");
        }
      }
      setInputErrors(copyErrors);
      setUserInfo({ ...userInfo, [name]: value });
    } else if (type === "email") {
      const copyErrors = [...inputErrors];
      const errorExist = inputErrors.findIndex((el) => el.name == name);
      const validLink = verifyMail(value);

      isEmail(validLink, errorExist, copyErrors, name, setInputErrors);

      sendValueInStatArray(
        el,
        "forProfessionalExp",
        setDisplayProfessionalExperience,
        index,
        name,
        value
      );

      setUserInfo({ ...userInfo, [name]: value });
    } else {
      sendValueInStatArray(
        el,
        "forSkills",
        setDisplaySkillsFields,
        index,
        name,
        value
      );
      sendValueInStatArray(
        el,
        "forProfessionalExp",
        setDisplayProfessionalExperience,
        index,
        name,
        value
      );
      setUserInfo({ ...userInfo, [name]: value });
    }
  };

  function handleClick(e) {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }

  function addSkill(tableau) {
    if (tableau === displaySkillsFields) {
      const copy = [...tableau];
      copy.push({
        title1: "Nouvelle Compétence",
        inputType1: "text",
        title2: "Pourcentage de la Compétence",
        inputType2: "number",
        valeurPourcentage: 0,
      });
      setDisplaySkillsFields(copy);
    } else if (tableau === displayProfessionalExperience) {
      const copy = [...tableau];
      copy.push({
        tileGeneral: "Autre Expérience Professionelle",
        typeNameEntreprise: "text",
        valueNameEntreprise: "All Web Service",
        titleNameEntreprise:
          "Nom de l'entreprise dans laquelle vous avez travailler",
        typeLogoEntreprise: "file",
        valuelogoEntreprise: "logo192.png",
        titleLogoEntreprise:
          "Ajouter le logo de l'entreprise dans laquelle vous avez travailler",
        typeYearEntreprise: "text",
        valueYearEntreprise: "2020 - 2022",
        titleYearEntreprise:
          "Pendant combien de temps aviez vous travaillez dans cette entreprise",
        typePostOccuper: "text",
        valuePostOccuper: "Développeur Front end",
        titlePostOccuper: "Quel poste vous avez occuper dans cette entreprise",
        typeDescriptionTravaux: "textArea",
        valueDescriptionTravaux:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolorum commodi, autem enim quod impedit facere assumenda. Porro, quos harum!",

        titleDescriptionTravaux:
          "Décrire brièvement en quoi conscite votre travail",
        typeFichierAttestation: "file",
        valueFichierAttestation: <Doc />,
        titleFichierAttestation:
          "Ajouter le fichier pdf de l'attestation de travail",
        typeLienEntreprise: "text",
        valueLienEntreprise: "Non renseigné",
        titleLienEntreprise:
          "Ajouter le lien du site web de l'entreprise si l'entreprise à un site web",
        typeNomPersonneRessource: "text",
        valueNomPersonneRessource: "Mr Laurien",
        titleNomPersonneRessource:
          "Ajouter le Nom et le Prénom d'une personne à contacter pour comfirmer",
        typeMailPersonneRessource: "email",
        valueMailPersonneRessource: "exemple@gmail.com",
        titleMailPersonneRessource:
          "Ajouter le mail de cette personne à contacter pour comfirmer",
        typeTelephonePersonneRessource: "tel",
        valueTelephonePersonneRessource: "+29900000000",
        titleTelephonePersonneRessource:
          "Ajouter le mail de cette personne à contacter pour comfirmer",
      });

      setDisplayProfessionalExperience(copy);
    } else if (tableau === displayProfessionalFormation) {
      const copy = [...tableau];
      copy.push({
        tileGeneral: "Autre Formation Professionnelle",
        typeName: "text",
        valueNameEntreprise: "Projet Cerco",
        titleNameEntreprise: "Nom de l'école",
        typeLogoEntreprise: "file",
        valuelogoEntreprise: "logo192.png",
        titleLogoEntreprise: "Ajouter le logo de l'école",
        typeYearEntreprise: "text",
        valueYearEntreprise: "2020 - 2022",
        titleYearEntreprise: "Durer de la formation",
        typePostOccuper: "text",
        valuePostOccuper: "Développeur Front end",
        titlePostOccuper: "Nom de la formation",
        typeFichierAttestation: "file",
        valueFichierAttestation: <Doc />,
        titleFichierAttestation:
          "Ajouter le fichier pdf de l'attestation de la  formation",
        typeLienEntreprise: "text",
        valueLienEntreprise: "Non renseigné",
        titleLienEntreprise:
          "Ajouter le lien du site web de l'école si l'école à un site web",
      });
      setDisplayProfessionalFormation(copy);
    } else if (tableau === displayLanguesFields) {
      const copy = [...tableau];
      copy.push({
        title: "Autre Langues",
        inputType: "text",
        inputValue: "Mandarin",
        title1: "Pourcentage en Parlé",
        inputType1: "number",
        valeurPourcentage1: 60,
        title2: "Pourcentage en Ecrit",
        inputType2: "number",
        valeurPourcentage2: 100,
      });
      setDisplayLanguesFields(copy);
    } else if (tableau === displayInteretFields) {
      const copy = [...tableau];
      copy.push({
        title: "Autre Centre d'intéret",
        inputType: "text",
        inputValue: "J'aime ....",
      });
      setDisplayInteretFields(copy);
    } else if (tableau === displayCertificationsFields) {
      const copy = [...tableau];
      copy.push({
        tileGeneral: "Autre Certifications",
        typeNameEntreprise: "text",
        valueNameEntreprise: "All Web Service",
        titleNameEntreprise:
          "Nom de l'entreprise dans laquelle vous avez travailler",
        typeLogoEntreprise: "file",
        valuelogoEntreprise: "logo192.png",
        titleLogoEntreprise:
          "Ajouter le logo de l'entreprise dans laquelle vous avez travailler",
        typeYearEntreprise: "text",
        valueYearEntreprise: "2020 - 2022",
        titleYearEntreprise:
          "Pendant combien de temps aviez vous travaillez dans cette entreprise",
        typePostOccuper: "text",
        valuePostOccuper: "Développeur Front end",
        titlePostOccuper: "Quel poste vous avez occuper dans cette entreprise",
        typeDescriptionTravaux: "textArea",
        valueDescriptionTravaux:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolorum commodi, autem enim quod impedit facere assumenda. Porro, quos harum!",

        titleDescriptionTravaux:
          "Décrire brièvement en quoi conscite votre travail",
        typeFichierAttestation: "file",
        valueFichierAttestation: <Doc />,
        titleFichierAttestation:
          "Ajouter le fichier pdf de l'attestation de travail",
        typeLienEntreprise: "text",
        valueLienEntreprise: "Non renseigné",
        titleLienEntreprise:
          "Ajouter le lien du site web de l'entreprise si l'entreprise à un site web",
      });
      setDisplayCertificationsFields(copy);
    }
  }

  function deleteSkill(tableau) {
    const copy = [...tableau];
    if (copy.length > 1) {
      copy.pop();
      if (tableau === displaySkillsFields) {
        setDisplaySkillsFields(copy);
      } else if (tableau === displayProfessionalExperience) {
        setDisplayProfessionalExperience(copy);
      } else if (tableau === displayProfessionalFormation) {
        setDisplayProfessionalFormation(copy);
      } else if (tableau === displayLanguesFields) {
        setDisplayLanguesFields(copy);
      } else if (tableau === displayInteretFields) {
        setDisplayInteretFields(copy);
      } else if (tableau === displayCertificationsFields) {
        setDisplayCertificationsFields(copy);
      }
    }
  }

  const [showModal, setShowModal] = useState(false);

  const [etatModalInfoPerso, setEtatModalInfoPerso] = useState(false);

  return (
    <Global.Provider
      value={{
        userInfo,
        setUserInfo,
        showModal,
        setShowModal,
        etatModalInfoPerso,
        setEtatModalInfoPerso,
        handleChange,
        handleClick,
        displaySkillsFields,
        setDisplaySkillsFields,
        displayProfessionalExperience,
        setDisplayProfessionalExperience,
        displayProfessionalFormation,
        setDisplayProfessionalFormation,
        displayCertificationsFields,
        setDisplayCertificationsFields,
        displayLanguesFields,
        setDisplayLanguesFields,
        displayInteretFields,
        setDisplayInteretFields,
        inputErrors,
        getMyError,
        addSkill,
        deleteSkill,
      }}
    >
      {children}
    </Global.Provider>
  );
}

export default Global;
