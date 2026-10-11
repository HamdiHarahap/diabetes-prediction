export const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

export const putAccessToken = (token) => {
  return localStorage.setItem('accessToken', token);
};

export const getRefreshToken = () => {
  return localStorage.getItem('refreshToken');
};

export const putRefreshToken = (token) => {
  return localStorage.setItem('refreshToken', token);
};
