class MainPageController{

    constructor($scope, NowService) {
        this.serviceNow = new NowService();
        $scope.logs = this.serviceNow.GetLogs().result;
        $scope.applications = this.serviceNow.GetTables().result;
        $scope.treeData = [
            {
                label: 'Table 1',
                children: [
                    {
                        label: 'Column 1-1'
                    }, {
                        label: 'Column 1-2'
                    }, {
                        label: 'Column 1-3'
                    }
                ]
            }, {
                label: 'Table 2',
                children: [
                    {
                        label: 'Column 2-1'
                    }, {
                        label: 'Column 2-2'
                    }, {
                        label: 'Column 2-3'
                    }
                ]
            }
        ];
    }
}

MainPageController.$inject = ['$scope', 'NowService'];

export default MainPageController;
