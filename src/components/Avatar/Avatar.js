import React from 'react';
import css from './Avatar.module.css';

export const Avatar = ({ src, alt }) => {
  return (
    <div className={css.avatarLine}>
      <div className={css.avatarFrame}>
        <img src={src} alt={alt} className={css.avatar} />
      </div>
    </div>
  );
};
