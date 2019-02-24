import React from 'react';
import styled from 'styled-components';
import { string, func, bool, oneOfType, number } from 'prop-types';
import { Flex } from 'rebass';

const PropTypes = {
  placeholder: string,
  error: string,
  fieldName: string,
  onChange: func,
  onBlur: func,
  value: oneOfType([string, number]),
  type: string,
  width: string,
  disabled: bool,
};

const DefaultProps = {
  placeholder: '',
  error: '',
  value: '',
  type: 'text',
  disabled: 'false',
};

const Error = styled.div`
  font-size: 0.8rem;
  color: red;
  padding-left: 0.8rem;
  position: fixed;
`;

const Input = styled.input`
  border: 0.5px solid #864949;
  border-radius: 8px;
  padding: 12px;
  padding-left: 15px;
  margin: 15px 6px 15px 6px;
  font-size: 1rem;
  width:  ${props => (props.width ? props.width : '100px')};
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus {
    outline: 0;
  }
`;

const TextInput = props => {
  const {
    fieldName,
    placeholder,
    value,
    onChange,
    onBlur,
    type,
    error,
    width,
    disabled
  } = props;
  return (
    <Flex flexDirection="column">
      <Input
        min="1"
        placeholder={placeholder}
        name={fieldName}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        type={type}
        width={width}
        disabled={disabled}
      />
      <Error>{error}</Error>
    </Flex>
  );
};

TextInput.propTypes = PropTypes;
TextInput.defaultProps = DefaultProps;

export default TextInput;