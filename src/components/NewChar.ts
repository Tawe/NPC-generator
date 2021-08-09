import getRace from './GetRace';
import getName from './GetName';
import getAge from './GetAge';
import getOccupation from './GetOccupation';
import getTrait from './GetTrait';
import getStats, { StatsProps } from './GetStats';
interface characterProps {
    name: string;
    race: string;
    age: string;
    occupation: string;
    trait: string;
    stats: StatsProps;
}

interface RaceProps {
    name: string;
    ageData: AgeProps;
    statModifier: StatsProps;
}
interface AgeProps {
    base: number;
    modifier: number;
}

export const newChar = (): characterProps => {
    const { name, ageData, statModifier }: RaceProps = getRace();
    return {
        name: getName(name),
        race: `${name.charAt(0).toUpperCase()}${name.slice(1)}`,
        age: getAge({ ...ageData }),
        occupation: getOccupation(),
        trait: getTrait(),
        stats: getStats(statModifier),
    };
};
