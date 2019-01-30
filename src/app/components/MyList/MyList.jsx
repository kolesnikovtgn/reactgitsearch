import React, { Component } from 'react';
import './MyList.scss';
import MyRecord from "../MyRecord/MyRecord";

class MyList extends Component {
    render() {
        return (
            <div className="mainMyList">
                <p className="mainMyList__text">My List</p>
                <MyRecord></MyRecord>
            </div>

        );
    }
}

export default MyList;
