import mainurl from '../Constant';
export const LoginwithMobile = async mobile => {
  const axios = require('axios');

  try {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${mainurl}/customer//login?Mobile1=${mobile}`,
      headers: {},
    };

    const data = await axios.request(config);
    return data.data;
  } catch (error) {
    throw error;
  }
};
export const validateOtp = async (otp, SrNo) => {
  try {
    const axios = require('axios');
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://olocker.co/api//customer//validateOTP?OTP=${otp}&SrNo=${SrNo}`,
      headers: {},
    };
    const response = await axios.request(config);
    return response.data;
    //console.log(otp, SrNo);
  } catch (err) {
    return err;
  }
};

export const Registration = () => {
  var formdata = new FormData();
  formdata.append('mobile', '7898789885');
  formdata.append('email', 'tests123123gmail.com');
  formdata.append('firstName', 'testable');
  formdata.append('lastName', 'user');

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow',
  };

  fetch('https://olocker.co/api//customer//registration', requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
};
