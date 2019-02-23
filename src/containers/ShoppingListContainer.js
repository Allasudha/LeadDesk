import { connect } from 'react-redux';
import ShoppingList from '../components/ShoppingList'

const mapStateToProps = state =>  state.products;

const mapDispatchToProps = ({ products: { removeProduct, editProduct }}) => ({
  removeProduct: (id) => removeProduct(id),
  editProduct: (id,values) => editProduct(id,values),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);