import React from 'react';
import styles from './FriendlistItem.module.css';

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <div className={styles.friendItem}>
      <img
        src={avatar}
        alt={`${name}'s Avatar`}
        width="50"
        className={styles.avatar}
      />
      <p className={styles.name}>{name}</p>
      <p className={isOnline ? styles.online : styles.offline}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
