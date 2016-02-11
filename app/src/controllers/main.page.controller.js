import ClipboardHelper from '../utilities/clipboard';

class MainPageController{

    constructor($scope, NowService) {
        this.serviceNow = new NowService();

        //NOTE(Olivier): To avoid loading errors
        $scope.applications = [];
        $scope.loadingApplications = true;

        this.serviceNow.populateApplicationTableTree($scope);

        this.serviceNow.getLogsStartingWith('')
            .then((logs) => {
                console.log(logs);
                $scope.logs = logs;
            })
            .catch((error) => {
                console.log(error);
            });

        $scope.onTreeElementSelect = (branch) => {
            ClipboardHelper.copyToClipboard(branch.clipboardData);
        }
    }
}

MainPageController.$inject = ['$scope', 'NowService'];

export default MainPageController;
