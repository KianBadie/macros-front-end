import { useState } from 'react';
import SectionTitle from './SectionTitle/SectionTitle';
import AnalyticMetric from './AnalyticMetric';
import ChartFilter from './ChartFilter';
import AnalyticsChart from './AnalyticsChart';

import styles from './Analytics.module.css';

const CHART_PALETTES = {
    Macros: ['#9cff97', '#897eff', '#ff6f6f'],
    Sugar: ['#6253ff', '#a59dff']
};

function Analytics(props) {

    const [chartFilter, setChartFilter] = useState('Macros');

    const ingredientList = props.ingredientList;

    function getTotalNutrientValue(nutrientId) {
        const totalNutrientValue = ingredientList.reduce((total, ingredient) => {
            const food = ingredient.food;
            const amount = ingredient.amount;
            const nutrient = food.foodNutrients.find(el => el.nutrientId === nutrientId);
            const value = nutrient ? (nutrient.value / 100) * amount : 0;
            return total + value;
        }, 0);
        
        return Math.round(totalNutrientValue * 100) / 100;
    }

    const totalProtein = getTotalNutrientValue(1003);
    const calProtein = totalProtein * 4;
    const totalCarbs = getTotalNutrientValue(1005);
    const calCarbs = totalCarbs * 4;
    const totalSugar = getTotalNutrientValue(2000);
    const calSugar = totalSugar * 4;
    const totalFat = getTotalNutrientValue(1004);
    const calFat = totalFat * 9;
    const calculatedCalories = calProtein + calCarbs + calFat;

    const chartData = {
        Macros: [
            { x: 'Protein', y: calProtein },
            { x: 'Carbs', y: calCarbs },
            { x: 'Fat', y: calFat }
        ], 
        Sugar: [
            { x: 'Sugar', y: calSugar },
            { x: 'Non-sugar', y: calculatedCalories - calSugar }
        ]
    };

    const chartLabel = ['Calculated Calories', `${Math.round(calculatedCalories)} cal`];

    const chartFilterList = Object.keys(chartData).map((filter) => (
        <ChartFilter
            key={filter}
            name={filter}
            isPressed={filter === chartFilter}
            setChartFilter={setChartFilter}
        />
    ));

    return (
        <div>
            <SectionTitle title='Analytics' />
            <div className={styles['nums-container']}>
                <AnalyticMetric title='Protein' value={totalProtein}/>
                <AnalyticMetric title='Carbs' value={totalCarbs}/>
                <AnalyticMetric title='Fat' value={totalFat}/>
            </div>
            <div className={styles['filter-container']}>
                {chartFilterList}
            </div>
            <AnalyticsChart 
                data={chartData[chartFilter]} 
                label={chartLabel}
                colorScale={CHART_PALETTES[chartFilter]}
            />
        </div>
    );
}

export default Analytics;