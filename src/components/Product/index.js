import React from 'react';
import { string, number, object, func } from 'prop-types';
import { Flex, Button } from 'rebass';
import { withFormik } from 'formik';
import styled from 'styled-components';
import TextInput from '../TextInput';
import { getError, mapPropsToValues, validationSchema } from '../../util';

const PropTypes = {
  values: object.isRequired,
  errors: object.isRequired,
  touched: object.isRequired,
  handleChange: func.isRequired,
  handleBlur: func.isRequired,
  handleSubmit:func.isRequired,
  removeProduct: func.isRequired,
  id: number.isRequired,
  buttonText: string.isRequired,
  mode: string.isRequired,
};

const Form = styled.form`
  margin: 0 20px;
  display: flex;
`;

const Product = ({
    removeProduct, 
    id,
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

const handleSubmit = (values,
  { props },
) => {
  const { onSave, id } = props;
  onSave( id,values );
};

export default withFormik({ enableReinitialize: true, validationSchema, mapPropsToValues, handleSubmit })(
  Product,
);
