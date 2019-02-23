import React, { Component } from 'react';
import { Flex } from 'rebass';
import PageHeader from './components/PageHeader';
import Header from './components/Header';
import ShoppingListContainer from './containers/ShoppingListContainer';
import AddProductContainer from './containers/AddProductContainer';

class App extends Component {
  render() {
    return (
     <Flex justifyContent="center" flexDirection="column" alignItems="center">    	
	  <PageHeader/>
	  <Header columns={["Product Name","Amount"]}/>
	  <ShoppingListContainer/>
	  <AddProductContainer/>
	 </Flex>
    );
  }
}

export default App;
