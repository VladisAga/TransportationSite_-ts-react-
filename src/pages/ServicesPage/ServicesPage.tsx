import { useParams } from 'react-router-dom';
import styles from './ServicesPage.module.scss';
import { serviceType } from './serviceType';
import Topic from '../../components/Topic/Topic';
import Divider from '../../components/Divider/Divider';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { useState } from 'react';
import cn from 'classNames';
import { useNavigate } from 'react-router-dom';
import ScrollToTopOnMount from '../../hooks/useScroll';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { stateOfLanguage } from '../../redux/languageSlice';

const ServicesPage = () => {
    const windowWidth = useWindowWidth();
    const navigate = useNavigate();
    const [btnState, setBtnState] = useState<boolean>(false);
    const { t } = useTranslation();
    const languageState = useSelector(stateOfLanguage);

    const { type: service } = useParams<{ type: keyof typeof serviceType }>();

    const selectedService = service && serviceType[service];

    const serviceTypeArr = Object.values(serviceType);

    const clickBtn = () => {
        setBtnState(!btnState);
    };

    const goToPage = (value: any) => {
        navigate(`/services/${value.to}`)
    };

    return (
        <>
            <ScrollToTopOnMount />
            <section className={styles.servicePageArea}>
                <div className={styles.sideBar}>
                    <div className={cn(styles.sideManageBar, {
                        [styles.active]: btnState
                    })}>
                        {serviceTypeArr.map((value, id) => <p className={cn(styles.manageElem, {
                            [styles.activeManageElem]: value.topic === selectedService?.topic
                        })} onClick={() => goToPage(value)} key={id}>{languageState ? value.topic : value.enTopic}</p>)}
                    </div>
                    {windowWidth <= 800 && <div className={styles.extraBtnBox}><button onClick={clickBtn}><img src={!btnState ? '/images/icons/cross.png' : '/images/icons/menu.png'} alt="" /></button></div>}
                </div>
                <div className={styles.textArea}>
                    <Topic className={styles.topic}>{languageState ? selectedService!.topic : selectedService!.enTopic }</Topic>
                    <Divider className={styles.divider} />
                    {selectedService && selectedService.component({ t: t })}
                </div>
            </section>
        </>
    )
}

export default ServicesPage;
