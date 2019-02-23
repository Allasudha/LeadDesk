import { connect } from 'react-redux';
import AddProduct from '../components/AddProduct';

const mapDispatch = ({ products: { addProduct }}) => ({
  addProduct: (product) => addProduct(product),
});

export default connect(null, mapDispatch)(AddProduct);