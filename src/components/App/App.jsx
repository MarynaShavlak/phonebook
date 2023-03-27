import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components';
const Home = lazy(() => import('pages/Home/Home'));
const Favourites = lazy(() => import('pages/Favourites/Favourites'));
const Groups = lazy(() => import('pages/Groups/Groups'));
const RecycleBin = lazy(() => import('pages/RecycleBin/RecycleBin'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const SignUp = lazy(() => import('pages/SignUp/SignUp'));
const LogIn = lazy(() => import('pages/LogIn/LogIn'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="groups" element={<Groups />} />
        <Route path="recycleBin" element={<RecycleBin />} />
        <Route path="register" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
