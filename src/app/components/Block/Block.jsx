import React, { Component } from 'react';
import './Block.scss';
import star from '../../../images/star.png';

class Block extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {data: this.props.data};
    // }
    render() {
      //  const {name, description, stargazers_count} = this.state;

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
            {this.props.data&&this.props.data.myList ? <button className="prj__button-delete"><p className="prj__button-delete-text"> REMOVE FROM LIST</p></button>
                : <button className="prj__button-add"><p className="prj__button-add-text">ADD TO LIST</p></button> }
    </div>
    </div>

    );
    }
}

export default Block;
