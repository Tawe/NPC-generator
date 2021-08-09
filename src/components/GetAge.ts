import rollDice from './DiceRoller';
interface AgeProps {
    base: number;
    modifier: number;
}
export default ({ base, modifier }: AgeProps): string => `${base + rollDice(modifier)}`;
