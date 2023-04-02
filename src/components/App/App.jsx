import React, { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  SharedLayout,
  PrivateRoute,
  RestrictedRoute,
  Loader,
} from 'components';

import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from 'hooks';
import * as authOperations from 'redux/auth/authOperations';
import { selectIsLoading } from 'redux/auth/selectors';
const Home = lazy(() => import('pages/Home/Home'));
const Favorites = lazy(() => import('pages/Favorites/Favorites'));
const Groups = lazy(() => import('pages/Groups/Groups'));
const RecycleBin = lazy(() => import('pages/RecycleBin/RecycleBin'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const SignUp = lazy(() => import('pages/SignUp/SignUp'));
const LogIn = lazy(() => import('pages/LogIn/LogIn'));
const AddNewContact = lazy(() => import('pages/AddNewContact/AddNewContact'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  const IsLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(authOperations.userInit());
  }, [dispatch]);

  if (IsLoading) return <Loader />;

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route
          path="/create"
          element={
            <PrivateRoute redirectTo="/login" component={<AddNewContact />} />
          }
        />

        <Route
          path="favorites"
          element={
            <PrivateRoute redirectTo="/login" component={<Favorites />} />
          }
        />
        <Route
          path="groups"
          element={<PrivateRoute redirectTo="/login" component={<Groups />} />}
        />
        <Route
          path="recyclebin"
          element={
            <PrivateRoute redirectTo="/login" component={<RecycleBin />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LogIn />} />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<SignUp />} />
          }
        />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
