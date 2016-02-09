class LogsController{

    constructor($scope, NowService) {
        this.serviceNow = new NowService();
        $scope.logs = this.serviceNow.GetLogs();
    }
}

LogsController.$inject = ['$scope', 'NowService'];

export default LogsController;
