class LoginController {

    constructor($scope, AuthService, $location) {
        $scope.validateCredentials = this._validateCredentials;
        $scope.authService = new AuthService();
        $scope.location = $location;
        $scope.isLoading = false;
        $scope.hasError = false;
    }

    _validateCredentials() {
        this.isLoading = true;

        let credentials = {
            instanceUrl: this.instanceUrl,
            account: this.account,
            password: this.password
        };

        this.authService.makeSampleHttpRequest(credentials)
            .then((response) => {
                console.log(response);
                if( response.status     == 200 &&
                    response.statusText == 'OK'){

                    this.authService.storeCredentials(credentials);
                    this.location.path('/');
                    this.isLoading = false;
                }
            })
            .catch((error) => {
                this.isLoading = false;
                this.hasError = true;
                console.log(error);
                //TODO(Olivier): Display error message
            })
    }

}

LoginController.$inject = ['$scope', 'AuthService', '$location'];

export default LoginController;
