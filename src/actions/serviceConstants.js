//server-side endpoints
export const TOKEN_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/token' : '';
export const FW_ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api/v1/Framework' : '';

export const API_CONSUMER_KEY = "";
export const API_SECRET = "";