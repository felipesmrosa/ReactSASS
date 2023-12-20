import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import "../styles/components/informationcontainer.sass";

export function InformationContainer() {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(47)9 9142-4212</p>
        </div>
      </div>

      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>felipe.rosa@gruppe.com.br</p>
        </div>
      </div>

      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Moradia</h3>
          <p>Itajaí - SC</p>
        </div>
      </div>
    </section>
  );
}
