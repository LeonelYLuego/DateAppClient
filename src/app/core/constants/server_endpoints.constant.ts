const SERVER_URL = 'http://localhost:5206/Api';

const SERVER_RESOURCE = {
  USERS: SERVER_URL + '/Users',
  ACCOUNT: SERVER_URL + '/Account',
  BUGGY: SERVER_URL + '/Buggy',
};

export const SERVER_ENDPOINTS = {
  USERS: {
    BASE_ENDPOINT: SERVER_RESOURCE.USERS,
    BY_USERNAME: (username: string) => `${SERVER_RESOURCE.USERS}/${username}`,
  },
  ACCOUNT: {
    LOG_IN: SERVER_RESOURCE.ACCOUNT + '/LogIn',
    REGISTER: SERVER_RESOURCE.ACCOUNT + '/Register',
  },
  BUGGY: {
    AUTH: SERVER_RESOURCE.BUGGY + '/Auth',
    NOT_FOUND: SERVER_RESOURCE.BUGGY + '/NotFound',
    SERVER_ERROR: SERVER_RESOURCE.BUGGY + '/ServerError',
    BAD_REQUEST: SERVER_RESOURCE.BUGGY + '/BadRequest',
  },
};
