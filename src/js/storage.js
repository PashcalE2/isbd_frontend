
export function getAuthenticated() {
    // console.log("Storage get call: " + sessionStorage.authenticated);
    return sessionStorage.authenticated === "true";
}

export function setAuthenticated(status = false) {
    sessionStorage.authenticated = status;
    // console.log("Storage set call: " + sessionStorage.authenticated);
}

export function getUserLogin() {
    // console.log("Storage get call: " + sessionStorage.login);
    return sessionStorage.login;
}

export function getUserPassword() {
    // console.log("Storage get call: " + sessionStorage.password);
    return sessionStorage.password;
}

export function setUser(user_login = "admin", user_password = "admin") {
    sessionStorage.login = user_login;
    sessionStorage.password = user_password;

    //console.log("Storage set call: ", sessionStorage.login, sessionStorage.password);
}