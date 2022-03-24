import { Router as BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { StylesProvider, jssPreset } from '@material-ui/core';
import rtl from 'jss-rtl';
import { create } from 'jss';
import React from "react";
import routes, { renderRoutes } from './routes';
import store from './redux/store';
import {Provider} from 'react-redux';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const history = createBrowserHistory();

export const App = () => {

  return (
      <Provider store={store}>
          <StylesProvider jss={jss}>
              <BrowserRouter history={history}>
                  {renderRoutes(routes)}
              </BrowserRouter>
          </StylesProvider>
      </Provider>
  );
};
