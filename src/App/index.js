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

  onDragEnd = result => {
    const { destination, source, draggableId} = result;
    if(!destination) {
      return;
    }
    if(destination.draggableId === source.draggableId === draggableId.index) {
      return;
    }
    const column = this.state.columns[source.droppableId];
    const newHeroIds = Array.from(column.heroId);
    newHeroIds.splice(source.index, 1);
    newHeroIds.splice(destination.index, 0, draggableId);
    const newColumn = {
      ...column,
      heroId: newHeroIds,
    }
    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn,
      },
    };
    this.setState(newState);
  }

  render() {
    return (
      <Fragment>
        <Title>  
          <text>Avengers Infinity War</text>
        </Title>
        <DragDropContext onDragEnd={this.onDragEnd}>
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
