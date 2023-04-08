import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ConfigProvider } from 'react-avatar';
import { App } from 'components/App';
import { GlobalStyle } from 'components/GlobalStyle';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { theme } from './constants';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter
    // basename="/phonebook/"
    >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <ConfigProvider
              colors={['#ef4287', '#f2c94c', '#bb6bd9', '#9b51e0', '#f787b4']}
            >
              <App />
            </ConfigProvider>
          </ThemeProvider>

          <GlobalStyle />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
