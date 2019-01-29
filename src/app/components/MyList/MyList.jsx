import React, { Component } from 'react';
import './MyList.scss';
import List from '../List/List';

class MyList extends Component {
    render() {
        return (
            <div className="mainMyList">
                <p className="mainMyList__text">My List</p>
                <List></List>
            </div>

        );
    }
}

export default MyList;
