import React, { useContext } from "react";
import Global from "../../Globals/Context";
import { HomeDropDown } from "../../Helps/Helps";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Certifications(props) {
  const { displayCertificationsFields } = useContext(Global);
  return (
    <div>
      <HomeDropDown
        propriete={{
          title: "Certifcations",
          blockDropDown: (
            <Carousel>
              {displayCertificationsFields.map((el, index) => {
                return (
                  <div className="professionalExperiences_InfoPart certifications">
                    <div className="professionalExperiences_InfoPart_Header">
                      <div className="professionalExperiences_InfoPart_HeaderContent">
                        <div className="professionalExperiences_InfoPart_HeaderLogo">
                          <img
                            src={el.valuelogoEntreprise}
                            alt={"Certifications numéro" + index}
                          />
                        </div>
                        <div className="professionalExperiences_InfoPart_LogoTitle">
                          <h1>{el.valuePostOccuper}</h1>
                          <p>
                            <>{el.valueNameEntreprise}</>
                            <>({el.valueYearEntreprise})</>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="professionalExperiences_InfoPart_body certificationsBody">
                      <div className="professionalExperiences_InfoPart_body_part1">
                        <p>{el.valueDescriptionTravaux}</p>
                      </div>

                      <div className="professionalExperiences_InfoPart_body_part2">
                        <a href={el.valueFichierAttestation}>
                          Voir la certification
                        </a>
                        <a href={el.valueLienEntreprise}>
                          Visiter l'institution
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          ),
        }}
      />
    </div>
  );
}

export default Certifications;
