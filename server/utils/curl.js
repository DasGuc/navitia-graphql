import rp from 'request-promise';

const BASE_URL = 'https://api.navitia.io/v1/coverage';

export const instance = (token) => (uri, qs = {}) => {
  var options = {
    json: true,
    uri: `${BASE_URL}${uri}`,
    headers: {'Authorization': token},
    qs
  };

  return rp(options);
}