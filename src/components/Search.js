import React, { Component } from 'react';
class Search extends Component {
  render() {
    return (
      <div id="searchbox">
        <div className="container-fluid">
          <div className="row">
            <div style={{ display: 'flex', flexDirection: 'row' }} className="col-12">
              <input
                autoFocus
                style={{ height: '40px', width: '100%', borderRadius: '0' }}
                className="form-control form-control-sm ml-2"
                type="text"
                id="search_input"
                placeholder={this.props.text || 'Search'}
                aria-label="Search"
                onKeyUp={e => (e.keyCode === 13 ? this.props.onSearch('search_input') : undefined)}
              />

              <button className="searchButton text-center" onClick={e => this.props.onSearch('search_input')}>
                <i className="fa fa-search" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Search;
