import SectionTitle from './SectionTitle';
import AnalyticMetric from './AnalyticMetric';
import { VictoryPie, VictoryLabel } from 'victory';

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

    return (
        <div>
            <SectionTitle title='Analytics' />
            <div className={styles['nums-container']}>
                <AnalyticMetric title='Protein' value={totalProtein}/>
                <AnalyticMetric title='Carbs' value={totalCarbs}/>
                <AnalyticMetric title='Fat' value={totalFat}/>
            </div>
            <svg viewBox='0 0 400 400'>
                <VictoryPie
                    standalone={false}
                    data={chartData}
                    labels={({datum}) => [datum.nutrient, `${Math.round(datum.calories)} cal`]}
                    x='nutrient' 
                    y='calories' 
                    padding={64}
                    colorScale={['#9cff97', '#897eff', '#ff6f6f']} 
                    innerRadius={96}
                    padAngle={2}
                    animate={{ duration: 500 }}
                    style={{ labels: { fontFamily: 'Roboto', fontWeight: 300 } }}
                />
                <VictoryLabel
                    textAnchor='middle'
                    style={{ fontFamily: 'Roboto', fontWeight: 300 }}
                    x={200} y={200}
                    text={['Calculated Calories', `${Math.round(calculatedCalories)} cal`]}
                />
            </svg>
        </div>
    );
}

export default Analytics;