import { Link } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';

import api from '../services/api/api';

import Tweet from '../components/Tweet/Tweet';
import css from './Tweets.module.css';
import { Filter } from '../components/Filter/Filter';

const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState('show all');
  const [isLoading, setIsLoading] = useState(false);

  const getTweets = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await api.get(`/tweets?page=${page}&limit=3`);
      setTweets(prevdata => [...prevdata, ...response.data]);
    } catch (error) {
      return console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  useEffect(() => {
    getTweets();
  }, [getTweets]);

  return (
    <div className={css.container}>
      <div className={css.headerWrap}>
        <Link to="/" className={css.link}>
          Go back
        </Link>

        <Filter
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
      <ul className={css.tweetslist}>
        {tweets.length > 0 &&
          tweets.map(item => (
            <Tweet item={item} key={item.id} selectedOption={selectedOption} />
          ))}
      </ul>
      {isLoading && <h2>Loading...</h2>}
      <button
        className={css.btn}
        onClick={() => {
          setPage(prevpage => prevpage + 1);
        }}
      >
        Load more
      </button>
    </div>
  );
};
export default Tweets;
