import IndexMain from './views/index.main.html'


Routing.$inject = ['$routeProvider'];

export default function Routing($routeProvider) {
    $routeProvider
        .when('/', {
            template: IndexMain,
            controller: 'LoginController'
        });
}