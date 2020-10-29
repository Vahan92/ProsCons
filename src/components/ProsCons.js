import React from 'react';
import List from './List';
import styled from "styled-components";

const ProsCons = () => (
  <Container>
    <h1>Should I eat at McDonalds?</h1>
    <div>
      <List title="Pros" />
      <List title="Cons" />
    </div>
  </Container>
);

const Container = styled.div`
max-width: 1000px;
border: 1px solid black;
margin: auto;
height: 600px;
overflow-y: scroll;
  > h1 {
    padding: 40px 0;
    background-color: darkgrey;
    width: 100%;
    text-align: center;
    color: white;
  }
  > div {
    display: flex;
  }
`;

export default ProsCons;