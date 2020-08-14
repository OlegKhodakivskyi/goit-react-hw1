import React from "react";
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css'

const FriendListItem = ({ friend}) => {
    return (
        <>
            <li className="item" key={friend.id}> 
                <span className="status"
                    style={friend.isOnline
                        ? { backgroundColor: "green" }
                        : { backgroundColor: "red" }}>
                </span>
                <img className="avatar" src={friend.avatar} alt="avatar" width="48" />
                <p className="name">{friend.name}</p>
        </li>
        </>
    )
}

FriendListItem.propTypes = {
    friend: PropTypes.object,
};

export default FriendListItem;