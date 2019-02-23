import React from 'react';
import { string, number, shape } from 'prop-types';
import { Flex, Button,Text } from 'rebass';
import { withFormik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import { defaultProps } from 'recompose';
import TextInput from '../TextInput';
import AddProduct from '../AddProduct';
import {getError} from '../../util';

const PropTypes = {
  
};

const DefaultProps = {
};

const Form = styled.form`
  margin: 0 20px;
  display: flex;
`;

const Product = ({
    removeProduct, 
    id,
    onEdit,
    buttonText,
    mode,
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  }) => 
  <Flex>
  <Form onSubmit={handleSubmit}>
          <TextInput
            placeholder="name"
            type="string"
            fieldName="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            error={getError('name', touched, errors)}
            width="300px"
            disabled={mode==="view"? true : false}
          />
          <TextInput
            placeholder="amount"
            type="number"
            fieldName="amount"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.amount}
            error={getError('amount', touched, errors)}
            width="60px"
            disabled={mode==="view"? true : false}
          />
           <Button m={2} bg='#864949' type="button" onClick={()=>removeProduct(id)}>Remove</Button>
           <Button m={2} bg='#864949' type="submit">{buttonText}</Button>
          </Form>
        </Flex>


Product.propTypes = PropTypes;
Product.defaultProps = DefaultProps;

const handleSubmit = (values,
  { props },
) => {
  const { onSave, id } = props;
  onSave( id,values );
};
const mapPropsToValues = ({product}) => ({
  name: product.name,
  amount: product.amount,
});
const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('*Product name is required'),
  amount: yup.number().required('*Amount is required'),
});
export default withFormik({ enableReinitialize: true,validationSchema, handleSubmit, mapPropsToValues })(
  Product,
);
