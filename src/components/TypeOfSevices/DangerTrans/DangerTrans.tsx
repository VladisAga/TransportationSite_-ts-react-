import { IProjectTrans } from '../BigTrans/BigTrans';
import styles from '../TypeOfServices.module.scss';

const DangerTrans: React.FC<IProjectTrans> = ({ t }) => {
  return (
    <>
      <p className={styles.text}>
        {t('DangerTrans.text1')}
      </p>
      <br />
      <p className={styles.middleTopic}>
        {t('DangerTrans.text2')}
      </p>
      <p className={styles.text}>
        {t('DangerTrans.text3')}
      </p>
      <br />
    </>
  )
}

export default DangerTrans;