import React, { Component } from 'react';
import logo from './images/logo.png';
import logo_search from './images/logo_search.png';
import './App.scss';
import Search from './app/components/Search/Search';
import MyList from './app/components/MyList/MyList';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";

class App extends Component {
  render() {
    return (
        <Router>
        <div className="main">
          <div className="header container-row">
            <div className="header__logo container-row">
               <div className="header__logo-image">
                 <img className="header__logo-image-cat" src={logo} alt={true}/>
                 <img className="header__logo-image-search" src={logo_search} alt={true}/>
               </div>
               <div className="header__logo-text container-column">
                 <div className="header__logo-text-top">GitHub</div>
                 <div className="header__logo-text-down">search</div>
               </div>
            </div>
            <div className="header__nav container-row">
                <div class="header__nav-search"><NavLink to="/search" className='navlink' activeClassName="active">Search</NavLink></div>
                <div class="header__nav-mylist"><NavLink to="/mylist" className='navlink' activeClassName="active">My List</NavLink></div>
            </div>
          </div>
            <Switch>
              <Route exact path="/" component={ Search } />
              <Route exact path="/search" component={ Search } />
              <Route path="/mylist" component={ MyList } />
            </Switch>
          <div class=" footer">
            <div class=" footer__text">copyright @lodossteam 2018</div>
          </div>
        </div>
        </Router>
    );
  }
}

export default App;
