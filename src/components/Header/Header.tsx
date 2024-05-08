import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import cn from 'classNames';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import CustomSelect from '../CustomSelect/CustomSelect';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { setStateOfLangTrue, setStateOfLangFalse } from '../../redux/languageSlice';
import { stateOfLanguage } from '../../redux/languageSlice';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
    const navigate = useNavigate();
    const firstRef = useRef<any>(null);
    const secondRef = useRef<any>(null);
    const location = useLocation();
    const { t, i18n } = useTranslation();
    const languageState = useSelector(stateOfLanguage);
    const dispatch = useDispatch();

    useEffect(() => {
        if (i18n.language === 'en') dispatch(setStateOfLangFalse());
    }, [])

    const changeLanguage = () => {
        if (languageState) {
            dispatch(setStateOfLangFalse());
            i18n.changeLanguage('en');
        } else {
            dispatch(setStateOfLangTrue());
            i18n.changeLanguage('ru');
        }
    };

    useEffect(() => {
        const firstElem = firstRef.current?.querySelector('#selected-text');
        const secondElem = secondRef.current?.querySelector('#selected-text');

        if (firstElem && secondElem) {
            if (firstElem.innerHTML === 'УСЛУГИ' && location.pathname.startsWith("/services/") || firstElem.innerHTML === 'SERVICES' && location.pathname.startsWith("/services/")) {
                firstElem.style.color = 'rgb(200, 163, 95)';
                secondElem.style.color = 'white';
            } else if (secondElem.innerHTML === 'О КОМПАНИИ' && location.pathname.startsWith("/aboutCompany/") || secondElem.innerHTML === 'ABOUT' && location.pathname.startsWith("/aboutCompany/")) {
                firstElem.style.color = 'white';
                secondElem.style.color = 'rgb(200, 163, 95)';
            } else {
                firstElem.style.color = 'white';
                secondElem.style.color = 'white';
            }
        }
    }, [location, languageState]);

    const options = [
        { 
            value: '/services/projectTrans', 
            name: 'проектные перевозки', 
            enName: 'project transportation', 
            id: 'ProjectTrans' 
        },
        { 
            value: '/services/bigTrans', 
            name: 'крупногабаритные перевозки', 
            enName: 'heavy-duty transportation', 
            id: 'BigTrans' 
        },
        { 
            value: '/services/generalTrans', 
            name: 'перевозка генеральных грузов', 
            enName: 'general cargo transportation', 
            id: 'GeneralTrans' 
        },
        { 
            value: '/services/dangerTrans', 
            name: 'перевозка опасных грузов', 
            enName: 'dangerous cargo transportation', 
            id: 'DangerTrans' 
        },
        { 
            value: '/services/expensiveTrans', 
            name: 'перевозка дорогостоящих грузов', 
            enName: 'expensive cargo transportation', 
            id: 'ExpensiveTrans' 
        },
        { 
            value: '/services/compositeTrans', 
            name: 'перевозка сборных грузов', 
            enName: 'composite cargo transportation', 
            id: 'CompositeTrans' 
        },
        { 
            value: '/services/equipmentTrans', 
            name: 'доставка оборудования', 
            enName: 'equipment transportation', 
            id: 'EquipmentTrans' 
        },
        { 
            value: '/services/additional', 
            name: 'дополнительные услуги', 
            enName: 'additional services', 
            id: 'Additional' 
        },
    ];

    const aboutOptions = [
        { 
            value: '/aboutCompany/history', 
            name: 'история компании', 
            enName: 'company history', 
            id: 'history' 
        },
        { 
            value: '/aboutCompany/awards', 
            name: 'награды', 
            enName: 'awards', 
            id: 'awards' 
        },
        { 
            value: '/aboutCompany/guaranty', 
            name: 'гарантия качества', 
            enName: 'quality guarantee', 
            id: 'guaranty' 
        },
    ];

    const chooseService = (value: any) => {
        navigate(value);
    };

    return (
        <header className={styles.header}>
            <section className={styles.headContent}>
                <div className={styles.logoBox} onClick={() => navigate('/')}>
                    <img src="/images/logo.png" alt="logo" />
                </div>
                <nav>
                    <ul>
                        <li><NavLink className={({ isActive }) => cn({ [styles.active]: isActive })} to='/'>{t('head.firstLink')}</NavLink></li>
                        <li ref={firstRef}>
                            <CustomSelect
                                defaultText={t('head.secondLink')}
                                optionsList={options}
                                onOptionClick={chooseService}
                            />
                        </li>
                        <li ref={secondRef}>
                            <CustomSelect
                                defaultText={t('head.thirdLink')}
                                optionsList={aboutOptions}
                                onOptionClick={chooseService}
                            />
                        </li>
                        <li><NavLink className={({ isActive }) => cn({ [styles.active]: isActive })} to='/calculating'>{t('head.fourthLink')}</NavLink></li>
                        <li><NavLink className={({ isActive }) => cn({ [styles.active]: isActive })} to='/contacts'>{t('head.fifthLink')}</NavLink></li>
                        <li><button onClick={changeLanguage}>{languageState ? 'RU' : 'EN'}</button></li>
                    </ul>
                </nav>
            </section>
        </header>
    );
}

export default Header;