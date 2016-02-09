import IndexMain from './views/index.main.html'
import Logs from './views/logs.html';

Routing.$inject = ['$routeProvider'];

export default function Routing($routeProvider) {
    $routeProvider
        .when('/', {
            template: IndexMain,
            controller: 'LoginController'
        })
    .when('/logs',{
        template: Logs,
        controller:'MainPageController'
    });

}