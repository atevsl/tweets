import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import css from "./Home.module.css";
import Notiflix from "notiflix";

axios.defaults.baseURL = "https://6492a0b8428c3d2035d0615f.mockapi.io/api/";

const Home = () => {
  const [tweets, setTweets] = useState("");

  useEffect(() => {
    const getTweets = async () => {
      try {
        const response = await axios.get(`/tweets`);
        setTweets(response.data);
      } catch (error) {
        Notiflix.Notify.failure(
          "Sorry, we did not find any tweets. Please try again."
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
