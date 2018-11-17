import React, { Component } from 'react';

import 'css/Nav.css';
import logo from 'img/logo.png';
var navimg = false;
class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = { toggle: false };
    this.toggle = this.toggle.bind(this);
    this.toggle_flag = false;
  }
  toggle() {
    this.toggle_flag = !this.toggle_flag;
    document.getElementById('navbarai').style.display = this.toggle_flag ? 'block' : 'none';
  }

  render() {
    return (
      <header>
        <nav className="navbar navbar-expand navbar-light bg-light fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand text-dark" href="/">
              <h3 className="mzpz">
                {navimg ? <img src={logo} style={{ height: '40px' }} alt="AgImage" /> : <span />}
                AgImage
              </h3>
            </a>
            {/* <span style={{ fontSize: '0.4em' }} className="mzpz text-muted">
              &nbsp;Agriculture Image Store
            </span> */}
            <button className="navbar-toggler" type="button" onClick={this.toggle} aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse collapse_sh navbar-collapse justify-content" id="navbarai">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  {/* <a onClick={this.toggle} className="nav-link text-dark " href="#search"> */}
                  <input type="textbox" /> <button className="btn btn-dark">Search</button>
                  {/* </a> */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
export default Nav;
