import React, { Component, Fragment } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import data from '../Data';
import Column from '../Column';
import styled from 'styled-components';

const Title = styled.div`
  text-align: center;
  margin-top: 5px;
  padding: 10px;
`;

class App extends Component {
  state = data;
  render() {
    return (
      <Fragment>
        <Title>  
          <text>Avengers Infinity War</text>
        </Title>
        <DragDropContext>
          {this.state.columnsort.map(columnId => {
            const column = this.state.columns[columnId];
            const heroes = column.heroId.map(heroId => this.state.heroes[heroId]);
            return <Column key={Column.id} column={column} heroes={heroes} />;
          })}
        </DragDropContext>
      </Fragment>
    );
  }
}

export default App;
