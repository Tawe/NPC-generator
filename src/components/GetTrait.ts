import rollDice from './DiceRoller';
import traits from '../data/traits.json';
export default (): string => {
    if (traits) {
        const tableNum: number = rollDice(traits.length);
        return traits[tableNum][rollDice(Object.keys(traits[tableNum]).length)];
    }
    return 'Traits Not Found';
};
