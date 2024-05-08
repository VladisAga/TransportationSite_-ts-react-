import { IProjectTrans } from '../BigTrans/BigTrans';
import styles from '../TypeOfServices.module.scss';

const ExpensiveTrans: React.FC<IProjectTrans> = ({ t }) => {
  return (
    <>
      <p className={styles.text}>
        {t('ExpensiveTrans.text1')}<br />
        {t('ExpensiveTrans.text2')}<br />
        {t('ExpensiveTrans.text3')}
      </p><br />
      <p className={styles.middleTopic}>{t('ExpensiveTrans.text4')}</p>
      <ul className={styles.ul}>
        <li>
          {t('ExpensiveTrans.li1')}
        </li>
        <li>
          {t('ExpensiveTrans.li2')}
          <ul className={styles.secondUl}>
            <li>
              {t('ExpensiveTrans.li3')}
            </li>
            <li>{t('ExpensiveTrans.li4')}</li>
            <li>{t('ExpensiveTrans.li5')}</li>
            <li>{t('ExpensiveTrans.li6')}</li>
          </ul>
        </li>
      </ul>
    </>
  )
}

export default ExpensiveTrans;