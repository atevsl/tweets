import { useState } from 'react';

import api from '../../services/api/api';

import LogoImg from '../../assets/img/logo.png';
import BckgrndImg from '../../assets/img/background.png';
import BoyImg from '../../assets/img/Boy.png';

import { Avatar } from '../Avatar/Avatar';
import { FollowButton } from '../Button/Button';
import { Counter } from '../Counter/Counter';
import { normalizeNumber } from '../../utils/normalizeNumber';

import css from './Tweet.module.css';

const Tweet = ({ item, selectedOption }) => {
  const [isFollowing, setIsFollowing] = useState(
    JSON.parse(localStorage.getItem(`onFollow${item.id}`)) || false
  );

  const handleFollow = async id => {
    setIsFollowing(prev => !prev);
    localStorage.setItem(`onFollow${item.id}`, !isFollowing);
    try {
      if (isFollowing) {
        item.followers += 1;
      } else item.followers -= 1;
      await api.put(`/tweets/${id}`, item);
    } catch (error) {
      return console.log(error.message);
    }
  };

  let isrender = null;
  switch (selectedOption) {
    case 'follow':
      isrender = isFollowing ? false : true;
      break;
    case 'followings':
      isrender = isFollowing ? true : false;
      break;
    default:
      isrender = true;
  }

  return (
    <>
      {isrender && (
        <li className={css.wraper}>
          <img src={LogoImg} alt="logo" className={css.logo}></img>
          <img
            src={BckgrndImg}
            alt="backgroundImg"
            className={css.backgroundImg}
          ></img>

          {item.avatar ? (
            <Avatar src={item.avatar} alt={item.user} />
          ) : (
            <Avatar src={BoyImg} alt="BoyImg" />
          )}

          <Counter styles={css.text} count={item.tweets} title="tweets" />
          <Counter
            styles={css.text}
            count={normalizeNumber(item.followers)}
            title="followers"
          />

          <FollowButton
            isFollowing={isFollowing}
            handleFollow={handleFollow}
            id={item.id}
          />
        </li>
      )}
    </>
  );
};

export default Tweet;
