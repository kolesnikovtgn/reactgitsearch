import React, { Component } from 'react';
import './Block.scss';
import star from '../../../images/star.png';

class Block extends Component {
    render() {
        return (
            <div className="prj container-column">
                <div className="prj__rating container-row">
                    <div className="prj__rating-language">LAnguage</div>
                    <div className="prj__rating-block container-row">
                        <img className="prj__rating-block-img" src={star} alt="true" />
                            <div className="prj__rating-block-stars">countStar</div>
                    </div>
                </div>
                <div className="prj__text container-column">
                    <div className="prj__text-name">
                       NameRepositories
                    </div>
                    <div className="prj__text-describe">
                       DescriptionOfProject
                    </div>
                    <div className="prj__text-taglist container-row">
                        <div className="prj__text-taglist-tag">
                        LanguageOfSearch
                    </div>
                    <div className="prj__text-taglist-tag">
                        StringOfSearch
                </div>
            </div>
    </div>
        <div className="prj__button container-column">
            <button className="prj__button-add"><p className="prj__button-add-text">ADD TO LIST</p></button>
        <button className="prj__button-delete"><p className="prj__button-delete-text"> REMOVE FROM LIST</p></button>
    </div>
    </div>

    );
    }
}

export default Block;
