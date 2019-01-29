import React, { Component } from 'react';
import './MyRecord.scss';
import Block from '../Block/Block';
import Line from '../Line/Line'

class MyRecord extends Component {

    constructor(props) {
        super(props);
        this.handleBlockClick = this.handleBlockClick.bind(this);
        this.handleLineClick = this.handleLineClick.bind(this);
        this.state = {isBlockType: true};
    }

    handleBlockClick() {
        this.setState({isBlockType: true});
    }

    handleLineClick() {
        this.setState({isBlockType: false});
    }

    render() {
        const isTypeProjects = this.state.isBlockType;

        let renderType = null;

        if (isTypeProjects) {
            renderType = <Block></Block>
        } else {
            renderType = <Line></Line>
        }

        return (
            <div className="mainMyRecord">
                <div className="mainMyRecord__menu">
                <span className={"mainMyRecord__menu-block" + (isTypeProjects ? ' activeIcon': ' not-activeIcon')} onClick={this.handleBlockClick}>
                    <i className="fas fa-th-large fa-3x"></i>
                </span>
                    <span className={"mainMyRecord__menu-list" + (isTypeProjects ? ' not-activeIcon': ' activeIcon')} onClick={this.handleLineClick}>
                    <i className="fas fa-bars fa-3x"></i>
                </span>
                </div>
                <div className="mainMyRecord-projects">
                    {renderType}
                </div>
            </div>

        );
    }
}

export default MyRecord;

