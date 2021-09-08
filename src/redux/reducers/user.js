import { toast } from "react-toastify";
let initState = {
  user: [],
};
const user = (state = initState, action) => {
  // debugger;
  switch (action.type) {
    case "ADD_USER":
      console.log(action);

      // const { id, name, email, password, mobile } = action.payload;
      // console.log("...state.user", typeof state.user, state.user);
      // alert("User added successfully.");
      toast.success("User added successfully.");
      return {
        ...state,

        user: action.payload,
      };
    case "DELETE_USER":
      let delUser = state.user.filter((e) => e.id !== action.id);
      toast.success("User deleted successfully.");
      return {
        ...state,
        user: delUser,
      };

    case "UPDATE":
      // const { id, name, email, password, mobile } = action.payload;
      // let item = [...state.user].find((e) => e.id === action.payload.id);
      // console.log(item);
      // if (item) {

      return {
        ...state,
        user: action.payload,
      };
    // }
    // return state;

    default:
      return state;
  }
};

export default user;
