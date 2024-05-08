import Divider from '../../Divider/Divider';
import Topic from '../../Topic/Topic';
import { IProjectTrans } from '../BigTrans/BigTrans';
import styles from '../TypeOfServices.module.scss';

const Additional: React.FC<IProjectTrans> = ({ t }) => {
  return (
    <>
      <p className={styles.text}>
        {t('Additional.text1')}
      </p>
      <p className={styles.text}>
        {t('Additional.text2')}
      </p>
      <ul className={styles.ul}>
        <li>{t('Additional.li1')}</li>
        <li>{t('Additional.li2')}</li>
        <li>{t('Additional.li3')}</li>
        <li>{t('Additional.li4')}</li>
        <li>{t('Additional.li5')}</li>
        <li>{t('Additional.li6')}</li>
        <li>{t('Additional.li7')}</li>
      </ul>
      <p className={styles.text}>
        {t('Additional.text3')}
      </p>
      <Topic className={styles.topic}>{t('Additional.text4')}</Topic>
      <Divider className={styles.divider} />
      <p className={styles.text}>
        {t('Additional.text5')}<br />
        {t('Additional.text6')}
      </p>
      <ul className={styles.ul}>
        <li>{t('Additional.li8')}</li>
        <li>{t('Additional.li9')}</li>
      </ul>
      <p className={styles.text}>
        {t('Additional.text7')}<br />
        {t('Additional.text8')}<br />
        {t('Additional.text9')}<br />
        {t('Additional.text10')}<br />
        {t('Additional.text11')}<br />
        {t('Additional.text12')}
      </p>
    </>
  )
}

export default Additional;