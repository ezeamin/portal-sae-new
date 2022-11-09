export const updateUserAdapter = (data) => {
  const formattedInfo = {
    firstName: data.name,
    lastName: data.lastname,
    email: data.email,
  };

  return formattedInfo;
};

export const responseUpdateUserAdapter = (APIInfo) => {
  const formattedInfo = {
    name: APIInfo.firstName,
    lastname: APIInfo.lastName,
    email: APIInfo.email,
    number: APIInfo.username,
  };

  return formattedInfo;
};

export const updatePasswordAdapter = (data) => {
    const formattedInfo = {
        oldPassword: data.currentPass,
        newPassword: data.newPass,
    };
    
    return formattedInfo;
}