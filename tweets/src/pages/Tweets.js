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

  async function onFollowHendler(id) {
    try {
      console.log("before", tweets);

      let tweetToUpd = tweets.find((el) => el.id === id);
      tweetToUpd = { ...tweetToUpd, followers: tweetToUpd.followers + 1 };
      await axios.put(`/tweets/${id}`, tweetToUpd);
      const indx = tweets.findIndex((el) => el.id === id);

      setTweets(tweets.splice(indx, 1, tweetToUpd));
      console.log(tweets);
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
