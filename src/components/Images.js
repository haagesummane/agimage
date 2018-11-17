import React, { Component } from 'react';
class Footer extends Component {
  render() {
    return (
      <section id="clients" className="section_">
        <div className="album py-5 bg-light">
          <br />
          <br />
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                {/* <h1>Our Clients</h1> */}
                <br />
              </div>
            </div>
            <div className="row">
              {/* {clients.map((e, i) => (
                <div key={i} className="py-2 col-4 col-md-2 col-lg-2 text-center">
                  <div style={{ borderRadius: '50' }} className="card mb-4 box-shadow">
                    <a href={e[3]} target="_blank" rel="noopener noreferrer">
                      <img className="card-img-top" src={e[0]} alt={e[1]} />
                      {/* <div className="card-body">
                        <p className="card-text text-center">{e[1]}</p>
                      </div> /}
                    </a>
                  </div>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Footer;
