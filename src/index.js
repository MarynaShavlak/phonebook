import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'react-avatar';
import { App } from 'components/App';
import { GlobalStyle } from 'components/GlobalStyle';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import 'react-toastify/dist/ReactToastify.css';
import { getRandomColors } from 'utils/getRandomColor';
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider colors={getRandomColors()}>
          <App />
        </ConfigProvider>
        <GlobalStyle />
      </PersistGate>
    </Provider>
  </BrowserRouter>

  // </React.StrictMode>
);
