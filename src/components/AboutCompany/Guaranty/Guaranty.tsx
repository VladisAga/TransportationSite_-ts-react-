import { companyCriteria } from "./guarantyInf";
import styles from '../aboutCompanyStyle.module.scss';
import { IHistory } from "../History/History";

const Guaranty: React.FC<IHistory> = ({ t, languageState }) => {
    return (
        <section className={styles.section}>
            <p className={styles.text}>{t('Guaranty.text1')}<br />
                {t('Guaranty.text2')}
            </p>
            <br />
            <ol className={styles.ol}>
                {languageState
                    ? companyCriteria.map((value, id) => <li className={styles.topicText} key={id}>
                        {value.description}<br />
                        {value.text && <span className={styles.text}>{value.text}</span>}
                        <ul className={styles.ul}>
                            {value.details.map((value, id) => <li className={styles.text} key={id}>
                                {value}
                            </li>)}
                        </ul>
                    </li>)
                    : companyCriteria.map((value, id) => <li className={styles.topicText} key={id}>
                        {value.enDescription}<br />
                        {value.text && <span className={styles.text}>{value.enText}</span>}
                        <ul className={styles.ul}>
                            {value.enDetails.map((value, id) => <li className={styles.text} key={id}>
                                {value}
                            </li>)}
                        </ul>
                    </li>)}
            </ol>
            <p className={styles.text}>
                {t('Guaranty.text3')}
            </p>
            <br />
        </section>
    )
}

export default Guaranty;