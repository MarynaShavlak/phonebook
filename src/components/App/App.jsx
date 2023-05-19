import React, { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from 'constants';
import { PrivateRoute, RestrictedRoute, Loader } from 'components';
import { SharedLayout } from 'shared';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from 'hooks';
import * as authOperations from 'redux/auth/authOperations';
import { selectIsLoading } from 'redux/auth/selectors';
import { useChangeSortType } from 'hooks';
import SortContext from 'contexts/sortContext.js';
const Home = lazy(() => import('../../pages/Home/Home.jsx'));
const Favorites = lazy(() => import('../../pages/Favorites/Favorites.jsx'));
const Groups = lazy(() => import('../../pages/Groups/Groups.jsx'));
const RecycleBin = lazy(() => import('../../pages/RecycleBin/RecycleBin.jsx'));
const Contacts = lazy(() => import('../../pages/Contacts/Contacts.jsx'));
const SignUp = lazy(() => import('../../pages/SignUp/SignUp.jsx'));
const LogIn = lazy(() => import('../../pages/LogIn/LogIn.jsx'));
const AddNewContact = lazy(() =>
  import('../../pages/AddNewContact/AddNewContact.jsx')
);
const EditContact = lazy(() =>
  import('../../pages/EditContact/EditContact.jsx')
);
const ManageGroupMember = lazy(() =>
  import('../../pages/ManageGroupMember/ManageGroupMember.jsx')
);

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  const isLoading = useSelector(selectIsLoading);
  const sortContextValue = useChangeSortType();

  useEffect(() => {
    dispatch(authOperations.userInit());
  }, [dispatch]);

  if (isLoading) return <Loader />;

  return isRefreshing ? (
    <Loader />
  ) : (
    <SortContext.Provider value={sortContextValue}>
      <Routes>
        <Route path={ROUTES.ROOT} element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path={ROUTES.CONTACTS}
            element={
              <PrivateRoute redirectTo={ROUTES.ROOT} component={<Contacts />} />
            }
          />
          <Route
            path={ROUTES.CREATE}
            element={
              <PrivateRoute
                redirectTo={ROUTES.ROOT + ROUTES.LOGIN}
                component={<AddNewContact />}
              />
            }
          />
          <Route
            path={ROUTES.EDIT_CONTACT + '/:contactId'}
            element={
              <PrivateRoute
                redirectTo={ROUTES.ROOT + ROUTES.LOGIN}
                component={<EditContact />}
              />
            }
          />
          <Route
            path={ROUTES.FAVORITES}
            element={
              <PrivateRoute
                redirectTo={ROUTES.ROOT + ROUTES.LOGIN}
                component={<Favorites />}
              />
            }
          />
          <Route
            path={ROUTES.GROUPS}
            element={
              <PrivateRoute
                redirectTo={ROUTES.ROOT + ROUTES.LOGIN}
                component={<Groups />}
              />
            }
          />
          <Route
            path={ROUTES.MANAGE_GROUP_MEMBERS + '/:groupName'}
            element={
              <PrivateRoute
                redirectTo={ROUTES.ROOT + ROUTES.LOGIN}
                component={<ManageGroupMember />}
              />
            }
          />

          <Route
            path={ROUTES.RECYCLEBIN}
            element={
              <PrivateRoute
                redirectTo={ROUTES.ROOT + ROUTES.LOGIN}
                component={<RecycleBin />}
              />
            }
          />
          <Route
            path={ROUTES.LOGIN}
            element={
              <RestrictedRoute
                redirectTo={ROUTES.ROOT + ROUTES.CONTACTS}
                component={<LogIn />}
              />
            }
          />
          <Route
            path={ROUTES.REGISTER}
            element={
              <RestrictedRoute
                redirectTo={ROUTES.ROOT + ROUTES.CONTACTS}
                component={<SignUp />}
              />
            }
          />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </SortContext.Provider>
  );
};
