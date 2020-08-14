import React from "react"
import FriendListItem from './FriendListItem/FriendListItem'
import PropTypes, { object } from 'prop-types';

const FriendList = ({ friends }) => {
    return (
        <>
            <ul className="friend-list">
                {friends.map(friend => (
                    <FriendListItem friend={friend} key={friend.id} />
                ))}
            </ul>    
        </>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(object),
};
export default FriendList

