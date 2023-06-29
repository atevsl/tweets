import React from 'react';

export const Counter = ({ styles, count, title }) => {
  return (
    <p className={styles}>
      {count} {title}
    </p>
  );
};
