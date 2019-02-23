import styled from 'styled-components';
import { Flex, Text } from 'rebass';
import React from 'react';
import LogoImg from '../../assets/logo.png';

const Logo = styled.img`
  align-self: flex-start;
  position: relative;
  padding: 10px;
  width: 200px;
  height: 200px;
`;

const PageHeader = () => (
  <Flex justifyContent="center">
    <Logo src={LogoImg}/>
    <Text alignSelf="center" fontSize={[ 35, 50, 50, 60 ]} letterSpacing={[ 2, 3, 3, 4 ]} fontWeight='bold' color='#864949'>Shopping List</Text>
  </Flex>
);

export default PageHeader;
