import React, { Component } from 'react';
import './Search.scss';
import { connect } from  '../../../../node_modules/react-redux';
import { getRepositoriesAction } from '../../../store/action';
import List from "../List/List";

class Search extends Component {
  constructor(props) {
    super(props);

    this.onChangeRep = this.onChangeRep.bind(this);
    this.onChangeLang = this.onChangeLang.bind(this);
    this.onChangeQuery = this.onChangeQuery.bind(this);

    this.state = {
      repositories: '',
      language : '',
      query: ''
    };
  }

  repositories = ['Type', 'repositories'];
  language = ['Language', 'javascript', 'css', 'php', 'ruby', 'c++', 'python', 'c#', 'java', 'go', 'haskel'];

  onChangeRep(e) {
    this.setState({repositories: e.target.value});
  }

  onChangeLang(e) {
    this.setState({language: e.target.value});
  }

  onChangeQuery(e) {
    this.setState({query: e.target.value});
  }

  searchRequest = (data) => {
    this.props.onGetRepositories(data);
  };

   render() {
       return (
           <div className="mainSearch">
               <div className="search container-row">
                   <select className="search__rep" value={this.state.repositories} onChange={this.onChangeRep}>
                       {this.repositories.map(item => <option key={item}>{item}</option>) }
                   </select>
                   <select className="search__lang" value={this.state.language} onChange={this.onChangeLang}>
                       {this.language.map(item => <option key={item}>{item}</option>)}
                   </select>
                   <input className="search__input" placeholder="Type here for search" type="text" value={this.state.query} onChange={this.onChangeQuery}/>
                   <div className="q">
                       <button className="search__btn" onClick={() => this.searchRequest(this.state)}><p
                           className="search__btn-text">SEARCH</p></button>
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
    onGetRepositories: (data) => {
      dispatch(getRepositoriesAction(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
