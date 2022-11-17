export const baseUrlList = {
  AUTH: process.env.REACT_APP_BACK_BASE_URL + process.env.REACT_APP_AUTH_BASE_URL,
  USERS:  process.env.REACT_APP_BACK_BASE_URL + process.env.REACT_APP_USERS_BASE_URL,
  WRITINGS:  process.env.REACT_APP_BACK_BASE_URL + process.env.REACT_APP_WRITINGS_BASE_URL,
};

export const baseUrlTypes = {
    AUTH: 'AUTH',
    USERS: 'USERS',
    WRITINGS: 'WRITINGS',
}
