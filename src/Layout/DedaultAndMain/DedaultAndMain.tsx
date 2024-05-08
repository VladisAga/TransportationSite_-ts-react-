import { Outlet } from "react-router-dom";
import styles from './DedaultAndMain.module.scss';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Layout = () => {
    return (
        <div className={styles.generalArea}>
            <Header />
            <section className={styles.mainArea}>
                <Outlet />
            </section>
            <Footer />
        </div>
    )
};

export default Layout;