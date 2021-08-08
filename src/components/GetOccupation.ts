import rollDice from './DiceRoller';
import occupation from '../data/occupations.json';

const getOccupation = (): string => occupation[rollDice(occupation.length) - 1];
export default getOccupation;
