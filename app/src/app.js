import Angular from 'angular';
import Router from 'angular-route';
import Config from './config'
import LoginController from './controllers/login.controller';
import MainPageController from './controllers/main.page.controller';
import NowService from './services/now.service';
import AuthService from './services/auth.service';

var app = Angular.module('app', [Router])
    .config(Config)
    .controller('LoginController', LoginController)
    .controller('MainPageController',MainPageController)
    .service('NowService', NowService.NowFactory)
    .service('AuthService', AuthService.AuthFactory);
    
app.run(["$rootScope", "AuthService", "$location",
    function($rootScope, AuthService, $location) {
        $rootScope.$on("$routeChangeError", function(event, current, previous, rejection) {
        if (rejection == AuthService.UNAUTHORIZED) {
            $location.path("/login");
        } 
        else if (rejection == AuthService.FORBIDDEN) {
            $location.path("/forbidden");
        }
      });
}]);


