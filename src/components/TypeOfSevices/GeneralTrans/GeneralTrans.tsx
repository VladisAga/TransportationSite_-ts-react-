import { IProjectTrans } from '../BigTrans/BigTrans';
import styles from '../TypeOfServices.module.scss';

const GeneralTrans: React.FC<IProjectTrans> = ({ t }) => {
    return (
        <>
            <p className={styles.text}>
                {t('GeneralTrans.text1')}<br />
                {t('GeneralTrans.text2')}            </p>
            <br />
            <p className={styles.middleTopic}>{t('GeneralTrans.text3')}</p>
            <p className={styles.text}>
                {t('GeneralTrans.text4')}           </p>
            <br />
            <p className={styles.middleTopic}>{t('GeneralTrans.text5')}</p>
            <ul className={styles.ul}>
                <li>
                    {t('GeneralTrans.li1')}
                </li>
                <li>{t('GeneralTrans.li2')}</li>
                <li>{t('GeneralTrans.li3')}</li>
            </ul>
        </>
    )
}

export default GeneralTrans;