
const SERVER_URL = "http://localhost:22600/lab4-final"

export const MY_APIS = {
    POINTS_URL: SERVER_URL + "/points",

    GET_POINTS_URL: function (r) {
      return SERVER_URL + "/points/" + r;
    },

    TEST_URL: SERVER_URL + "/test",
    REGISTER_URL: SERVER_URL + "/register",
    LOGIN_URL: SERVER_URL + "/login",
    LOGOUT_URL: SERVER_URL + "/logout"
}
