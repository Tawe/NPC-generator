import traits from '../data/traits.json';
import rollDice from './Diceroller';

const getTrait = (): string => {
    if (traits) {
        const tableNum: number = rollDice(traits.length) - 1;
        return traits[tableNum][rollDice(Object.keys(traits[tableNum]).length) - 1];
    }
    return 'Traits Not Found';
};

export default getTrait;
