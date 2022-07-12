import styles from "../styles/components/avatar.module.css";

const Avatar = ({ imageSource }) =>
    <img
        className={styles.avatar}
        src={imageSource}
    />

export default Avatar;