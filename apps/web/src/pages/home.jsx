import styles from "../styles/pages/home.module.css";
import ConversationsContainer from "../components/conversations-container";
import ImageContainer from "../components/image-container";

const Home = () =>
    <ConversationsContainer>
        <section className={styles.container}>
            <ImageContainer sourceImage="/img/home.png"/>
            <h3 className={styles.text}>Únete a una conversación</h3>
        </section>
    </ConversationsContainer>

export default Home;