import cn from'classNames';
import styles from './Divider.module.scss';

interface IDivide {
    className?: string;
}

const Divider: React.FC<IDivide> = ({className}) => {
    return (
        <div className={cn(styles.divider, className)}></div>
    )
}

export default Divider;