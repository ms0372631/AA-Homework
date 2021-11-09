import { SWITCH_LOCATION } from "./actions";

const initialState = {
  city: "Please Select", 
  jobs: []
};

const reducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SWITCH_LOCATION:
      let nextState = Object.assign({}, state);
      return [...nextState, action.city];
    default:
      return state;
  }
  return state; // remove this and fill out the body of the reducer function
};

let action = {
  type: "SWITCH_LOCATION",
  city: "remote",
  jobs: [
    {
      id: 1,
      title: "Test Job",
      company: "Github",
      type: "Full Time",
      location: "remote",
      description: "test description",
      url: "www.github.com/appacademy"
    }
  ]
};
reducer(null, action);

export default reducer;
