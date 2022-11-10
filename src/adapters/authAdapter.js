export const loginAdapter = (APIInfo) => {
  const formattedInfo = {
    user: APIInfo.data.user,
    accessToken: APIInfo.data.access_token,
    refreshToken: APIInfo.data.refresh_token,
  };

  return formattedInfo;
};

export const userAdapter = (APIInfo) => {
  const formattedInfo = {
    name: APIInfo.firstName,
    lastname: APIInfo.lastName,
    email: APIInfo.email,
    number: APIInfo.username,
    activeModules: APIInfo.modules || [],
    notifications: 2, // TODO: Traer del back
  };

  return formattedInfo;
};
