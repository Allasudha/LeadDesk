
import { compose, withProps, withState } from 'recompose';
import { connect } from 'react-redux';
import Product from '../components/Product';

const mapStateToProps = state =>  state.products;

const productContainer= compose(
  connect(mapStateToProps,null),
  withState("editMode","setEditMode","false"),
  withProps((props)=>({
        onSave: (id,values) =>{
            props.setEditMode(!props.editMode);
            const valuesWithId=values;
            valuesWithId.id=id;
            if(props.products[id].name!==values.name || props.products[id].amount!==values.amount)
             {
              props.editProduct(valuesWithId);
              props.setEditMode(!props.editMode);
             }
        },
      })
  )
);

export default productContainer(Product);
