import { getRace, getAge } from './GetRace';
import getName from './GetName';
import getOccupation from './GetOccupation';
import getTrait from './GetTrait';
interface characterProps {
    name: string;
    race: string;
    age: string;
    occupation: string;
    trait: string;
}

export const newChar = (): characterProps => {
    const race: string = getRace();
    return {
        name: getName(race),
        race: `${race.charAt(0).toUpperCase()}${race.slice(1)}`,
        age: getAge(race),
        occupation: getOccupation(),
        trait: getTrait(),
    };
};
