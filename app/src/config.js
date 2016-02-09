import IndexMain from './views/index.main.html';
import LoginMain from './views/login.main.html';


Routing.$inject = ['$routeProvider'];

export default function Routing($routeProvider) {
    $routeProvider
        .when('/', {
            template: IndexMain,
            controller: 'LoginController'
        })
        .when('/login', {
            template: LoginMain,
            controller: 'LoginController'
        });
}