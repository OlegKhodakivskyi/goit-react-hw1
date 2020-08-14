import React from "react"
import FriendListItem from './FriendListItem/FriendListItem'
import PropTypes, { object } from 'prop-types';
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
    return (
        <>
            <ul className={styles.['friend-list']}>
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

