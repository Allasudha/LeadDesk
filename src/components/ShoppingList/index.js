import React from 'react';
import { arrayOf, string, number, shape } from 'prop-types';
import ProductContainer from '../../containers/ProductContainer';

const PropTypes = {
  products: arrayOf(shape({name: string, amount: number})),
};

const DefaultProps = {
};

const ShoppingList = ({products, removeProduct, editProduct}) => {
  return (
  <React.Fragment>
    {products.map((product, idx) => (
      <ProductContainer key={idx} product={product} removeProduct={removeProduct} id={idx} editProduct={editProduct}/>
    ))}
  </React.Fragment>
)};

ShoppingList.propTypes = PropTypes;
ShoppingList.defaultProps = DefaultProps;

export default ShoppingList;