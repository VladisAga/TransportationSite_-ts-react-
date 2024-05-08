import styles from '../TypeOfServices.module.scss';

interface IProjectTrans {
    t: any;
}

const ProjectTrans:React.FC<IProjectTrans> = ({t}) => {

    return (
        <>
            <p className={styles.text}>{t('ProjectTrans.text1')}</p>
            <br />
            <p className={styles.middleTopic}>{t('ProjectTrans.text2')}</p>
            <p className={styles.text}>{t('ProjectTrans.text3')}</p>
            <br />
            <p className={styles.middleTopic}>{t('ProjectTrans.text4')}</p>
            <p className={styles.text}><span>{t('ProjectTrans.text5')}</span></p>
            <ul className={styles.ul}>
                <li>{t('ProjectTrans.li1')}</li>
                <li>{t('ProjectTrans.li2')}</li>
                <li>{t('ProjectTrans.li3')}</li>
                <li>{t('ProjectTrans.li4')}</li>
                <li>{t('ProjectTrans.li5')}</li>
            </ul>
        </>
    );
};

export default ProjectTrans;