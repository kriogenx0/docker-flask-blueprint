import { API_URL } from '../constants';
import BaseRequest from './BaseRequest';

const base = API_URL + 'v1/stores';

export default {
  index: () => {
    return BaseRequest.get(base);
  },
  show: rollout => {
    return BaseRequest.get(base + '/' + rollout);
  },
  update: (rollout, params) => {
    return BaseRequest.put(base + '/' + rollout).send(params);
  }
};
