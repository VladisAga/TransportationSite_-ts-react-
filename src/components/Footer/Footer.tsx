import { useTranslation } from 'react-i18next';
import styles from './Footer.module.scss';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.contactInfAndLogo}>
                    <div>
                        <span className={styles.contactText}>
                            <span className={styles.town}>{t('footer.town1')}</span>
                            <span className={styles.links}>
                                <a href="tel:+74952320750">+7 (495) 232-07-50</a>
                                <a href="tel:+74959371310">+7 (495) 937-13-10</a>
                                <a href='mailto:moscow@cubq.pro'>moscow@cubq.pro</a>
                            </span>
                        </span>
                    </div>
                    <div>
                        <span className={styles.contactText}>
                            <span className={styles.town}>{t('footer.town2')}</span>
                            <span className={styles.links}>
                                <a href="tel:+4951135737733">+49 (511) 357-377-33</a>
                                <a href="tel:+4951135737734">+49 (511) 357-377-34</a>
                                <a href='mailto:hannover@cubq.pro'>mailto:hannover@cubq.pro</a>
                            </span>
                        </span>
                    </div>
                    <div>
                        <span className={styles.contactText}>
                            <span className={styles.town}>{t('footer.town3')}</span>
                            <span className={styles.links}>
                                <a href="tel:+375173663333">+375 (17) 366-33-33</a>
                                <a href='mailto:minsk@cubq.pro'>mailto:minsk@cubq.pro</a>
                            </span>
                        </span>
                    </div>
                    <div>
                        <span className={styles.contactText}>
                            <span className={styles.town}>{t('footer.town4')}</span>
                            <span className={styles.links}>
                                <a style={{ padding: 0 }} href='info@cubq.kz'>info@cubq.kz</a>
                            </span>
                        </span>
                    </div>
                    <div>
                        <span className={styles.contactText}>
                            <span className={styles.town}>{t('footer.town5')}</span>
                            <span className={styles.links}>
                                <a style={{ padding: 0 }} href='mailto:cub-qitalia@pec.it'>cubqitalia@pec.it</a>
                            </span>
                        </span>
                    </div>
                </div>
                <div className={styles.logoBox}>
                    <div >
                        <img src="/images/logo.png" alt="logo" />
                    </div>
                    <div className={styles.mesBox}>
                        <a href="https://www.instagram.com/cubq_logistics/"><img src="/images/icons/vk.svg" alt="telegram" /></a>
                        <a href="https://vk.com/cubqtrans"><img src="/images/icons/instagram.svg" alt="viber" /></a>
                    </div>
                    <p>{t('footer.©')}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;