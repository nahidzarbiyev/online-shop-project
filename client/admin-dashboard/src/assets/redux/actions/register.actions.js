import axios from "../../helpers/axios";
import { registerConstants } from "./constants";

export const signup = (user) => {
  console.log(user);
  return async (dispatch) => {
    dispatch({ type: registerConstants.REGISTER_REQUEST });
    const res = await axios.post("/admin/signup", {
      ...user,
    });

    if (res.status === 201) {
      const { message } = res.data;

      dispatch({
        type: registerConstants.REGISTER_SUCCESS,
        payload: {
          message,
        },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: registerConstants.REGISTER_FAILED,
          payload: {
            error: res.data.error,
          },
        });
      }
    }
  };
};
