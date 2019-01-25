import HomePage from './modules/HomePage/container';
import Welcome from './modules/LoginPage/component/welcome/Welcome';
import Forgot from './modules/LoginPage/component/forgot/Forgot';
import Login from './modules/LoginPage/component/login/Login';
import Register from './modules/LoginPage/component/register/Register';

export const home = '/home';
export const register = '/register';
export const login = '/login';

const routes = [
    {
        path: '/',
        component: Login
    },
    {
        path: home,
        component: HomePage
    },
    {
        path: login,
        component: Login
    },
    {
        path: register,
        component: Register
    },
    {
        path: '/welcome',
        component: Welcome
    },
    {
        path: '/forgot',
        component: Forgot
    }
];

export default routes;
