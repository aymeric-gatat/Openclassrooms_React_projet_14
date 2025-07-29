const initialState = {
  isModalOpen: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, isModalOpen: true, errorMessage: "" };
    case "CLOSE_MODAL":
      return { ...state, isModalOpen: false, errorMessage: "" };
    case "ERROR":
      return { ...state, isModalOpen: true, errorMessage: action.errorMessage };
    default:
      return state;
  }
};

export default modalReducer;
