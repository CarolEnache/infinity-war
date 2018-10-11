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

const Container = styled.div`
  display: flex;
`;

class App extends Component {
  state = data;

  onDragEnd = result => {
    console.log(this.state)
    const { destination, source, draggableId} = result;
    if(!destination) {
      return;
    }
    if(destination.draggableId === source.draggableId === draggableId.index) {
      return;
    }
    const begin = this.state.columns[source.droppableId];
    const end = this.state.columns[destination.droppableId];

    if(begin === end) {
      const newHeroIds = Array.from(begin.heroId);
      newHeroIds.splice(source.index, 1);
      newHeroIds.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...begin,
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
      return;
    }
    const beginHeroIds = Array.from(begin.heroId);
    beginHeroIds.splice(source.index, 1);
    const newBegin = {
      ...begin,
      heroId: beginHeroIds
    };

    const endHeroIds = Array.from(end.heroId);
    endHeroIds.splice(destination.index, 0, draggableId);
    const newEnd = {
      ...end,
      heroId: endHeroIds
    };
    console.log(newEnd.heroId.length)

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newBegin.id]: newBegin,
        [newEnd.id]: newEnd
      }
    }
    this.setState(newState);

  }

  render() {
    return (
      <Fragment>
        <Title>  
          <text>Avengers Infinity War</text>
        </Title>
        <DragDropContext onDragEnd={this.onDragEnd}>
        <Container>
          {this.state.columnsort.map(columnId => {
            const column = this.state.columns[columnId];
            const heroes = column.heroId.map(heroId => this.state.heroes[heroId]);
            return <Column key={Column.id} column={column} heroes={heroes} />;
          })}
        </Container>
        </DragDropContext>
      </Fragment>
    );
  }
}

export default App;
