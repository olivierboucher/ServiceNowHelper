class MainPageController{

    constructor($scope, NowService) {
        this.serviceNow = new NowService();
        $scope.logs = this.serviceNow.GetLogs().result;
        console.log($scope.logs);
        $scope.tables = this.serviceNow.GetTables().result;
        console.log($scope.tables);
    }
}

MainPageController.$inject = ['$scope', 'NowService'];

export default MainPageController;
