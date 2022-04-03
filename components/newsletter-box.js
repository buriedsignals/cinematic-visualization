const React = require('react');

class NewsletterBox extends React.Component {

    constructor(props) {
      super(props);
      console.log('Initializing Newsletter.')
    }
  
    render() {
  
      return (
        <div className="newsletter-box">
          <div className="newsletter-logo-wrapper">
            <img src="./static/img/bs.svg"></img>
          </div>
          <h2>A selection of outstanding visual projects and under-reported news.</h2>
          <a href="https://buriedsignals.substack.com/" target="_blank" rel="noreferrer" className="email-input-box"><span>SIGN UP</span></a>
        </div>
      );
    }
  }
  
  module.exports = NewsletterBox;