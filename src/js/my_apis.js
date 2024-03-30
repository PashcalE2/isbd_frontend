
const SERVER_URL = "http://localhost:22600/isbd_backend"

export const MY_APIS = {
    POINTS_URL: SERVER_URL + "/points",

    GET_POINTS_URL: function (r) {
      return SERVER_URL + "/points/" + r;
    },

    CLIENT: {
        REGISTER_URL: SERVER_URL + "/client_register",
        LOGIN_URL: SERVER_URL + "/client_login",
        LOGOUT_URL: SERVER_URL + "/client_logout"
    }
}
