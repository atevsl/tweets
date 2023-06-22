import css from "./Tweet.module.css";
import LogoImg from "../img/logo.png";
import BckgrndImg from "../img/background.png";
import BoyImg from "../img/Boy.png";

const Tweet = ({ item, onFollowHendler }) => {
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
        className={css.btn}
        onClick={() => {
          onFollowHendler(item.id);
        }}
      >
        follow
      </button>
    </li>
  );
};
export default Tweet;
