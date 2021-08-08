import rollDice from './DiceRoller';
import occupation from '../data/occupations.json';

const getOccupation = (): string => occupation[rollDice(occupation.length)];
export default getOccupation;
