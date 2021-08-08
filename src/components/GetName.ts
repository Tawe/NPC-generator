
import rollDice from "./Diceroller";
import names from '../data/names.json';

const getName = (race: string): string => {
    const nameArray: string[] = Object.entries(names).filter((r) => r[0] === race)[0][1];
    return nameArray[rollDice(nameArray.length) - 1];
};

export default getName;
