import styles from "../styles/components/image-container.module.css";

const ImageContainer = ({ sourceImage }) =>
    <div className={styles.imageContainer}>
        <div className={styles.imageBackground}>
            <img src={sourceImage}/>
        </div>
    </div>

export default ImageContainer;