export const addUser = (data) => {
  return {
    type: "ADD_USER",
    payload: data,
  };
};

export const deleteUser = (id) => {
  return {
    type: "DELETE_USER",
    id,
  };
};

export const update = (data) => {
  return {
    type: "UPDATE",
    payload: data,
  };
};
