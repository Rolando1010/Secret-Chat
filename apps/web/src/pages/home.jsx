import styles from "../styles/pages/home.module.css";
import ConversationsContainer from "../components/conversations-container";
import ImageContainer from "../components/image-container";

const Home = () =>
    <ConversationsContainer>
        <section className={styles.container}>
            <ImageContainer sourceImage="https://cdn-icons-png.flaticon.com/512/3659/3659850.png"/>
            <h3 className={styles.text}>Únete a una conversación</h3>
        </section>
    </ConversationsContainer>

export default Home;