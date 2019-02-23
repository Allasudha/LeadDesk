
import * as R from 'ramda';

export const getError = (propName, touched, errors) => {
  const hasTouched = R.prop(propName, touched);
  const errs = R.prop(propName, errors);
  return hasTouched && errs ? errs : null;
};