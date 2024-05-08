import styles from './Topic.module.scss';
import { ITopic } from './topic.props';
import cn from 'classNames';

const Topic:React.FC<ITopic> = ({children, className, ...props}) => {
    return (
        <p className={cn(styles.topic, className)} {...props}>{children}</p>
    )
}

export default Topic;