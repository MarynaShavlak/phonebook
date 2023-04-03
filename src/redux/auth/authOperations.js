import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as userAPI from 'services/userAPI';
import * as Notifications from 'utils/notifications';

const authHeader = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const userSignUp = createAsyncThunk(
  'user/userSignUp',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await userAPI.signUpRequest(credentials);
      // eslint-disable-next-line
      const tokin = data.token;

      authHeader.set(data.token);
      return data;
    } catch (error) {
      Notifications.showAuthError();
      return rejectWithValue(error.message);
    }
  }
);
export const userSignIn = createAsyncThunk(
  'user/userSignIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await userAPI.signInRequest(credentials);
      authHeader.set(data.token);
      return data;
    } catch (error) {
      Notifications.showAuthError();
      return rejectWithValue(error.message);
    }
  }
);
export const userLogOut = createAsyncThunk(
  'user/userLogOut',
  async (_, { rejectWithValue }) => {
    try {
      await userAPI.logOutRequest();
      authHeader.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const userInit = createAsyncThunk(
  'user/userInit',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) return rejectWithValue('Unable to fetch user');
    try {
      authHeader.set(persistedToken);
      const data = await userAPI.currentUserDetailsRequest();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const extraActions = [userSignUp, userSignIn, userLogOut, userInit];
export const getActions = type => extraActions.map(action => action[type]);
