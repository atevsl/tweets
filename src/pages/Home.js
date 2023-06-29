import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Notiflix from 'notiflix';

import api from '../services/api/api';
import css from './Home.module.css';

const Home = () => {
  const [tweets, setTweets] = useState('');

  useEffect(() => {
    const getTweets = async () => {
      try {
        const response = await api.get(`/tweets`);
        setTweets(response.data);
      } catch (error) {
        Notiflix.Notify.failure(
          'Sorry, we did not find any tweets. Please try again.'
        );
        return console.log(error.message);
      }
    };
    getTweets();
  }, []);

  return (
    <div className={css.container}>
      <div className={css.header}>
        we found <span className={css.number}>{tweets.length}</span> tweets for
        you.
      </div>
      <Link to="/tweets" className={css.link}>
        go to tweets
      </Link>
    </div>
  );
};

export default Home;
