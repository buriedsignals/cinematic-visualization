const React = require('react');

class Navigation extends React.Component {

    constructor(props) {
      super(props);
      console.log('Initializing Nav.')
    }
  
    render() {
  
      return (
        <div className="navbar_wrapper" data-theme="light">
          <div className="navbar">
            <a href="/" className="navbar_logo">
                <img
                  src="../static/img/bs-logo.svg"
                />
            </a>
            <div className="navbar_links">
              <a href="/about">
                ABOUT
              </a>
              <a href="/studio">
                STUDIO
              </a>
            </div>
          </div>
        </div>
      );
    }
  }
  
  module.exports = Navigation;