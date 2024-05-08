import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Divider from "../../components/Divider/Divider";
import Topic from "../../components/Topic/Topic";
import ScrollToTopOnMount from "../../hooks/useScroll";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { aboutCompanyInf } from "./AboutCompanyInf";
import cn from 'classNames';
import styles from '../ServicesPage/ServicesPage.module.scss'
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { stateOfLanguage } from "../../redux/languageSlice";

const AboutCompanyPage = () => {
    const windowWidth = useWindowWidth();
    const navigate = useNavigate();
    const [btnState, setBtnState] = useState<boolean>(false);
    const { t } = useTranslation();
    const languageState = useSelector(stateOfLanguage);

    const { type: aboutInf } = useParams<{ type: keyof typeof aboutCompanyInf }>();

    const selectedInf = aboutInf && aboutCompanyInf[aboutInf];

    const serviceTypeArr = Object.values(aboutCompanyInf);

    const clickBtn = () => {
        setBtnState(!btnState);
    };

    const goToPage = (value: any) => {
        navigate(`/aboutCompany/${value.to}`)
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
                            [styles.activeManageElem]: value.topic === selectedInf?.topic
                        })} onClick={() => goToPage(value)} key={id}>{languageState ? value.topic : value.enTopic}</p>)}
                    </div>
                    {windowWidth <= 800 && <div className={styles.extraBtnBox}><button onClick={clickBtn}><img src={!btnState ? '/images/icons/cross.png' : '/images/icons/menu.png'} alt="" /></button></div>}
                </div>
                <div className={styles.textArea}>
                    <Topic className={styles.topic}>{languageState ? selectedInf!.topic : selectedInf!.enTopic}</Topic>
                    <Divider className={styles.divider} />
                    {selectedInf && selectedInf.component({ t: t, languageState: languageState })}
                </div>
            </section>
        </>
    )
}

export default AboutCompanyPage;