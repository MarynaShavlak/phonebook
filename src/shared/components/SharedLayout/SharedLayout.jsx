import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components';
// import { ToastContainer } from 'react-toastify';
import { StyledContainer } from 'shared/commonStyledComponents';

export const SharedLayout = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        {/* <Suspense fallback={null}> */}
        {/* <Container> */}
        <Outlet />
        {/* </Container> */}
      </Suspense>

      <StyledContainer
        position="bottom-right"
        newestOnTop={false}
        closeOnClick
        pauseOnHover={false}
        theme="light"
        autoClose={3000}
      />
      {/* <ToastContainer
        position="bottom-right"
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover={false}
        theme="light"
        autoClose={4000}
        // style={{ width: '400px', fontSize: '20px', lineHeight: '1.2' }}
      /> */}
    </>
  );
};
