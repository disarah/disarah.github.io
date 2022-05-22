import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faLinkedin,
    faTwitter,
    faSoundcloud,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

/*import FaTwitter from "../../static/images/thumb/icons/twitter.svg"
import FaSoundcloud from "../../static/images/thumb/icons/soundcloud.svg"
import FaEmail from "../../static/images/thumb/icons/email.svg"
import FaYoutube from "../../static/images/thumb/icons/youtube.svg";
import FaLinkedin from "../../static/images/thumb/icons/linkedin.svg";
import FaInsta from "../../static/images/thumb/icons/insta.svg";
*/

export default function SocialFollow() {
  return (
    <div className="social-container">
      <a href="https://www.youtube.com/channel/UCQQPDaTdF1GQLdLeIH1Hs9A/featured"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/sarahdi/" className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://twitter.com/difriendlygrape" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/difriendlygrape/?hl=en" className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://soundcloud.com/difriendlygrape" className="soundcloud social">
        <FontAwesomeIcon icon={faSoundcloud} size="2x" />
      </a>
    </div>
  );
}