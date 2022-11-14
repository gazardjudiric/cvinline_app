import React from "react";
import { IconesMeta } from "../../Assets/Icones/icones";

function Footer(props) {
  return (
    <div className="footer">
      <div>
        <IconesMeta className="iconesMeta" />
        <h2>Meta</h2>
      </div>
      <div>
        <p>Dernière Mise à jour</p> <p>Jeudi 11 Novembre 2022</p>
      </div>
    </div>
  );
}

export default Footer;
