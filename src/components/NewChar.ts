import getRace from './GetRace';
import getName from './GetName';
import getAge from './GetAge';
import getOccupation from './GetOccupation';
import getTrait from './GetTrait';
import getStats from './GetStats';
import { CharacterProps, RaceProps } from './Interfaces';

export const newChar = (): CharacterProps => {
    const { name, raceData }: RaceProps = getRace();
    return {
        name: getName(name),
        race: `${name.charAt(0).toUpperCase()}${name.slice(1)}`,
        age: getAge(raceData.ageData),
        occupation: getOccupation(),
        trait: getTrait(),
        stats: getStats(raceData.statModifier),
    };
};
