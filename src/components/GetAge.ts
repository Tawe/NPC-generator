import rollDice from './DiceRoller';
import { AgeProps } from './Interfaces';

export default ({ base, modifier }: AgeProps): string => `${base + rollDice(modifier)}`;
