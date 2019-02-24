import React from 'react';
import { arrayOf, string, number, shape, func } from 'prop-types';
import ProductContainer from '../../containers/ProductContainer';

const PropTypes = {
    products: arrayOf(shape({ name: string, amount: number })).isRequired,
    removeProduct: func.isRequired,
    editProduct: func.isRequired,
};

const ShoppingList = ({products, removeProduct, editProduct}) => {
  return (
  <React.Fragment>
    {products.map((product, idx) => (
      <ProductContainer key={idx+product.name} product={product} removeProduct={removeProduct} id={idx} editProduct={editProduct}/>
    ))}
  </React.Fragment>
)};

ShoppingList.propTypes = PropTypes;

export default ShoppingList;