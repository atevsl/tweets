import { Link } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';

import api from '../services/api/api';

import Tweet from '../components/Tweet/Tweet';
import css from './Tweets.module.css';

const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState('show all');
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectChange = event => {
    setSelectedOption(event.target.value);
  };

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
      </div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <ul className={css.tweetslist}>
            {tweets.length > 0 &&
              tweets.map(item => (
                <Tweet
                  item={item}
                  key={Math.random()}
                  selectedOption={selectedOption}
                />
              ))}
          </ul>
          <button
            className={css.btn}
            onClick={() => {
              setPage(prevpage => prevpage + 1);
            }}
          >
            Load more
          </button>
        </>
      )}
    </div>
  );
};
export default Tweets;
