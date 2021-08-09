import rollDice from './DiceRoller';
import races from '../data/races.json';
import { RaceProps, RaceDataProps } from './Interfaces';

export default (): RaceProps => {
    const keys: string[] = Object.keys(races);
    const num: number = rollDice(keys.length - 1);
    const [name, { ageData, statModifier }]: [string, RaceDataProps] = Object.entries(races).filter(
        (r) => r[0] === keys[num],
    )[0];
    console.log({
        name: name,
        raceData: {
            ageData: ageData,
            statModifier: statModifier,
        },
    });
    return {
        name: name,
        raceData: {
            ageData: ageData,
            statModifier: statModifier,
        },
    };
};
