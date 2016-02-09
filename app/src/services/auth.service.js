class AuthService {

    constructor($http) {
        this.$http = $http;
    }

    static AuthFactory($http) {
        return function () {
            return new AuthService($http);
        }
    }

    IsLoggedIn() {
        return new Promise((resolve, reject)=> {
           reject(AuthService.UNAUTHORIZED);
        });
    }
}

AuthService.AuthFactory.$inject = ['$http'];
AuthService.AuthFactory.prototype.UNAUTHORIZED = 'UNAUTHORIZED';
AuthService.AuthFactory.prototype.FORBIDDEN = 'FORBIDDEN';


export default AuthService;