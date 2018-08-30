import Router from '@cerebral/router'
// import * as sequences from '../app/sequences'

export interface RoutesItem {
  path: string
  signal: string
}

export interface IRoutes {
  routes: [{ [key: string]: RoutesItem }]
}

export const routes = Router({
  routes: [
    {
      path: '/',
      signal: 'testapi',
    },
    {
      path: '/login',
      signal: 'incremented',
    },
    {
      // Params are passed as props to the signal.
      // Query parameters are also passed as props
      path: '/fee/:feeId',
      signal: 'app.feeRouted',
    },
    {
      path: '/fees',
      signal: 'app.feesRouted',
    },
  ],
})
