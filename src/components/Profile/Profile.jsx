import userData from "../../userData.json"
import css from "./Profile.module.css"

const { username, tag, location, avatar, stats: { followers, views, likes } } = userData;

const Profile = ({ userData }) => {
    
    return (
        <div className={css.container}>
  <div>
    <img
    className={css.img}
      src={avatar}
      alt={username}
      width="120"
    />
    <p className={css.username}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats_list}>
    <li className={css.stats_item}>
      <span>Followers</span>
      <span className={css.stats_amount}>{followers}</span>
    </li>
    <li className={css.stats_item}>
      <span>Views</span>
      <span className={css.stats_amount}>{views}</span>
    </li>
    <li className={css.stats_item}>
      <span>Likes</span>
      <span className={css.stats_amount}>{likes}</span>
    </li>
  </ul>
</div>
    )
}
export default Profile;