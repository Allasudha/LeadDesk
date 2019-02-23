const productsData = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        ...action.payload,
     },
	 case 'EDIT_PRODUCT':
      return {
        ...state
     },
    default:
      return state
  }
}

export default productsData;