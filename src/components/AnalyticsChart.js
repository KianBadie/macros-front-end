import { VictoryPie, VictoryLabel } from 'victory';

import styles from './AnalyticsChart.module.css';

function AnalyticsChart(props) {

    const data = props.data;
    const label = props.label;

    return (
        <svg viewBox='0 0 400 400' className={styles.chart}>
            <filter id='drop-shadow'>
                <feDropShadow dx='0' dy='0' stdDeviation='2' floodColor='#000' floodOpacity='0.4'/>
            </filter>
            <VictoryPie
                standalone={false}
                data={data}
                labels={({datum}) => [datum.x, `${Math.round(datum.y)} cal`]}
                padding={64}
                colorScale={props.colorScale} 
                innerRadius={96}
                padAngle={2}
                animate={{ duration: 500 }}
                style={{ 
                    labels: { fontFamily: 'Roboto', fontWeight: 300 }, 
                    data: { filter: 'url(#drop-shadow)' }
                }}
            />
            <VictoryLabel
                textAnchor='middle'
                style={{ fontFamily: 'Roboto', fontWeight: 300 }}
                x={200} y={200}
                text={label}
            />
        </svg>
    );
}

export default AnalyticsChart;