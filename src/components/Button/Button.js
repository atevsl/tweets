import React from 'react';
import css from './Button.module.css';

export const FollowButton = ({ isFollowing, handleFollow, id }) => {
  return (
    <button
      style={
        isFollowing
          ? { backgroundColor: 'var(--accent-color)' }
          : { backgroundColor: 'var(--main-color)' }
      }
      className={css.btn}
      onClick={() => {
        handleFollow(id);
      }}
    >
      {isFollowing ? 'following' : 'follow'}
    </button>
  );
};
