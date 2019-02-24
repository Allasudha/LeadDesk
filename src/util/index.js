
import * as R from 'ramda';
import * as yup from 'yup';

export const getError = (propName, touched, errors) => {
  const hasTouched = R.prop(propName, touched);
  const errs = R.prop(propName, errors);
  return hasTouched && errs ? errs : null;
};

export const mapPropsToValues = ({product}) => 
	({
	    name: product ? product.name : '',
	    amount: product ? product.amount : '',
	});

export const validationSchema = yup.object().shape({
    name: yup
        .string()
        .required('*Product name is required'),
    amount: yup.number().required('*Amount is required'),
});