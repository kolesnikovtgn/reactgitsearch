import React, { Component } from 'react';
import './Search.scss';
import MyRecord from '../MyRecord/MyRecord';

class Search extends Component {
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
                  <button className="search__btn"><p className="search__btn-text">SEARCH</p></button>
                </div>
              </div>
                <MyRecord></MyRecord>
                {/*<app-list *ngIf="!errorSearch"></app-list>*/}
                    {/*<app-nofound *ngIf="errorSearch"></app-nofound>*/}
            </div>

        );
    }
}

export default Search;
