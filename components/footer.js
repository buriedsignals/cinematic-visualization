const React = require('react');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {

    constructor(props) {
      super(props);
      console.log('Initializing Footer.')
    }
  
    render() {
  
      return (
        <div className="footer-wrapper">
          <div className="footer-socials">
            <a href="https://discord.gg/JSZuVpbPDJ" target="_blank" rel="noreferrer" className="footer-social"><FontAwesomeIcon icon={faDiscord} /></a>
            <a href="https://twitter.com/buriedsignals" target="_blank" rel="noreferrer" className="footer-social"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://instagram.com/buriedsignals" target="_blank" rel="noreferrer" className="footer-social"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="mailto:tom@buriedsignals.com" target="_blank" rel="noreferrer" className="footer-social"><FontAwesomeIcon icon={faEnvelope} /></a>
          </div>
          <div className="footer-logo-wrapper">
            <img src="./static/img/bs_footer.svg" />
          </div>
          <div className="footer-copyright">
          © 2021 Buried Signals. See <a href="/privacy">Privacy and Terms Notice</a>.
          </div>
        </div>
      );
    }
  }
  
  module.exports = Footer;