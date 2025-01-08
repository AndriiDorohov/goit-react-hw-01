import React from 'react';
import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={styles.friendList}>
        {friends.map(friend => (
          <li key={friend.id} className={styles.friendListItem}>
            <FriendListItem
              name={friend.name}
              avatar={friend.avatar}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
