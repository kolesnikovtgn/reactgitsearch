import React, { Component } from 'react';
import './Search.scss';
import MyRecord from '../MyRecord/MyRecord';
// import { bindActionCreators } from '../../../../node_modules/redux';
import { connect } from  '../../../../node_modules/react-redux';
import { getRepositoriesAction } from '../../../store/action';
// import * as pageActions from '../../../store/action';

class Search extends Component {

  // constructor(props) {
  //   super(props);
  //
  //     this.state = {
  //         repositories: []
  //     };
  // }

  componentDidMount() {
      // fetch(`https://api.github.com/search/repositories?q=cms+language:javascript`)
      //     .then(response => response.json())
      //     .then(data => { this.setState({ repositories: data.items }); console.log('this state is ', this.state); });

  }

  searchRequest = () => {
      console.log('before func', this.props);
    this.props.onGetRepositories();
      console.log('after func', this.props);
  };
    render() {
        // const { repositories } = this.state;
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
                {/*<ul>*/}
                    {/*{repositories.map(el =>*/}
                        {/*<li key={el.id}>*/}
                            {/*{el.name} {el.description} {el.myList}*/}
                        {/*</li>*/}
                    {/*)}*/}
                {/*</ul>*/}
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

// function mapDispatchToProps(dispatch) {
//     return {
//         pageActions: bindActionCreators(pageActions, dispatch)
//     }
// }

function mapDispatchToProps(dispatch) {
  return {
    onGetRepositories: () => {
      dispatch(getRepositoriesAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
