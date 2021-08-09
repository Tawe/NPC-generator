import rollDice from './DiceRoller';

export interface StatsProps {
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
}

export default (statModifier: StatsProps): StatsProps => ({
    str: rollAStat() + statModifier.str,
    dex: rollAStat() + statModifier.dex,
    con: rollAStat() + statModifier.con,
    int: rollAStat() + statModifier.int,
    wis: rollAStat() + statModifier.wis,
    cha: rollAStat() + statModifier.cha,
});
const rollAStat = (): number => {
    const statArray: number[] | undefined = [1, 2, 3, 4].map(() => rollDice(6) + 1).sort();
    statArray.shift();
    return statArray.reduce((a, b) => a + b, 0);
};
