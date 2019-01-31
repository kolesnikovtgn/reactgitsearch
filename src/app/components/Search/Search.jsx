import React, { Component } from 'react';
import './Search.scss';
import { connect } from  '../../../../node_modules/react-redux';
import { getRepositoriesAction } from '../../../store/action';
import List from "../List/List";

class Search extends Component {

  searchRequest = () => {
    this.props.onGetRepositories();
  };
    render() {
        return (
            <div className="mainSearch">
              <div className="search container-row">
                <select className="search__rep">
                  <option>Type</option>
                  <option>repositories</option>
                </select>
                <select className="search__lang">
                  <option>Language</option>
                  <option></option>
                </select>
                <input className="search__input" placeholder="Type here for search" type="text"/>
                <div className="q">
                  <button className="search__btn" onClick={this.searchRequest}><p className="search__btn-text">SEARCH</p></button>
                </div>
              </div>
                <List></List>
            </div>

        );
    }
}

function mapStateToProps(state) {
  return { userData: state.userData  }
}

function mapDispatchToProps(dispatch) {
  return {
    onGetRepositories: () => {
      dispatch(getRepositoriesAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
