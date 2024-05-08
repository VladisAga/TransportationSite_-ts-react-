import { companyHistory } from "./historyInf";
import styles from '../aboutCompanyStyle.module.scss';

export interface IHistory {
    t: any;
    languageState?: boolean;
}

const History: React.FC<IHistory> = ({ languageState }) => {
    return (
        <section>
            {companyHistory.map((value, id) => <div className={styles.section} key={id}>
                <p className={styles.topic}> {languageState ? value.topic : value.enTopic}</p>
                <ul className={styles.ul}>
                    {languageState
                        ? value.listElem.map((value, id) => <li className={styles.text} key={id}>{value}</li>)
                        : value.enListElem.map((value, id) => <li className={styles.text} key={id}>{value}</li>)
                    }
                </ul>
            </div>)}
        </section>
    )
}

export default History;