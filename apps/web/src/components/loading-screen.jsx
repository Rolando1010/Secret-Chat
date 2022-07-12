import styles from "../styles/components/loading-screen.module.css";

const LoadingScreen = ({ loader: Loader, subject }) =>
    <div className={styles.loadingScreen}>
        <Loader
            color="#fff"
            loading={true}
            size={150}
        />
        <h3>{`Cargando ${subject}, por favor espera.`}</h3>        
    </div>

export default LoadingScreen;