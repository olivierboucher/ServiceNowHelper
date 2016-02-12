class NowService {
    constructor($http, AuthService) {
        this.$http = $http;
        this.auth = new AuthService();
    }

    static NowFactory($http, AuthService) {
        return function () {
            return new NowService($http, AuthService);
        }
    }

    populateApplicationTableTree(scope) {
        this._getApplicationsList()
            .then((applicationResponse) => {
                let applications = applicationResponse.data.result;
                applications.forEach((app, appIndex) => {
                    this._getTablesForApplication(app.scope)
                        .then((tablesResponse) => {
                            let tables = tablesResponse.data.result;
                            app.tablesTree = [];

                            tables.forEach((table, tableIndex) => {
                                app.tablesTree[tableIndex] = {
                                    label: table.label,
                                    clipboardData: table.name,
                                    children: []
                                };

                                this._getColumnsForTable(table.name)
                                    .then((columnsResponse) => {
                                        let columns = columnsResponse.data.result;
                                        columns
                                            .filter((x) => x.column_label != '')
                                            .forEach((column) => {
                                                app.tablesTree[tableIndex].children.push({
                                                    label: column.column_label,
                                                    clipboardData: column.element
                                                });
                                            });

                                        if (appIndex == applications.length - 1 && tableIndex == tables.length - 1) {
                                            scope.loadingApplications = false;
                                            scope.applications = applications;
                                        }
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    })
                            })
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                });
            })
    }

    _getApplicationsList() {
        let config = this.auth.getAuthenticatedConfig();
        config.method = 'GET';
        config.url += '/api/now/table/sys_app';

        return this.$http(config)
    }

    _getTablesForApplication(scope) {
        let config = this.auth.getAuthenticatedConfig();
        config.method = 'GET';
        config.url += '/api/now/table/sys_db_object';
        config.params = {
            'sysparm_query': 'sys_scope.scope=' + scope
        };

        return this.$http(config);
    }

    _getColumnsForTable(table) {
        let config = this.auth.getAuthenticatedConfig();
        config.method = 'GET';
        config.url += '/api/now/table/sys_dictionary';
        config.params = {
            'sysparm_query': 'name=' + table
        };

        return this.$http(config);
    }

    getLogsStartingWith(startsWith) {
        let config = this.auth.getAuthenticatedConfig();
        config.method = 'GET';
        config.url += '/api/now/table/syslog';
        config.params = {
            'sysparm_query': 'sys_created_on>javascript:gs.minutesAgoStart(30)^messageSTARTSWITH' + startsWith
        };

        return new Promise((resolve, reject) => {
            this.$http(config)
                .then((response) => {
                    let offset = new Date().getTimezoneOffset() / 60;
                    resolve(response.data.result.map((x) => {
                        let millis = new Date(x.sys_created_on).getTime();
                        let convert = millis - (offset * 60 * 60 * 1000);
                        x.sys_created_on = new Date(convert);
                        return x;
                    }));
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }
}

NowService.NowFactory.$inject = ['$http', 'AuthService'];

export default NowService;