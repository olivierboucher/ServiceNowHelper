Routing.$inject = ['$routeProvider'];

export default function Routing($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/src/views/index.main.html',
            controller: 'LoginController'
        });
}