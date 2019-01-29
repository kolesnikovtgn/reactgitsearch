import React, { Component } from 'react';
import './Line.scss';
import star from '../../../images/star.png';

class Line extends Component {
    render() {
        return (
            <div className="project container-row">
                <div className="project__checkimage">
                    <div className="project__checkimage-square">
                        <div className="project__checkimage-image enable"> </div>
                    <div className="project__checkimage-image disable"> </div>
                    </div>
                </div>
                <div className="project__text container-column">
                    <div className="project__text-name">
                        NameRepositories
                    </div>
                    <div className="project__text-describe">
                        DescribeOfRepositories
                    </div>
                    <div className="project__text-taglist container-row">
                         <div className="project__text-taglist-tag">
                             LangInSearch
                         </div>
                         <div className="project__text-taglist-tag">
                             TextInSearch
                         </div>
                    </div>
                </div>
                <div className="project__rating container-column">
                    <div className="project__rating-block container-row">
                        <img  className="project__rating-block-img" src={star} alt="true"/>
                        <div className="project__rating-block-stars">CoutnStars</div>
                    </div>
                <div className="project__rating-language">
                    LAnguageInProject
                </div>
                </div>
            </div>
    );
    }
}

export default Line;
