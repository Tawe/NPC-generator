import { ReactChild, useState } from 'react';
import styled from 'styled-components';
import newChar from './components/NewChar';

function App(): ReactChild {
    const [character, setCharacter] = useState(newChar());
    return (
        <Background className="App">
            <Container>
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
            </Container>
            <Button onClick={() => setCharacter(newChar())}>New NPC</Button>
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
    height: 160px;
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
