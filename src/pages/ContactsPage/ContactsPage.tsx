import { useTranslation } from 'react-i18next';
import Divider from '../../components/Divider/Divider';
import Topic from '../../components/Topic/Topic';
import styles from './ContactsPage.module.scss';

const ContactsPage = () => {
    const { t } = useTranslation();

    return (
        <section className={styles.contacts}>
            <div className={styles.contactsContent}>
                <div className={styles.topicBox}>
                    <Topic>{t('ContactsPage.text1')}</Topic>
                    <Divider className={styles.divider} />
                </div>
                <div className={styles.contactsInf}>
                    <div className={styles.contactElem}>
                        <p className={styles.contactText}>
                            {t('ContactsPage.text2')}<br />
                            {t('ContactsPage.text3')}<br />
                            {t('ContactsPage.text4')}<br />
                            <a href="tel:+74952320750">+7 (495) 232-07-50</a><br />
                            <a href="tel:+74959371310">+7 (495) 937-13-10</a><br />
                            <a href='mailto:moscow@cubq.pro'>moscow@cubq.pro</a>
                        </p>
                        <div className={styles.map}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2246.9503505102643!2d37.754117!3d55.724615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab56c086e342f%3A0x36eff50d34216b88!2z0KDRj9C30LDQvdGB0LrQuNC5INC_0YAuLCA40JAg0YHRgtGA0L7QtdC90LjQtSA3LCA0MDUsINCc0L7RgdC60LLQsCwg0KDQvtGB0YHQuNGPLCAxMDk0Mjg!5e0!3m2!1sru!2sby!4v1714603617810!5m2!1sru!2sby"
                                style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className={styles.contactElem}>
                        <p className={styles.contactText}>
                            {t('ContactsPage.text5')}<br />
                            {t('ContactsPage.text6')}<br />
                            {t('ContactsPage.text7')}<br />
                            <a href='mailto:info@cubq.kz'>info@cubq.kz</a>
                        </p>
                        <div className={styles.map}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2501.9442119170253!2d71.44221859999999!3d51.164817899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4245814e7180835f%3A0xe2128476a06b8bc0!2z0YPQu9C40YbQsCDQkNC80LDQvdCz0LXQu9GM0LTRiyDQmNC80LDQvdC-0LLQsCAxOSwg0JDRgdGC0LDQvdCwIDAxMDAwMCwg0JrQsNC30LDRhdGB0YLQsNC9!5e0!3m2!1sru!2suk!4v1714862025985!5m2!1sru!2suk" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className={styles.contactElem}>
                        <p className={styles.contactText}>
                            Hannover, Germany<br />
                            30179, Hannover,<br />
                            Alter Flughafen, 22<br />
                            <a href="tel:+4951135737733">+49 (511) 357-377-33</a><br />
                            <a href="tel:+4951135737734">+49 (511) 357-377-34</a><br />
                            <a href='mailto:hannover@cubq.pro'>hannover@cubq.pro</a>
                        </p>
                        <div className={styles.map}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.3931975399196!2d9.7503437!3d52.41767290000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b0733ac7f80585%3A0x99c6296f133ec15!2zQWx0ZXIgRmx1Z2hhZmVuIDIyLCAzMDE3OSBIYW5ub3Zlciwg0JPQtdGA0LzQsNC90LjRjw!5e0!3m2!1sru!2suk!4v1714861928933!5m2!1sru!2suk" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className={styles.contactElem}>
                        <p className={styles.contactText}>
                            ITALY, Genova<br />
                            GENOVA (GE)<br />
                            PASSO PALESTRO 8/9 CAP 16122<br />
                            stradario 44880<br />
                            <a href='mailto:cub-qitalia@pec.it'>cub-qitalia@pec.it</a>
                        </p>
                        <div className={styles.map}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2850.023382853796!2d8.940256599999998!3d44.4121659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d343eeb085a0e1%3A0x355f27f5433e47c6!2zUGFzc28gUGFsZXN0cm8sIDgvOSwgMTYxMjIgR2Vub3ZhIEdFLCDQmNGC0LDQu9C40Y8!5e0!3m2!1sru!2suk!4v1714862091458!5m2!1sru!2suk" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className={styles.contactElem}>
                        <p className={styles.contactText}>
                            {t('ContactsPage.text8')}<br />
                            {t('ContactsPage.text9')}<br />
                            {t('ContactsPage.text10')}<br />
                            <a href="tel:+375173663333">+375 (17) 366-33-33</a><br />
                            <a href='mailto:minsk@cubq.pro'>minsk@cubq.pro</a>
                        </p>
                        <div className={styles.map}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2351.2602684454373!2d27.523085499999997!3d53.8915778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcffd67079859%3A0x64ee82d8dee66b56!2z0YPQu9C40YbQsCDQoNC-0LfRiyDQm9GO0LrRgdC10LzQsdGD0YDQsyA5NSwg0JzQuNC90YHQuiwg0JzQuNC90YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCR0LXQu9Cw0YDRg9GB0Yw!5e0!3m2!1sru!2suk!4v1714862156166!5m2!1sru!2suk" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactsPage;