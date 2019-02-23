// @flow
import React from 'react';
import * as R from 'ramda';
import { Flex, Button } from 'rebass';
import { withFormik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import TextInput from '../TextInput';
import Header from '../Header';

type Props = {
  handleSubmit: () => void,
};

const Form = styled.form`
  margin: 0 20px;
  display: flex;
`;

const getError = (propName, touched, errors) => {
  const hasTouched = R.prop(propName, touched);
  const errs = R.prop(propName, errors);
  return hasTouched && errs ? errs : null;
};

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

const handleSubmit = (values,
  { props },
) => {
  const { addProduct } = props;
  addProduct( values );
};
const mapPropsToValues = () => ({
  name: '',
  amount: '',
});
const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('*Product name is required'),
  amount: yup.number().required('*Amount is required'),
});
export default withFormik({ validationSchema, handleSubmit, mapPropsToValues })(
  AddProduct,
);
