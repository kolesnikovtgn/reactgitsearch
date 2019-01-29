import React, { Component } from 'react';
import './MyRecord.scss';
import Block from "../Block/Block";

class MyRecord extends Component {
    render() {
        return (
            <div className="mainMyRecord">
                <div className="mainMyRecord__menu">
                <span className="mainMyRecord__menu-block">
                    <i className="fas fa-th-large fa-3x"></i>
                </span>
                    <span className="mainMyRecord__menu-list">
                    <i className="fas fa-bars fa-3x"></i>
                </span>
                </div>
                <div className="mainMyRecord-projects">
                    <Block></Block>
                    <Block></Block>
                </div>
                <div className="mainMyRecord-projects">

                </div>
            </div>

        );
    }
}

export default MyRecord;

