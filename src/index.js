import React from 'react';
// import { createRoot } from 'react-dom/client';
import ReactDOM from "react-dom";
import 'modern-normalize/modern-normalize.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './../src/Redux/store';
import './index.css';
import App from './components/App';

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// const container = document.getElementById('app');
// const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App tab="home"/>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);