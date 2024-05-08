import { IHistory } from '../History/History';
import styles from '../aboutCompanyStyle.module.scss';
import cn from 'classNames';

const Awards: React.FC<IHistory> = ({ t }) => {
    return (
        <section className={styles.section}>
            <p className={styles.topic}>{t('Awards.text1')}</p>
            <ul className={styles.ul}>
                <li className={styles.text}>{t('Awards.li1')}</li>
            </ul>
            <div className={styles.imgBox}>
                <img src="/images/awards/2011.png" alt="award" />
            </div>
            <p className={styles.topic}>{t('Awards.text2')}</p>
            <ul className={styles.ul}>
                <li className={styles.text}>{t('Awards.li2')}</li>
            </ul>
            <p className={styles.topic}>{t('Awards.text3')}</p>
            <ul className={styles.ul}>
                <li className={styles.text}>{t('Awards.li3')}</li>
            </ul>
            <div className={cn(styles.imgBox, styles.imgBox2)}>
                <img src="/images/awards/2014.png" alt="award" />
            </div>
        </section>
    )
}

export default Awards;