import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.card}>
      <div className={css.info}>
        <img src={image} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statItem}>
          <span className={css.statLabel}>Followers</span>
          <span className={css.statValue}>{stats.followers.toLocaleString()}</span>
        </li>
        <li className={css.statItem}>
          <span className={css.statLabel}>Views</span>
          <span className={css.statValue}>{stats.views.toLocaleString()}</span>
        </li>
        <li className={css.statItem}>
          <span className={css.statLabel}>Likes</span>
          <span className={css.statValue}>{stats.likes.toLocaleString()}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
