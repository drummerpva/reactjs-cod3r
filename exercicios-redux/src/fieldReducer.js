const INITIAL_STATE = {
  value: "Opa Aqui"
};
export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'VALUE_CHANGED':
      return {value: action.payload};
    
    default: 
      return state;
  }
};

