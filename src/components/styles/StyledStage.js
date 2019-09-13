import styled from 'styled-components';

export const StyledStage = styled.div`
display: grid;
grid-template-rows: repeat(
    ${props => props.height},
    calc(20vw / ${props => props.width})
);

grid-template-columns: repeat(${props => props.width}, 1fr);
grid-gap: 0px;
border: 2px solid #333;
width: 100%;
max-width: 20vw;
background: rgba(0,0,0,0.2);
`