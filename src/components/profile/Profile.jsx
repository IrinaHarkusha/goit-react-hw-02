import s from './Profile.module.css'

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.wrap}>
        <img className={s.userImg} src={image} alt="userphoto" width={150} />
        <p className={s.name}>{name}</p>
        <p className={s.text}>@{tag}</p>
        <p className={s.text}>{location}</p>
        
          <ul className={s.list}>
    <li className={s.card}>
      <span className={s.title}>Followers</span>
      <span className={s.numbers}>{stats.followers}</span>
    </li>
    <li className={s.card}>
      <span className={s.title}>Views</span>
      <span className={s.numbers}>{stats.views}</span>
    </li>
    <li className={s.card}>
      <span className={s.title}>Likes</span>
      <span className={s.numbers}>{stats.likes}</span>
    </li>
  </ul>
      </div>
    </div>
  );
};

export default Profile;
