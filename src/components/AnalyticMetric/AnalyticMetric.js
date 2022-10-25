import styles from './AnalyticMetric.module.css';

function AnalyticMetric(props) {
    return (
        <div className={styles['analytic-metric']}>
            <h3 className={styles.title}>{props.title}</h3>
            <p className={styles.value}>{props.value}g</p>
        </div>
    );
}

export default AnalyticMetric;