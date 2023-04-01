const intialState = '';
export default (state = intialState, action) => {
  switch (action.type) {
    case 'User_Login_Request':
      return {...state, isFetching: true};
    case 'Login_Success':
      return {...state, isFetching: false, data1: action.payload};
    case 'Login_Error':
      return {...state, isFetching: false};
    case 'VAlidate_Otp':
      return {...state, isFetching: true};
    case 'Otp_Success':
      return {...state, isFetching: false};
    case 'Otp_Error':
      return {...state, isFetching: false};
    default:
      return {...state, isFetching: false};
  }
};
