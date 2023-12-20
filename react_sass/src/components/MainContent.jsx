import "../styles/components/maincontent.sass";
import { AboutContainer } from "./AboutContainer";
import { ProjetosContainer } from "./ProjetosContainer";
import { TecnologiaContainer } from "./TecnologiasContainer";

export function MainContent() {
  return (
    <main id="mainContent">
      <AboutContainer />
      <TecnologiaContainer />
      <ProjetosContainer />
    </main>
  );
}
