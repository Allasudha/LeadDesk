import React from 'react';
import { Flex, Button } from 'rebass';
import { func, object } from 'prop-types';
import { withFormik } from 'formik';
import styled from 'styled-components';
import TextInput from '../TextInput';
import Header from '../Header';
import { getError, mapPropsToValues, validationSchema } from '../../util';

const PropTypes = {
  values: object.isRequired,
  errors: object.isRequired,
  touched: object.isRequired,
  handleChange: func.isRequired,
  handleBlur: func.isRequired,
  handleSubmit:func.isRequired,
};

const Form = styled.form`
  margin: 0 20px;
  display: flex;
`;

const AddProduct = (props) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  return (
    <Flex flexDirection="column">
        <Header columns={["Add New Product"]} width="620px"/>
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
            disabled={false}
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
            disabled={false}
          />
          <Button my={3} mx={1} px={4} bg='#864949' type="submit"> ADD </Button>
        </Form>
    </Flex>
  );
};

AddProduct.propTypes = PropTypes;

const handleSubmit = (values,
  { props },
) => {
  const { addProduct } = props;
  addProduct( values );
};

export default withFormik({ validationSchema, handleSubmit, mapPropsToValues })(
  AddProduct,
);
