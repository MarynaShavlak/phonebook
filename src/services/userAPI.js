import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function signUpRequest(user) {
  const { data } = await axios.post(`/users/signup`, user);
  return data;
}

export async function signInRequest(user) {
  const { data } = await axios.post(`/users/signin`, user);
  return data;
}
export async function logOutRequest() {
  const { data } = await axios.post(`/users/logout`);
  console.log('data: ', data);
  return data;
}
export async function currentUserDetailsRequest() {
  const { data } = await axios.post(`/users/current`);
  console.log('data: ', data);
  return data;
}
