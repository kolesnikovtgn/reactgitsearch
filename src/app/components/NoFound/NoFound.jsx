import React, { Component } from 'react';
import './NoFound.scss';

class NoFound extends Component {
    render() {
        return (
            <div className="errsearch">
                <div className="errsearch__text container-column">
                    <div className="errsearch__text-article">
                        NO RESULTS FOUND
                    </div>
                    <div className="errsearch__text-describe">
                        select other parameters and try again
                    </div>
                </div>
            </div>

        );
    }
}

export default NoFound;
