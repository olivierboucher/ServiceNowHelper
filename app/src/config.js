import IndexMain from './views/index.main.html';
import LoginMain from './views/login.main.html';


Routing.$inject = ['$routeProvider'];

export default function Routing($routeProvider) {
    $routeProvider
        .when('/',{
            template: IndexMain,
            controller:'MainPageController',
            /*resolve: {
                access: ["AuthService", (AuthService) => new AuthService().isLoggedIn() ]
            }*/
        })
        .when('/login', {
            template: LoginMain,
            controller: 'LoginController'
        })
        .otherwise('/');
}