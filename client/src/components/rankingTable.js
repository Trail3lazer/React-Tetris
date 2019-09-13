import React from 'react';
import { StyledTableData, StyledTableHeading } from './styles/StyledTable';

const Table = ({ rankings }) => (
 <table>
        <thead>
            <StyledTableHeading text="Score"/>
            <StyledTableHeading text="Name"/>
            <StyledTableHeading text="Rows"/>
        </thead>
        <tbody>
        {rankings.map((obj)=>
            <tr>
            {obj.map((text)=>
                <StyledTableData text={text}/>)}
            </ tr>
        )}
        </tbody>
    </table>
);

export default Table;