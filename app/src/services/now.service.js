class NowService {
    constructor($http, credentials) {
        this.$http = $http;
        this.credentials = credentials;
    }

    static NowFactory($http) {
        return function(credentials) {
            return new NowService($http, credentials);
        }
    }
}

NowService.NowFactory.$inject = ['$http'];

export default NowService;