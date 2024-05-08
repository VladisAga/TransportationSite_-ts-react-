import styles from '../TypeOfServices.module.scss';

export interface IProjectTrans {
  t: any;
}

const BigTrans: React.FC<IProjectTrans> = ({ t }) => {
  return (
    <>
      <p className={styles.text}>
        {t('BigTrans.text1')}
      </p>
      <br />
      <p className={styles.middleTopic}>{t('BigTrans.text2')}</p>
      <p className={styles.text}>
        {t('BigTrans.text3')}
      </p>
      <br />
      <p className={styles.middleTopic}>{t('BigTrans.text4')}</p>
      <ul className={styles.ul}>
        <li>
          {t('BigTrans.li1')}
        </li>
        <li>{t('BigTrans.li2')}</li>
        <li>
          {t('BigTrans.li3')}
        </li>
        <li>
          {t('BigTrans.li4')}
        </li>
        <li>
          {t('BigTrans.li5')}
        </li>
        <li>
          {t('BigTrans.li6')}
        </li>
        <li>
          {t('BigTrans.li7')}
        </li>
        <li>
          {t('BigTrans.li8')}
        </li>
        <li>
          {t('BigTrans.li9')}
        </li>
      </ul>
    </>
  )
}

export default BigTrans;