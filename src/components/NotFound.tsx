import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position:absolute;
  left:50%;
  top:50%;
  transform:translate(-50%, -50%);
  font-size:48px;

  span{
    border-right: 1px solid #0008;
    margin-right:  1rem;
    padding-right: 1rem;
  }
`;

const NotFound = () => {
  return <Container> <span>404</span>Page not found</Container>
}

export default NotFound;