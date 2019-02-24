import { connect } from 'react-redux';
import AddProduct from '../components/AddProduct';

const mapDispatch = ({ products: { addProduct }}) => ({
  addProduct: (product,resetForm) => {addProduct(product); resetForm({});},
});

export default connect(null, mapDispatch)(AddProduct);