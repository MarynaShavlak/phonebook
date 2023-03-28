import React, { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  SharedLayout,
  PrivateRoute,
  RestrictedRoute,
  Loader,
} from 'components';

import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import * as authOperations from 'redux/auth/authOperations';
const Home = lazy(() => import('pages/Home/Home'));
const Favourites = lazy(() => import('pages/Favourites/Favourites'));
const Groups = lazy(() => import('pages/Groups/Groups'));
const RecycleBin = lazy(() => import('pages/RecycleBin/RecycleBin'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const SignUp = lazy(() => import('pages/SignUp/SignUp'));
const LogIn = lazy(() => import('pages/LogIn/LogIn'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.userRefresh());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route
          path="/favourites"
          element={
            <PrivateRoute redirectTo="/login" component={<Favourites />} />
          }
        />
        <Route
          path="/groups"
          element={<PrivateRoute redirectTo="/login" component={<Groups />} />}
        />
        <Route
          path="/recyclebin"
          element={
            <PrivateRoute redirectTo="/login" component={<RecycleBin />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LogIn />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<SignUp />} />
          }
        />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
