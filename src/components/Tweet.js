import css from "./Tweet.module.css";
import LogoImg from "../img/logo.png";
import BckgrndImg from "../img/background.png";
import BoyImg from "../img/Boy.png";
import { useState } from "react";

const Tweet = ({ item, onFollowHendler }) => {
  const [onFollow, setOnFollow] = useState(
    JSON.parse(localStorage.getItem(`onFollow${item.id}`)) || false
  );

  const onClickHendeler = (id) => {
    setOnFollow((prev) => !prev);
    localStorage.setItem(`onFollow${item.id}`, !onFollow);
    console.log("in click", onFollow);

    onFollowHendler(id, !onFollow);
  };
  return (
    <li className={css.wraper}>
      <img src={LogoImg} alt="logo" className={css.logo}></img>
      <img
        src={BckgrndImg}
        alt="backgroundImg"
        className={css.backgroundImg}
      ></img>
      <div className={css.avatarLine}>
        <div className={css.avatarFrame}>
          {item ? (
            <img src={item.avatar} alt="BoyImg" className={css.avatar}></img>
          ) : (
            <img src={BoyImg} alt="BoyImg" className={css.avatar}></img>
          )}
        </div>
      </div>

      <p className={css.text}>{item.tweets} tweets</p>
      <p className={css.text}>{item.followers} followers</p>
      <button
        style={
          onFollow
            ? { backgroundColor: "var(--accent-color)" }
            : { backgroundColor: "var(--main-color)" }
        }
        className={css.btn}
        onClick={() => {
          onClickHendeler(item.id);
        }}
      >
        {onFollow ? "following" : "follow"}
      </button>
    </li>
  );
};
export default Tweet;