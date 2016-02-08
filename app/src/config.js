import IndexMain from './views/index.main.html'


Routing.$inject = ['$stateProvider'];

export default function Routing($stateProvider) {
    $stateProvider
        .state('index', {
            url: "",
            template: IndexMain,
            controller: 'LoginController',
            controllerAs: 'login'
        })
}