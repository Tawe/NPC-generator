import rollDice from './DiceRoller';
import races from '../data/races.json';
const getRace = (): string => {
    if (races) {
        const keys: string[] = Object.keys(races);
        const num: number = rollDice(keys.length - 1);
        return keys[num];
    }
    return 'Races Not Found';
};

interface AgeProps {
    base: number;
    modifier: number;
}

const getAge = (race: string): string => {
    if (races) {
        const [, ages]: [string, AgeProps] = Object.entries(races).filter((r) => r[0] === race)[0];
        return `${ages.base + rollDice(ages.modifier)}`;
    }
    return 'Races Not Found';
};

export { getRace, getAge };
