import IndexMain from './views/index.main.html'
import Logs from './views/logs.html';
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
        })
        .when('/logs',{
            template: Logs,
            controller:'MainPageController',
            resolve: {
                access: ["AuthService", (AuthService) => new AuthService().IsLoggedIn() ]
            }
        });

}