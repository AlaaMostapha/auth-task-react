import { call, put } from "redux-saga/effects";
import { postLogin } from "../../network/api/login";
import { return_user_data } from "../actions/login";

function* handleLogin(action) {
  try {
    const response = yield call(postLogin, action.payload.user);
    console.log("response data in saga", response.data.data);
    yield put(return_user_data(response.data.data.user));
  } catch (error) {
    // console.log(error);
  }
}

export { handleLogin };
