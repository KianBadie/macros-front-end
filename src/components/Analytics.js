import SectionTitle from './SectionTitle';
import AnalyticMetric from './AnalyticMetric';
import AnalyticsChart from './AnalyticsChart';

import styles from './Analytics.module.css';

function Analytics(props) {

    const ingredientList = props.ingredientList;

    function getTotalNutrientValue(nutrientId) {
        const totalNutrientValue = ingredientList.reduce((total, ingredient) => {
            const food = ingredient.food;
            const amount = ingredient.amount;
            const nutrient = food.foodNutrients.find(el => el.nutrientId === nutrientId);
            const value = (nutrient.value / 100) * amount;
            return total + value;
        }, 0);
        
        return Math.round(totalNutrientValue * 100) / 100;
    }

    const totalProtein = getTotalNutrientValue(1003);
    const calProtein = totalProtein * 4;
    const totalCarbs = getTotalNutrientValue(1005);
    const calCarbs = totalCarbs * 4;
    const totalFat = getTotalNutrientValue(1004);
    const calFat = totalFat * 9;
    const calculatedCalories = calProtein + calCarbs + calFat;

    const chartData = [
        { nutrient: 'Protein', calories: calProtein },
        { nutrient: 'Carbs', calories: calCarbs },
        { nutrient: 'Fat', calories: calFat },
    ];
    const chartLabel = ['Calculated Calories', `${Math.round(calculatedCalories)} cal`];

    return (
        <div>
            <SectionTitle title='Analytics' />
            <div className={styles['nums-container']}>
                <AnalyticMetric title='Protein' value={totalProtein}/>
                <AnalyticMetric title='Carbs' value={totalCarbs}/>
                <AnalyticMetric title='Fat' value={totalFat}/>
            </div>
            <AnalyticsChart data={chartData} label={chartLabel}/>
        </div>
    );
}

export default Analytics;