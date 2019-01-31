import React, { Component } from 'react';
import './Line.scss';
import star from '../../../images/star.png';
import { connect } from  '../../../../node_modules/react-redux';

class Line extends Component {
    render() {
        return (
            <div className="project container-row">
                <div className="project__checkimage">
                    <div className="project__checkimage-square">
                        { this.props.data&&this.props.data.myList ? <div className="project__checkimage-image enable" onClick={() => this.props.onChangeStatus(this.props.data.id)}> </div>
                            : <div className="project__checkimage-image disable" onClick={() => this.props.onChangeStatus(this.props.data.id)}> </div> }
                    </div>
                </div>
                <div className="project__text container-column">
                    <div className="project__text-name">
                        {this.props.data&&this.props.data.name}
                    </div>
                    <div className="project__text-describe">
                        {this.props.data&&this.props.data.description}
                    </div>
                    <div className="project__text-taglist container-row">
                         <div className="project__text-taglist-tag">
                             javacript
                         </div>
                         <div className="project__text-taglist-tag">
                             cms
                         </div>
                    </div>
                </div>
                <div className="project__rating container-column">
                    <div className="project__rating-block container-row">
                        <img  className="project__rating-block-img" src={star} alt="true"/>
                        <div className="project__rating-block-stars">{this.props.data&&this.props.data.stargazers_count}</div>
                    </div>
                <div className="project__rating-language">
                    {this.props.data&&this.props.data.name}
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Line);
