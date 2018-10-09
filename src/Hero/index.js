import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: whitesmoke;
`;

export default class Hero extends React.Component {
  render() {
    return (
      <Draggable 
        draggableId={this.props.hero.id}
        index={this.props.index}
      >
      {(provided) => (
        <Container
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        innerRef={provided.innerRef}
        >
        {this.props.hero.name}
        </Container>
      )}
      </Draggable>
    );
  }
}
