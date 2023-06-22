import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "https://6492a0b8428c3d2035d0615f.mockapi.io/api/";

const Home = () => {
  const [tweets, setTweets] = useState("");

  useEffect(() => {
    const getTweets = async () => {
      try {
        const response = await axios.get(`/tweets`);
        setTweets(response.data);
      } catch (error) {
        // Notiflix.Notify.failure(
        //   "Sorry, we did not find this movie. Please repeat the search"
        // );
        return console.log(error.message);
      }
    };
    getTweets();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        fontSize: "30px",
        width: "600px",
        margin: "auto",
        marginTop: "50px",
      }}
    >
      <div>There is ${tweets.length} tweets.</div>
      <Link
        //   to={goBack}
        to="/tweets"
        //   className={css.links}
      >
        Go to tweets
      </Link>
    </div>
  );
};
export default Home;
