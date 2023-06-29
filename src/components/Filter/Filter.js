import React from 'react';

import css from './Filter.module.css';

export const Filter = ({ selectedOption, setSelectedOption }) => {
  const handleSelectChange = event => {
    setSelectedOption(event.target.value);
  };

  return (
    <select
      className={css.customSelect}
      value={selectedOption}
      onChange={handleSelectChange}
    >
      <option value="show all">
        <span>show all</span>
      </option>
      <option value="follow">follow</option>
      <option value="followings">followings</option>
    </select>
  );
};
