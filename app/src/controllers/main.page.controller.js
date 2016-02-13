import ClipboardHelper from '../utilities/clipboard';

class MainPageController {

    constructor($scope, $timeout, NowService) {
        let serviceNow = new NowService();

        //NOTE(Olivier): To avoid loading errors
        $scope.applications = [];
        $scope.loadingApplications = true;

        serviceNow.populateApplicationTableTree($scope);

        serviceNow.getLogsStartingWith('')
            .then((logs) => {
                console.log(logs);
                $scope.logs = logs;
            })
            .catch((error) => {
                console.log(error);
            });

        $scope.onTreeElementSelect = (branch) => {
            ClipboardHelper.copyToClipboard(branch.clipboardData);

            console.log(branch.data);


            //We have a table
            if (branch.data.foreign_database === undefined) {
                console.log("we have a table");
                $scope.selected = {
                    "type":"Table",
                    "sys_id":branch.data.sys_id,
                    "label":branch.data.label,
                    "name": branch.data.name,
                    "access":branch.data.access,
                    "extension model":branch.data.extension_model,
                    "date created":branch.data.sys_created_on,
                    "last updated":branch.data.sys_updated_on
                }
            }
            else {
                $scope.selected = {
                    "type":"Column",
                    "sys_id":branch.data.sys_id,
                    "data type":branch.data.internal_type.value,
                    "label":branch.data.column_label,
                    "name":branch.data.name,
                    "unique":branch.data.unique,
                    "display":branch.data.display,
                    "mandatory":branch.data.mandatory,
                    "max length":branch.data.max_length,
                    "date created":branch.data.sys_created_on,
                    "last updated":branch.data.sys_updated_on
                }
            }
        };

        let updateLogs = () => {
            serviceNow.getLogsStartingWith('')
                .then((logs) => {
                    logs.forEach((x) => {
                        if ($scope.logs.findIndex((i) => i.sys_id === x.sys_id) === -1) {
                            console.log('new log');
                            $scope.logs.unshift(x);
                        }
                    });

                    $scope.logs.forEach((x, i) => {
                        if ((new Date().getTime() - x.sys_created_on.getTime()) / (60 * 1000) > 30) {
                            console.log('removing outdated log');
                            $scope.logs.splice(i);
                        }
                    });

                    timer = $timeout(updateLogs, 5000);
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        let timer = $timeout(updateLogs, 5000);

        $scope.$on("$destroy", () => {
            if (timer) {
                $timeout.cancel(timer);
            }
        });
    }


}

MainPageController.$inject = ['$scope', '$timeout', 'NowService'];

export default MainPageController;
