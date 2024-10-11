const CREATE_ITINERARY = 'CREATE_ITINERARY';
const DELETE_ITINERARY = 'DELETE_ITINERARY';
const EDIT_ITINERARY = 'EDIT_ITINERARY';

const initialState = {
  itineraries: [],
};

const itineraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ITINERARY:
      return {
        ...state,
        itineraries: [...state.itineraries, action.payload], // add new itinerary
      };
    case DELETE_ITINERARY:
      return {
        ...state,
        itineraries: state.itineraries.filter(
          (itinerary) => itinerary.id !== action.payload
        ), 
      };
    case EDIT_ITINERARY:
      return {
        ...state,
        itineraries: state.itineraries.map((itinerary) =>
          itinerary.id === action.payload.id ? action.payload : itinerary
        ), 
      };
    default:
      return state;
  }
};

export const createItinerary = (itinerary) => ({
  type: CREATE_ITINERARY,
  payload: itinerary,
});

export const deleteItinerary = (id) => ({
  type: DELETE_ITINERARY,
  payload: id,
});

export const editItinerary = (itinerary) => ({
  type: EDIT_ITINERARY,
  payload: itinerary,
});

export default itineraryReducer;

