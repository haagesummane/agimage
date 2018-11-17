import React, { Component } from 'react';
import Search from 'components/Search';
class Home extends Component {
  constructor(props) {
    super(props);
    this.getSearchText = this.getSearchText.bind(this);
    this.serachText = '';
  }
  getSearchText(element_id) {
    var search_element = document.getElementById(element_id);
    if (search_element) {
      this.serachText = search_element.value;
    }
  }
  render() {
    const serachText = this.serachText;
    console.log(serachText);
    return (
      <section id="home" className="home">
        <div className="fp" style={{ height: '100%' }}>
          <div className="container text-center">
            <div className="row">
              <div className="col-12 text-center mzpz">
                <Search text={serachText} onSearch={this.getSearchText} />
                {/* <h2 style={{ color: 'black', background: 'rgba(255,255,255,.7)' }}>
                  <strong>Agriculture Image Store</strong>
                </h2> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Home;
