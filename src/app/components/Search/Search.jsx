import React, { Component } from 'react';
import './Search.scss';
import MyRecord from '../MyRecord/MyRecord';
import { connect } from  'F:\\lodoss\\reactgitsearch\\node_modules\\react-redux';
import { getRepositoriesAction } from '../../../store/action';

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
              {this.props.name}
              {this.props.description}
                <MyRecord></MyRecord>
            </div>

        );
    }
}

function mapStateToProps(state) {
  return {
    id: state.id,
    name: state.name,
    description: state.description,
    stargazers_count: state.stargazers_count,
    myList: state.myList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onGetRepositories: () => {
      dispatch(getRepositoriesAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
