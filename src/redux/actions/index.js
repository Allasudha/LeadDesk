
import {subscribe} from 'mqtt-react';

export const addProduct = data => ({
  type: 'ADD_PRODUCT',
  data
});

export const editProduct = data => ({
  type: 'EDIT_PRODUCT',
  data
});