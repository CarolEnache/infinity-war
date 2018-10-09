import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Hero from '../Hero';
import styled from 'styled-components';

const Container = styled.div`
  margin: 10px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  width: 33%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  padding: 10px;
`;

const HeroList = styled.div`
  padding: 10px;
  flex-grow: 1;
  min-height: 100px;
`;

export default class Column extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
        {(provided) => (
          <HeroList 
            innerRef={provided.innerRef}
            {...provided.droppableProps}
          >
            {this.props.heroes.map((hero, index) => <Hero key={hero.id} hero={hero} index={index}/>)}
          </HeroList>
        )}
        </Droppable>
      </Container>
    );
  }
}
