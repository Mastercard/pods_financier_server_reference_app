import React from 'react';
import { Router } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

import 'client/testUtils/window';
import reducers, { initialState } from 'client/behaviour/reducers';

import GatewayConfigurations from './GatewayConfigurations';

const headerTitleCls = '.ant-page-header-heading-title';

describe(GatewayConfigurations.name, () => {
  const defaultRoute = '/home/gateway-configurations';
  const indexRoute = `${defaultRoute}/index`;
  const addRoute = `${defaultRoute}/add`;
  const editRoute = `${defaultRoute}/123456`;

  const store = createStore(reducers, initialState);

  let history;

  let container;

  test(`should render for ${defaultRoute}`, () => {
    history = createMemoryHistory({ initialEntries: [defaultRoute] });

    ({ container } = render(
      <Provider store={store}>
        <Router history={history}>
          <GatewayConfigurations />
        </Router>
      </Provider>
    ));

    expect(container.querySelector(headerTitleCls).textContent).toEqual('Gateway Configurations');
  });

  test(`should render for ${indexRoute}`, () => {
    history = createMemoryHistory({ initialEntries: [indexRoute] });

    ({ container } = render(
      <Provider store={store}>
        <Router history={history}>
          <GatewayConfigurations />
        </Router>
      </Provider>
    ));

    expect(container.querySelector(headerTitleCls).textContent).toEqual('Gateway Configurations');
  });

  test(`should render for ${addRoute}`, () => {
    history = createMemoryHistory({ initialEntries: [addRoute] });

    ({ container } = render(
      <Provider store={store}>
        <Router history={history}>
          <GatewayConfigurations />
        </Router>
      </Provider>
    ));

    expect(container.querySelector(headerTitleCls).textContent).toEqual('Add Gateway Configuration');
  });

  test(`should render for ${editRoute}`, () => {
    history = createMemoryHistory({ initialEntries: [editRoute] });

    ({ container } = render(
      <Provider store={store}>
        <Router history={history}>
          <GatewayConfigurations />
        </Router>
      </Provider>
    ));

    expect(container.querySelector(headerTitleCls).textContent).toEqual('Edit Gateway Configuration');
  });

});