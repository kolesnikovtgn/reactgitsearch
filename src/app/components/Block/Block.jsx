import React, { Component } from 'react';
import './Block.scss';
import star from '../../../images/star.png';
import { connect } from  '../../../../node_modules/react-redux';

class Block extends Component {

    render() {
      //  const {name, description, stargazers_count} = this.state;
      // const {changeMyListStatus} = this.props;
      //     const {id} = this.props.data;

        return (
            <div className="prj container-column">
                <div className="prj__rating container-row">
                    <div className="prj__rating-language">{this.props.data&&this.props.data.name}</div>
                    <div className="prj__rating-block container-row">
                        <img className="prj__rating-block-img" src={star} alt="true" />
                            <div className="prj__rating-block-stars">{this.props.data&&this.props.data.stargazers_count}</div>
                    </div>
                </div>
                <div className="prj__text container-column">
                    <div className="prj__text-name">
                        {this.props.data&&this.props.data.name}
                    </div>
                    <div className="prj__text-describe">
                        {this.props.data&&this.props.data.description}
                    </div>
                    <div className="prj__text-taglist container-row">
                        <div className="prj__text-taglist-tag">
                        Language
                    </div>
                    <div className="prj__text-taglist-tag">
                        cms
                </div>
            </div>
    </div>
        <div className="prj__button container-column">
            {this.props.data&&this.props.data.myList ? <button className="prj__button-delete" onClick={() => this.props.onChangeStatus(this.props.data.id)}><p className="prj__button-delete-text"> REMOVE FROM LIST</p></button>
                : <button className="prj__button-add" onClick={() => this.props.onChangeStatus(this.props.data.id)}><p className="prj__button-add-text">ADD TO LIST</p></button> }
    </div>
    </div>

    );
    }
}

function mapStateToProps(state) {
  return { userData: state.userData  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeStatus: (id) => {
      dispatch({type: 'CHANGE_MYLIST_STATUS', payload: id})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Block);

