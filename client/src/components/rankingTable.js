import React from 'react';
import { StyledTableData, StyledTableHeading } from './styles/StyledTable';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("api/ranks")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.ranks
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <table>
                    <thead>
                        <StyledTableHeading text="Score" />
                        <StyledTableHeading text="Name" />
                        <StyledTableHeading text="Rows" />
                    </thead>
                    <tbody>
                        {rankings.map((obj) =>
                            <tr>
                                {obj.map((text) =>
                                    <StyledTableData text={text} />)}
                            </ tr>
                        )}
                    </tbody>
                </table>
            );
        }
    }
};

    export default Table;