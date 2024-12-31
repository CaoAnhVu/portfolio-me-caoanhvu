import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiFacebook, FiMail, FiPhone } from "react-icons/fi";

const socials = [
  { icon: <FiGithub />, path: "https://github.com/CaoAnhVu/" },
  { icon: <FiMail />, path: "mailto:anhvuktnh@gmail.com" },
  { icon: <FiLinkedin />, path: "https://www.linkedin.com/in/caoanhvuit129/" },
  { icon: <FiTwitter />, path: "https://x.com/CaoAnhVuIT129" },
  { icon: <FiFacebook />, path: "https://www.facebook.com/C.ahzuu" },
  { icon: <FiPhone />, path: "tel:+84333653263" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
