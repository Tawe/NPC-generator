import rollDice from './DiceRoller';
import names from '../data/names.json';

export default (race: string): string => {
    const nameArray: string[] = Object.entries(names).filter((r) => r[0] === race)[0][1];
    return nameArray[rollDice(nameArray.length)];
};
