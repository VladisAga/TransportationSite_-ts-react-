import { IProjectTrans } from '../BigTrans/BigTrans';
import styles from '../TypeOfServices.module.scss';

const CompositeTrans: React.FC<IProjectTrans> = ({ t }) => {
  return (
    <>
      <p className={styles.text}>
        {t('CompositeTrans.text1')}
      </p>
      <br />
      <p className={styles.text}>
        {t('CompositeTrans.text2')}
      </p>
      <br />
      <p className={styles.middleTopic}>{t('CompositeTrans.text3')}</p>
      <ul className={styles.ul}>
        <li>
          {t('CompositeTrans.li1')}
        </li>
        <li>{t('CompositeTrans.li2')}</li>
        <li>{t('CompositeTrans.li3')}</li>
        <li>
          {t('CompositeTrans.li4')}
        </li>
        <li>
          {t('CompositeTrans.li5')}
        </li>
        <li>
          {t('CompositeTrans.li6')}
        </li>
        <li>
          {t('CompositeTrans.li7')}
        </li>
        <li>
          {t('CompositeTrans.li8')}
        </li>
      </ul>
      <br />
      <p className={styles.text}>
        {t('CompositeTrans.text4')}
      </p>
    </>
  )
}

export default CompositeTrans;