import React, { Component } from 'react';
import './List.scss';
import Line from '../Line/Line'

class List extends Component {
    render() {
        return (
            <div className="mainList">
              <div className="mainList__menu">
                <span className="mainList__menu-block">
                    <i className="fas fa-th-large fa-3x"></i>
                </span>
                <span className="mainList__menu-list">
                    <i className="fas fa-bars fa-3x"></i>
                </span>
              </div>
            <div className="mainList-projects">
                <Line></Line>
            </div>
            <div className="mainList-projects">

            </div>
            </div>

        );
    }
}

export default List;

