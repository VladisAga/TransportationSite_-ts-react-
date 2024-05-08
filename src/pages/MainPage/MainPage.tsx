import Divider from '../../components/Divider/Divider';
import Topic from '../../components/Topic/Topic';
import styles from './MainPage.module.scss';
import { serviceInf, IServiceInf } from '../../additionalInf/serviceInf';
import { useNavigate } from 'react-router-dom';
import ScrollToTopOnMount from '../../hooks/useScroll';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { stateOfLanguage } from '../../redux/languageSlice';

const MainPage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const languageState = useSelector(stateOfLanguage);

    const seeInf = (path: string) => {
        navigate(path, { replace: true });
    }

    return (<>

        <ScrollToTopOnMount />
        <section className={styles.mainSection}>
            <div className={styles.trucksAndText}>
                <div className={styles.textBox}>
                    <h2>
                        {t('mainPage.textBoxh2')}
                    </h2>
                    <p>
                        {t('mainPage.textBoxP')}
                    </p>
                </div>
            </div>
            <section className={styles.someInfAtMain}>
                <section>
                    <Divider />
                    <Topic className={styles.servTopic}>{t('mainPage.topic1')}</Topic>
                    <div className={styles.servicesBox}>
                        {serviceInf.map((value: IServiceInf, id) => <div className={styles.serviceBtn} onClick={() => seeInf(value.to)} key={id}>
                            <div><img src={value.img} alt={value.alt} /></div>
                            <p>{languageState ? value.text : value.enText}</p>
                        </div>)}
                    </div>
                </section>
                <section className={styles.aboutCompanyBlock}>
                    <div className={styles.mainInfAbout}>
                        <Divider />
                        <Topic className={styles.aboutTopic}>{t('mainPage.topic2')}</Topic>
                        <p className={styles.aboutText}>
                            {t('mainPage.textBoxP')}
                        </p>
                    </div>
                    <div className={styles.greyArea}></div>
                    <div className={styles.cubesInf}>
                        <div className={styles.infCube}><span className={styles.number}>5</span> {t('mainPage.span1')} <span>{t('mainPage.span2')} </span></div>
                        <div className={styles.infCube}><span className={styles.number}>120</span> {t('mainPage.span3')} </div>
                        <div><img src="/images/truck.png" alt="truck" /></div>
                        <div><img src="/images/workers.png" alt="workers" /></div>
                        <div className={styles.infCube}><span className={styles.number}>270</span> {t('mainPage.span4')}  <span>{t('mainPage.span5')} </span></div>
                    </div>
                </section>
            </section>
            <section className={styles.contacts}>
                <Divider className={styles.conactDivider} />
                <Topic className={styles.contactTopic}>{t('mainPage.topic3')}</Topic>
                <Divider className={styles.conactDivider} />
                <div className={styles.contactInf}>
                    <div className={styles.text}>
                        <span className={styles.contactText}>
                            {t('mainPage.contactText')}
                            <br />
                            <br />
                            <a href="tel:+74952320750">+7 (495) 232-07-50</a><br />
                            <a href="tel:+74959371310">+7 (495) 937-13-10</a><br />
                            <br />
                            <a href='mailto:moscow@cubq.pro'>moscow@cubq.pro</a>
                        </span>
                        <div className={styles.mesBox}>
                            <a href=""><img src="/images/icons/telegram.svg" alt="telegram" /></a>
                            <a href=""><img src="/images/icons/viber.svg" alt="viber" /></a>
                        </div>
                    </div>
                    <div className={styles.map}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2246.9503505102643!2d37.754117!3d55.724615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab56c086e342f%3A0x36eff50d34216b88!2z0KDRj9C30LDQvdGB0LrQuNC5INC_0YAuLCA40JAg0YHRgtGA0L7QtdC90LjQtSA3LCA0MDUsINCc0L7RgdC60LLQsCwg0KDQvtGB0YHQuNGPLCAxMDk0Mjg!5e0!3m2!1sru!2sby!4v1714603617810!5m2!1sru!2sby"
                            style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>
        </section>
    </>
    )
}

export default MainPage;