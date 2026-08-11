const USER_KEY = "user";
const TOKEN_KEY = "token";


export const saveAuthData = (user, token) => {
    localStorage.setItem(
        USER_KEY,
        JSON.stringify(user)
    );

    localStorage.setItem(
        TOKEN_KEY,
        token
    );
};


export const getUser = () => {
    const user = localStorage.getItem(USER_KEY);

    return user ? JSON.parse(user) : null;
};


export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
};


export const clearAuthData = () => {
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(TOKEN_KEY);
};