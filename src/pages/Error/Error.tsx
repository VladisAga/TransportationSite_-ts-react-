import { useNavigate } from 'react-router-dom';
import styles from './Error.module.scss';

const Error = () => {
    const navigate = useNavigate();

    return (
        <section className={styles.errorPageArea}>
            <div className={styles.errorTextBlock}>
                <h1>404</h1>
                <h3>something went wrong</h3>
                <p><button onClick={() => navigate('/')}>go home</button> and try again!</p>
            </div>
        </section>
    )
}

export default Error;