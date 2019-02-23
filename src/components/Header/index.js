import styled from 'styled-components';
import { Flex, Text, Box as RebBox} from 'rebass';
import React from 'react';
import { defaultProps } from 'recompose';
import LogoImg from '../../assets/logo.png';

const Box = defaultProps({
  alignSelf: 'left',
  fontSize: '25px',
  letterSpacing: '1px',
  fontWeight: 'bold',
  fontWeight: 600,
  borderRadius: '2rem',
  bg:'#864949',
  color:'white',
  width: '310px',
  py: 1,
  px: 3,
  mt: 3,
  mb: 1,
  css: {
    border : '1px solid #864949',
  },
})(RebBox);

const Line = styled.hr`
  border: 2px solid #864949;
  width: 620px;
`;

const getColumn=(column,width,id)=> <Box key={id} width={width}>{column}</Box>;

const Header = ({columns,width}) => (
 <React.Fragment> 
  <Flex justifyContent="left">
    {columns.map((column,id)=>getColumn(column,width,id))}
  </Flex>
  <Line/>
 </React.Fragment> 
);

export default Header;
