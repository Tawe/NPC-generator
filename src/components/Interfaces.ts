export interface CharacterProps {
    name: string;
    race: string;
    age: string;
    occupation: string;
    trait: string;
    stats: StatsProps;
}

export interface StatsProps {
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
}

export interface RaceProps {
    name: string;
    raceData: RaceDataProps;
}

export interface RaceDataProps {
    ageData: AgeProps;
    statModifier: StatsProps;
}

export interface AgeProps {
    base: number;
    modifier: number;
}
