import Cookies from "js-cookie"

// Verify is logged or not
export const isLogged = () => {
    let token = Cookies.get('token');
    return (token) ? true : false;
}

