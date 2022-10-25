import styles from './ChartFilter.module.css';

function ChartFilter(props) {
    return (
        <button
            className={styles.btn}
            aria-pressed={props.isPressed}
            onClick={() => props.setChartFilter(props.name)}
        >
            {props.name}
        </button>
    );
}

export default ChartFilter;