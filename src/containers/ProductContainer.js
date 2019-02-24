
import { compose, withProps, withState } from 'recompose';
import { connect } from 'react-redux';
import Product from '../components/Product';

const mapStateToProps = state =>  state.products;

const productContainer= compose(
  connect(mapStateToProps,null),
  withState("editMode","setEditMode",false),
  withProps(console.log),
  withProps((props)=>({
        onSave: (id,values) =>{
            props.setEditMode(!props.editMode);
            const valuesWithId=values;
            valuesWithId.id=id;
            props.editProduct(valuesWithId);
        },
      })
  )
);

export default productContainer(Product);
