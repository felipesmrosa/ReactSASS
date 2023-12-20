import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";
import { InformationContainer } from "./InformationContainer";
import { Social } from "./Social";

export function Sidebar() {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Felipe" />
      <p className="title">Desenvolvedor</p>
      <Social />
      <InformationContainer />
      <a className="btn" href="">
        Download Curriculo
      </a>
    </aside>
  );
}
