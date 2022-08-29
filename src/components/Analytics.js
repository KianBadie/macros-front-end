import SectionTitle from './SectionTitle';
import { VictoryPie } from 'victory';

function Analytics(props) {

    const ingredientList = props.ingredientList;

    function getTotalNutrientValue(nutrientId) {
        return ingredientList.reduce((total, ingredient) => {
            const food = ingredient.food;
            const amount = ingredient.amount;
            const nutrient = food.foodNutrients.find(el => el.nutrientId === nutrientId);
            const value = (nutrient.value / 100) * amount;
            return total + value;
        }, 0);
    }

    const totalCalories = getTotalNutrientValue(1008);
    const totalProtein = getTotalNutrientValue(1003);
    const totalCarbs = getTotalNutrientValue(1005);
    const totalFat = getTotalNutrientValue(1004);

    const chartData = [
        { nutrient: 'Protein', grams: totalProtein },
        { nutrient: 'Carbs', grams: totalCarbs },
        { nutrient: 'Fat', grams: totalFat },
    ];

    return (
        <div>
            <SectionTitle title='Analytics' />
            <p>{totalCalories} calories</p>
            <p>{totalProtein}g protein</p>
            <p>{totalCarbs}g carbs</p>
            <p>{totalFat}g fat</p>
            <VictoryPie
                data={chartData}
                x='nutrient' 
                y='grams'
            />
        </div>
    );
}

export default Analytics;