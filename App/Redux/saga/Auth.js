import {call, put, takeEvery} from 'redux-saga/effects';
import {LoginwithMobile, validateOtp} from '../Api';
import Toast from 'react-native-simple-toast';
import {StackActions} from '@react-navigation/native';
function* doLogin(action) {
  {
    const data = action.mobile;

    const response = yield call(LoginwithMobile, data);
    if (response.status == true) {
      yield put({
        type: 'Login_Success',
        payload: response.SrNo,
      });
      Toast.show('OTP sent succesfully');
      action.navigation.navigate('otp');
    } else {
      yield put({
        type: 'Login_Error',
      });
      Toast.show(response.msg);
    }
  }
}

function* checkOpt(action) {
  // console.log(action.SrNo);
  // console.log(action.otp);
  const response = yield call(validateOtp, action.otp, action.SrNo);
  if (response.status == true) {
    yield put({
      type: 'Otp_Success',
    });

    action.navigation.dispatch(StackActions.replace('main'));
    Toast.show('Login Success...');
  } else {
    yield put({
      type: 'Otp_Error',
    });
    Toast.show(response.message);
  }
}

export default function* authSaga() {
  yield takeEvery('User_Login_Request', doLogin);
  yield takeEvery('VAlidate_Otp', checkOpt);
}
