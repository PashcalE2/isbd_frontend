
const False = "0";
const True = "1";

function isTrue(status) {
    return status !== False;
}

export function getAuthenticated() {
    return isTrue(sessionStorage.authenticated);
}

export function setAuthenticated(status = false) {
    sessionStorage.authenticated = status ? True : False;
}

export function getClient() {
    return sessionStorage.client;
}

export function setClient(id, login, email, phone_number, password) {
    sessionStorage.client = {
        id: id,
        login: login,
        email: email,
        phone_number: phone_number,
        password: password,
    };
}

export function clearClient() {
    setAuthenticated(false);
    sessionStorage.client = null;
}
