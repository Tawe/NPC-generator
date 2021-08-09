import rollDice from './DiceRoller';
import races from '../data/races.json';

interface RaceReturnProps {
    name: string;
    ageData: AgeProps;
    statModifier: StatsProps;
}
interface RaceProps {
    ageData: AgeProps;
    statModifier: StatsProps;
}
export interface StatsProps {
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
}
interface AgeProps {
    base: number;
    modifier: number;
}
export default (): RaceReturnProps => {
    const keys: string[] = Object.keys(races);
    const num: number = rollDice(keys.length - 1);
    const [name, { ageData, statModifier }]: [string, RaceProps] = Object.entries(races).filter(
        (r) => r[0] === keys[num],
    )[0];
    return {
        name: name,
        ageData: ageData,
        statModifier: statModifier,
    };
};
