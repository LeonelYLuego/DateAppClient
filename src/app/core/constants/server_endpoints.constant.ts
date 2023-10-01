const SERVER_URL = 'https://localhost:7276/Api';

const SERVER_RESOURCE = {
  USERS: SERVER_URL + '/Users',
  ACCOUNT: SERVER_URL + '/Account',
};

export const SERVER_ENDPOINTS = {
  USERS: {
    BASE_ENDPOINT: SERVER_RESOURCE.USERS,
  },
  ACCOUNT: {
    LOG_IN: SERVER_RESOURCE.ACCOUNT + '/LogIn',
    REGISTER: SERVER_RESOURCE.ACCOUNT + '/Register',
  },
};
