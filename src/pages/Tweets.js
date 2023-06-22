import { Link } from "react-router-dom";
import Tweet from "../components/Tweet";
import { useEffect, useState } from "react";
import axios from "axios";
import css from "./Tweets.module.css";

const Tweets = () => {
  const [tweets, setTweets] = useState([]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    const getTweets = async () => {
      try {
        console.log("запрос на page:", page, Date.now());

        const response = await axios.get(`/tweets?page=${page}&limit=3`);

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

      await axios.put(`/tweets/${id}`, tweetToUpd);
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
    <div>
      <Link
        to="/"
        //   className={css.links}
      >
        Go back
      </Link>
      <ul className={css.tweetslist}>
        {tweets.length > 0 &&
          tweets.map((item) => (
            <Tweet
              item={item}
              onFollowHendler={onFollowHendler}
              key={Math.random()}
            />
          ))}
      </ul>

      <button
        onClick={() => {
          setPage((prevpage) => prevpage + 1);
          //   setTweets((prevTweets) => [...prevTweets, ...nextTweetsPage]);
        }}
      >
        Load more
      </button>
    </div>
  );
};
export default Tweets;
