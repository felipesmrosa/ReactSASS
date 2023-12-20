import "../styles/components/social.sass";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

const social = [
  {
    id: 1,
    name: "github",
    icon: <FaGithub />,
    link: "https://github.com/felipesmrosa",
  },
  {
    id: 2,
    name: "instagram",
    icon: <FaInstagram />,
    link: "https://instagram.com/felipe_mrosa/",
  },
  {
    id: 3,
    name: "youtube",
    icon: <FaYoutube />,
    link: "https://www.youtube.com/channel/UC0_bvf1s9RrbyUgdox2U2Hw",
  },
];

console.log(social, "redes sociais");

export function Social() {
  return (
    <section id="social-networks">
      {social.map((rede) => (
        <a
          target="_blank"
          href={rede.link}
          className="social-btn"
          id={rede.name}
          key={rede.id}
        >
          {rede.icon}
        </a>
      ))}
    </section>
  );
}
