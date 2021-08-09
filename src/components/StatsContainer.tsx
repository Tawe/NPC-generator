import { ReactElement } from 'react';
import styled from 'styled-components';
import { StatsProps } from './Interfaces';

interface MyCodeParams {
    stats: StatsProps;
}

function StatsContainer({ stats }: MyCodeParams): ReactElement {
    const createDivs = () => {
        const divList = [];
        for (const [key, value] of Object.entries(stats)) {
            divList.push(
                <div key={key}>
                    <strong>
                        {key.charAt(0).toUpperCase()}
                        {key.slice(1)}: {}
                    </strong>
                    {value}
                </div>,
            );
        }
        return divList;
    };
    return <StatsContainerDiv>{createDivs()}</StatsContainerDiv>;
}

const StatsContainerDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    width: 40%;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export default StatsContainer;
