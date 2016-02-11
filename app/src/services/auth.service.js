class AuthService {

    constructor($http) {
        this.$http = $http;
        this.authentication = localStorage.getItem('authentication');
        this.instanceUrl = localStorage.getItem('instanceUrl');
    }

    static AuthFactory($http) {
        return function () {
            return new AuthService($http);
        }
    }

    makeSampleHttpRequest(credentials) {
        let config = {
            method: 'GET',
            url: credentials.instanceUrl + '/api/now/pa/scorecards',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(credentials.account + ':' + credentials.password)
            }
        };

        return this.$http(config);
    }

    storeCredentials(credentials) {
        let auth = btoa(credentials.account + ':' + credentials.password);
        this.authentication = auth;
        this.instanceUrl = credentials.instanceUrl;
        localStorage.setItem('instanceUrl', credentials.instanceUrl);
        localStorage.setItem('authentication', auth);
    }

    getAuthenticatedConfig() {
        if(!this.isLoggedIn()){
            return null;
        }

        return {
            url: this.instanceUrl,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + this.authentication
            }
        }
    }

    isLoggedIn() {
        return new Promise((resolve, reject)=> {
            if(this.authentication === null ||
               this.authentication === undefined ||
               typeof this.authentication !== 'string'){

                return reject(AuthService.UNAUTHORIZED);
            }
            resolve(true);
        });
    }
}

AuthService.AuthFactory.$inject = ['$http'];
//TODO: Add babel stage-0 for static vars and clean this, I don't care atm
AuthService.AuthFactory.prototype.UNAUTHORIZED = 'UNAUTHORIZED';
AuthService.AuthFactory.prototype.FORBIDDEN = 'FORBIDDEN';


export default AuthService;