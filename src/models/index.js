export const products = {
  state: {products:[{name:"Bread",amount: 10},
    {name:"Meat",amount: 20},
    {name:"Pasta",amount: 20},
    {name:"Pizza",amount: 30},
    {name:"Yogurt",amount: 10}]}, // initial state
  reducers: {
    addProduct(state, payload) {
      return { ...state,
               products: [...state.products, payload] }
    },
    editProduct(state, payload) {
     const producs = state.products;
     producs[payload.id]=payload;
     return { ...state,
               products: [...producs]}
    },
     removeProduct(state, payload) {
      return {
        ...state,
        ...state.products.splice( payload, 1 )
      }
    }, 
  }
}