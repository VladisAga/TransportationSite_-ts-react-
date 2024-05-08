import React, { useState, useEffect, useRef } from 'react';
import styles from './CustomSelect.module.scss';
import cn from 'classNames';
import { useSelector } from 'react-redux';
import { stateOfLanguage } from '../../redux/languageSlice';

interface ICustomSelect {
    defaultText: any;
    optionsList: any;
    onOptionClick: any;
}

const CustomSelect: React.FC<ICustomSelect> = ({ defaultText, optionsList, onOptionClick }) => {
    const [showOptionList, setShowOptionList] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);
    const languageState = useSelector(stateOfLanguage);

    useEffect(() => {
        const handleMouseEnter = () => {
            setShowOptionList(true);
        };

        const handleMouseLeave = () => {
            setShowOptionList(false);
        };

        if (selectRef.current) {
            selectRef.current.addEventListener('mouseenter', handleMouseEnter);
            selectRef.current.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (selectRef.current) {
                selectRef.current.removeEventListener('mouseenter', handleMouseEnter);
                selectRef.current.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, [selectRef]);

    const handleOptionClick = (e: any) => {
        setShowOptionList(false);
        onOptionClick(e.target.getAttribute('data-value'));
    };

    return (
        <div className={styles['custom-select-container']} ref={selectRef}>
            <div id='selected-text' className={cn(styles['selected-text'], {
            })}>
                {defaultText}
            </div>
            {showOptionList && (
                <ul className={styles["select-options"]}>
                    {optionsList.map((option: any) => (
                        <li
                            className={styles["custom-select-option"]}
                            data-name={option.name}
                            data-value={option.value}
                            key={option.id}
                            onClick={handleOptionClick}
                        >
                            {languageState ? option.name : option.enName}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomSelect;
