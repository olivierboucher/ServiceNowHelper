class LoginController {

    constructor($scope, AuthService, $location) {
        $scope.validateCredentials = this._validateCredentials;
        $scope.authService = new AuthService();
        $scope.location = $location;
    }

    _validateCredentials() {
        let credentials = {
            instanceUrl: this.instanceUrl,
            account: this.account,
            password: this.password
        };
        console.log(credentials);

        console.log(this);
        this.authService.makeSampleHttpRequest(credentials)
            .then((response) => {
                console.log(response);
                if( response.status     == 200 &&
                    response.statusText == 'OK'){

                    this.authService.storeCredentials(credentials);
                    this.location.path('/');
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

}

LoginController.$inject = ['$scope', 'AuthService', '$location'];

export default LoginController;
