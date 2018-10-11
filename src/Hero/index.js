import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: whitesmoke;
  box-shadow: 2px 2px 5px 2px #ccc;
  transition: all 0.3s ease;  
  &:hover {
      box-shadow: 2px 4px 5px 2px #ccc;
      padding: 12px;

  }
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
