import SectionTitle from '../SectionTitle/SectionTitle';
import IngredientItem from '../IngredientItem/IngredientItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from './IngredientList.module.css';

function IngredientList(props) {

    const ingredientList = props.ingredientList.map(ingredient => (
        <CSSTransition
            key={ingredient.id}
            timeout={{
                enter: 1000,
                exit: 750
            }}
            classNames={{
                enter: styles['transition-enter'],
                enterActive: styles['transition-enter-active'],
                exit: styles['transition-exit'],
                exitActive: styles['transition-exit-active']
            }}
        >
            <IngredientItem
                ingredient={ingredient}
                modifyIngredient={props.modifyIngredient}
                deleteIngredient={props.deleteIngredient}
            />
        </CSSTransition>
    ));

    return (
        <div className={styles['ingredient-list']}>
            <SectionTitle title='Ingredient List' />
            <TransitionGroup component='ul' className={styles.list}>
                {ingredientList}
            </TransitionGroup>
        </div>
    );
}

export default IngredientList;