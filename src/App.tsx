import { ReactChild, useState } from 'react';
import styled from 'styled-components';
import races from './data/races.json';
import occupation from './data/occupations.json';
import traits from './data/traits.json';
import names from './data/names.json';

interface characterProps {
    name: string;
    race: string;
    age: string;
    occupation: string;
    trait: string;
}
function App(): ReactChild {
    const rollDice = (num: number): number => Math.floor(Math.random() * num) + 1;
    const getTrait = (): string => {
        if (traits) {
            const tableNum = rollDice(traits.length) - 1;
            return traits[tableNum][rollDice(Object.keys(traits[tableNum]).length) - 1];
        }
        return 'Traits Not Found';
    };
    const getName = (race: string): string => {
        const nameArray = Object.entries(names).filter((r) => r[0] === race)[0][1];
        return nameArray[rollDice(nameArray.length) - 1];
    };
    const getOccupation = (): string => occupation[rollDice(occupation.length) - 1];
    const getRace = (): string => {
        if (races) {
            const keys = Object.keys(races);
            const num = rollDice(keys.length - 1);
            return keys[num];
        }
        return 'Races Not Found';
    };
    const getAge = (race: string): string => {
        if (races) {
            const [, ages] = Object.entries(races).filter((r) => r[0] === race)[0];
            return `${ages.base + rollDice(ages.modifier)}`;
        }
        return 'Races Not Found';
    };

    const newChar = (): characterProps => {
        const race = getRace();
        return {
            name: getName(race),
            race: `${race.charAt(0).toUpperCase()}${race.slice(1)}`,
            age: getAge(race),
            occupation: getOccupation(),
            trait: getTrait(),
        };
    };
    const [character, setCharacter] = useState(newChar());
    return (
        <Background className="App">
            <Container>
                <h1>NPC Generator</h1>
                <Name>
                    <strong>{character && character.name}</strong>
                </Name>
                <div>
                    <strong>Age: </strong>
                    {character && character.age}
                </div>
                <div>
                    <strong>Race: </strong>
                    {character && character.race}
                </div>
                <div>
                    <strong>Occupation: </strong>
                    {character && character.occupation}
                </div>
                <div>
                    <strong>Trait: </strong>
                    {character && character.trait}
                </div>
                <Button onClick={() => setCharacter(newChar())}>New NPC</Button>
            </Container>
        </Background>
    );
}

const Background = styled.div`
    background-color: white;
    width: 100%;
    height: 100%;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: space-evenly;
    font-family: MedievalSharp;
    font-size: 18px;
    padding: 20px;
`;

const Name = styled.div`
    font-size: 24px;
`;

const Button = styled.button`
    width: 200px;
    border-radius: 6px;
    border: 1px solid #eee;
    display: inline-block;
    cursor: pointer;
    color: 000;
    font-size: 15px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
    &:hover {
        color: forestgreen;
    }
`;

export default App;
