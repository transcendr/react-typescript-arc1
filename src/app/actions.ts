import {
  request,
  RequestHandlerResponse,
  RequestHandlerOptions,
} from '../util/api'

// import { Dictionary } from '@cerebral/fluent'

// type Item = {
//   count: number
// }
// type State = {
//   items: Dictionary<Item>
// }

export function increment({ state }: any) {
  state.set('count', state.get('count') + 1)
}

export function decrement({ state }: any) {
  state.set('count', state.get('count') - 1)
}

export function reset({ state }: any) {
  state.set('count', 0)
}

export function testapi({ state }: any) {
  const options: RequestHandlerOptions = {
    url: 'https://demo0433378.mockable.io/test',
  }
  request(options).then((val: RequestHandlerResponse) => {
    if (val.status) {
      state.set('gettest', val.data)
    }
  })
}
