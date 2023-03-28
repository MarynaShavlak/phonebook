import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';
import { Loader } from 'components';
import { ToastContainer } from 'react-toastify';
import { AppBar } from 'components/AppBar/AppBar';

export const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        {/* <Suspense fallback={null}> */}
        {/* <Container> */}
        <Outlet />
        {/* </Container> */}
      </Suspense>
      <ToastContainer
        position="bottom-right"
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover={false}
        theme="colored"
        autoClose={4000}
        style={{ width: '400px', fontSize: '20px', lineHeight: '1.2' }}
      />
    </>
  );
};
