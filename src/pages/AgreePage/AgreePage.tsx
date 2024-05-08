import { useTranslation } from 'react-i18next';
import Divider from '../../components/Divider/Divider';
import Topic from '../../components/Topic/Topic';
import styles from './AgreePage.module.scss';
import { useNavigate } from 'react-router-dom';

const AgreePage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <section className={styles.agreePageArea}>
            <div className={styles.agreePageContent}>
                <div className={styles.topicBox}>
                    <Topic className={styles.topic}>{t('AgreePage.text1')}</Topic>
                    <Divider className={styles.divider} />
                </div>
                <p className={styles.text}>
                    {t('AgreePage.text2')}<br />
                    {t('AgreePage.text3')}<br />
                    {t('AgreePage.text4')}<br />
                    {t('AgreePage.text5')}<br />
                    {t('AgreePage.text6')}<br />
                    {t('AgreePage.text7')}<br />
                    {t('AgreePage.text8')}
                </p>
                <p className={styles.middleTopic}>{t('AgreePage.text9')}.</p>
                <p className={styles.text}>
                    {t('AgreePage.text10')}
                </p>
                <p className={styles.middleTopic}>{t('AgreePage.text11')}</p>
                <p className={styles.text}>
                    {t('AgreePage.text12')}<br />
                    {t('AgreePage.text13')}<br />
                    {t('AgreePage.text14')}<br />
                    {t('AgreePage.text15')}
                </p>
                <button className={styles.backBtn} onClick={()=> navigate('/calculating')}>{t('AgreePage.text16')}</button>
            </div>
        </section>
    )
}

export default AgreePage;