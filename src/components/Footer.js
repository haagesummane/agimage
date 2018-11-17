import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      // style={{ borderTop: '5px solid rgb(73, 141, 10)' }}
      <footer className="ft text-muted text-center">
        <p>
          &copy;
          {new Date().getFullYear()}
          &nbsp; Shramajeevi Agri Films | All Rights Reserved
        </p>
        {/* <div className="container-fluid">
          <p className="float-left">
            &copy;
            {new Date().getFullYear()}
            &nbsp; Shramajeevi Agri Films | All Rights Reserved
          </p>
          <p className="float-right">Lalala footer lalala</p>
        </div> */}
      </footer>
    );
  }
}
export default Footer;
