
import { compose, withProps, withState } from 'recompose';
import { connect } from 'react-redux';
import Product from '../components/Product';

const mapStateToProps = state =>  state.products;

const productContainer= compose(
  connect(mapStateToProps,null),
  withState("buttonText","setButtonText","Edit"),
  withState("mode","setMode","view"),
  withProps((props)=>({
        onSave: (id,values) =>{
            props.setButtonText("Save");
            props.setMode("edit");
            const valuesWithId=values;
            valuesWithId.id=id;
            if(props.products[id].name!==values.name || props.products[id].amount!==values.amount)
             {
              props.editProduct(valuesWithId);
              props.setButtonText("Edit");
              props.setMode("view");
             }
        },
      })
  )
);

export default productContainer(Product);
