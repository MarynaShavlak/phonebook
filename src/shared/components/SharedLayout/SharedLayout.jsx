import { Suspense } from 'react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Loader, AppBar } from 'components';
import { Section } from 'shared';
import { ContentWrapper, Main } from 'shared/commonStyledComponents.jsx';
import { StyledContainer } from 'shared/commonStyledComponents';

export const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Main>
        <Section>
          <ContentWrapper>
            {/* <Suspense> */}
            <Outlet />
            {/* </Suspense> */}
          </ContentWrapper>
        </Section>
      </Main>

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
