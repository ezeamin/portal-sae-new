export const loginAdapter = (APIInfo) => {
    const formattedInfo = {
        // id: APIInfo.data.id,
        // username: APIInfo.data.name,
        accessToken: APIInfo.data.access_token,
        refreshToken: APIInfo.data.refresh_token,
    };
    
    return formattedInfo;
}