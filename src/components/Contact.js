import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <section style={{ borderTop: '15px solid rgba(73, 141, 10,1)' }} id="contact" className="section_">
        <main role="main">
          <section className="jumbotron">
            <div className="container  text-center">
              <div className="row">
                <div className="col-12">
                  <h1 className="jumbotron-heading">Contact</h1>
                  <br />
                  {/* <h5> You can reach us at:</h5> */}
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <p>
                    Shramajeevi, #009, Shrinilayam 3, Near Bandematha, Kommaghatta Main Road, Kengeri Satellite Town,
                    Bengaluru 560060, Karnataka, India. <br />
                    Mob: +91 9980534320.
                    <br /> Email:&nbsp;
                    <a href="mailto:team@shramajeevi.com">team@shramajeevi.com</a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </section>
    );
  }
}
export default Contact;
