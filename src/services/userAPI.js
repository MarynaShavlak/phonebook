import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function signUpRequest(user) {
  const { data } = await axios.post(`/users/signup`, user);
  return data;
}

export async function signInRequest(user) {
  const { data } = await axios.post(`/users/login`, user);
  return data;
}
export async function logOutRequest() {
  await axios.post(`/users/logout`);
}
export async function currentUserDetailsRequest() {
  const { data } = await axios.get(`/users/current`);
  return data;
}
