import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import api from '../services/api/api'

import Tweet from "../components/Tweet";
import css from "./Tweets.module.css";

const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState("show all");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    const getTweets = async () => {
      try {
        const response = await api.get(`/tweets?page=${page}&limit=3`);
        setTweets((prevdata) => [...prevdata, ...response.data]);
      } catch (error) {
        return console.log(error.message);
      }
    };
    getTweets();
  }, [page]);

  async function onFollowHendler(id, onFollow) {
    try {
      let tweetToUpd = tweets.find((el) => el.id === id);
      if (onFollow) {
        tweetToUpd = { ...tweetToUpd, followers: tweetToUpd.followers + 1 };
      } else
        tweetToUpd = { ...tweetToUpd, followers: tweetToUpd.followers - 1 };
      await api.put(`/tweets/${id}`, tweetToUpd);
      setTweets((prevTweets) =>
        prevTweets.map((tweet) => {
          if (tweet.id === id) {
            if (onFollow) {
              return { ...tweet, followers: tweet.followers + 1 };
            } else {
              return { ...tweet, followers: tweet.followers - 1 };
            }
          }
          return tweet;
        })
      );
    } catch (error) {
      return console.log(error.message);
    }
  }
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

      <ul className={css.tweetslist}>
        {tweets.length > 0 &&
          tweets.map((item) => (
            <Tweet
              item={item}
              onFollowHendler={onFollowHendler}
              key={Math.random()}
              selectedOption={selectedOption}
            />
          ))}
      </ul>

      <button
        className={css.btn}
        onClick={() => {
          setPage((prevpage) => prevpage + 1);
        }}
      >
        Load more
      </button>
    </div>
  );
};
export default Tweets;
