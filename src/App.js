import React, { Component } from 'react';
import 'css/App.css';
import 'css/styles.css';

import Nav from 'components/Nav';
import Footer from 'components/Footer';
// import Links from 'components/Links';
import Landing from 'components/Landing';
import Images from 'components/Images';
import Contact from 'components/Contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
  }

  render() {
    return (
      <div>
        <Nav />
        <Landing />
        {/* <Links /> */}
        <Images />
        <Contact />
        <Footer />
      </div>
    );
  }

  updateDimensions() {
    var w = window,
      d = document,
      documentElement = d.documentElement,
      body = d.getElementsByTagName('body')[0],
      width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
      height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

    this.setState({ width, height });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }
}

export default App;
