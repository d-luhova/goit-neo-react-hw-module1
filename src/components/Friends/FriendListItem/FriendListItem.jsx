import styles from "./FriendListItem.module.css";

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={styles.item}>
            <img src={avatar} alt={name} className={styles.avatar} width="80"/>
            <p className={styles.name}>{name}</p>
            <p className={isOnline ? styles.online : styles.offline}>
                {isOnline ? "Online" : "Offline"}
            </p>
        </li>
    );
};

export default FriendListItem