import styles from "./Profile.module.css";
import data from "../../userData.json";

function Profile() {
  return (
    <div className={styles.card}>
        <div className={styles.profile}>
          <img src={data.avatar} alt={data.name} className={styles.avatar} />
          <p className={styles.name}>{data.name}</p>
          <p className={styles.description}>{data.tag}</p>
          <p className={styles.description}>{data.location}</p>
        </div>
        <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.label}>{data.stats.followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.label}>{data.stats.views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.label}>{data.stats.likes}</span>
        </li>
          </ul>
    </div>
    );
}

export default Profile