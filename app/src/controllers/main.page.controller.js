import ClipboardHelper from '../utilities/clipboard';

class MainPageController{

    constructor($scope, NowService) {
        this.serviceNow = new NowService();
        $scope.logs = this.serviceNow.GetLogs().result;
        this.serviceNow.getApplicationTableTree()
            .then((applications) => {
                console.log(applications);
                $scope.applications = applications;
            })
            .catch((error) => {
                console.log(error);
            });
        $scope.onTreeElementSelect = (branch) => {
            console.log(branch);
            ClipboardHelper.copyToClipboard(branch.clipboardData);
        }
    }
}

MainPageController.$inject = ['$scope', 'NowService'];

export default MainPageController;
