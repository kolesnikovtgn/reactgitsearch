import React, { Component } from 'react';
import './List.scss';
import Block from '../Block/Block';
import Line from '../Line/Line'
import { connect } from  '../../../../node_modules/react-redux';
// import CHANGE_MYLIST_STATUS from '../../../store/action';

class List extends Component {
    constructor(props) {
        super(props);
        this.handleBlockClick = this.handleBlockClick.bind(this);
        this.handleLineClick = this.handleLineClick.bind(this);
        this.changeMyListStatus = this.changeMyListStatus.bind(this);
        this.state = {isBlockType: true};
    }

    handleBlockClick() {
        this.setState({isBlockType: true});
    }

    handleLineClick() {
        this.setState({isBlockType: false});
    }

    changeMyListStatus = () => {
        // this.props.onChangeStatus(id);
        console.log('this id qweqweqweqweqweqweqweqweqweqweqweqw');
    };

    render() {
        const isTypeProjects = this.state.isBlockType;

        return (
            <div className="mainList">
              <div className="mainList__menu">
                <span className={"mainMyRecord__menu-block" + (isTypeProjects ? ' activeIcon': ' not-activeIcon')} onClick={this.handleBlockClick}>
                    <i className="fas fa-th-large fa-3x"></i>
                </span>
                <span className={"mainMyRecord__menu-list" + (isTypeProjects ? ' not-activeIcon': ' activeIcon')} onClick={this.handleLineClick}>
                    <i className="fas fa-bars fa-3x"></i>
                </span>
              </div>
            <div className="mainList-projects">
                { isTypeProjects ? this.props.userData&&this.props.userData.map((el) => <Block key={el.id} data={el} changeMyListStatus={this.changeMyListStatus} ></Block>)
                    : this.props.userData&&this.props.userData.map((el) => <Line key={el.id} data={el}></Line>) }
            </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return { userData: state.userData.items  }
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeStatus: (id) => {
            dispatch({type: 'CHANGE_MYLIST_STATUS', payload: id})
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(List);

