class LoginController {

    /*@ngInject*/
    constructor($scope) {

        this.$inject = ['$scope'];
    }
}

register('app').controller('LoginController', LoginController);
