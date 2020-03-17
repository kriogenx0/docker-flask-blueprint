import superagent from 'superagent';

const reload = () => window.location.reload();

const middleware = request => {
  request.on('error', error => {
    if ((error + '').indexOf('the network is offline') > -1) reload();
  });

  request.on('response', response => {
    if (response.status == 302) {
      reload();
    } else if (response.status == 403) {
      const message = 'You do not have permissions for this action';
      alert(message);
      console.warn(message, response);
      // window.location = '/';
    }
  });
};

export default {
  get: (url) => {
    return superagent.get(url).use(middleware);
  },
  post: (url) => {
    return superagent.post(url).use(middleware);
  },
  put: (url) => {
    return superagent.put(url).use(middleware);
  },
  patch: (url) => {
    return superagent.patch(url).use(middleware);
  },
  del: (url) => {
    return superagent.del(url).use(middleware);
  }
}
