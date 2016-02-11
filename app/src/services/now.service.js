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

	getApplicationTableTree() {
		return new Promise((resolve, reject) => {
			this.getApplicationsList()
				.then((applicationResponse) => {
					let applications = applicationResponse.data.result;
					applications.forEach((app) => {
						this.getTablesForApplication(app.scope)
							.then((tablesResponse) => {
								let tables = tablesResponse.data.result;
								app.tablesTree = [];

								tables.forEach((table, tableIndex) => {
									app.tablesTree[tableIndex] = {
										label: table.label,
										children: []
									};

									this.getColumnsForTable(table.name)
										.then((columnsResponse) => {
											let columns = columnsResponse.data.result;
											columns
                                                .filter((x) => x.column_label != '')
                                                .forEach((column) => {
                                                    console.log(column);
												    app.tablesTree[tableIndex].children.push({
													label: column.column_label //+ ' - ' + column.element
												});
											});
										})
										.catch((error) => {
											console.log(error);
											reject(error);
										})
								})
							})
							.catch((error) => {
								console.log(error);
								reject(error);
							})
					});
					resolve(applications);
				})
				.catch((error) => {
					console.log(error);
					reject(error);
				})
		});
	}

    getApplicationsList() {
        let config = this.auth.getAuthenticatedConfig();
        config.method = 'GET';
        config.url += '/api/now/table/sys_app';

        return this.$http(config)
    }

    getTablesForApplication(scope) {
        let config = this.auth.getAuthenticatedConfig();
        config.method = 'GET';
        config.url += '/api/now/table/sys_db_object';
        config.params = {
            'sysparm_query': 'sys_scope.scope=' + scope
        };

        return this.$http(config);
    }

    getColumnsForTable(table) {
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
            'sysparm_query': 'GOTOmessageSTARTSWITH' + startsWith
        };

        return this.$http(config);
    }


    GetLogs() {
        return {
            "result": [
                {
                    "message": "Create extension tables for syslog_transaction",
                    "level": "0",
                    "source": "*** Script",
                    "sys_class_name": "syslog",
                    "sys_id": "38fb61144f11120011ff22d18110c788",
                    "sys_created_on": "2016-01-27 19:29:00",
                    "sys_created_by": "system"
                },
                {
                    "message": "Going to create extensions: [syslog_transaction:null]",
                    "level": "0",
                    "source": "*** Script",
                    "sys_class_name": "syslog",
                    "sys_id": "78fb61144f11120011ff22d18110c788",
                    "sys_created_on": "2016-01-27 19:29:00",
                    "sys_created_by": "system"
                },
                {
                    "message": "Create extension tables for syslog_transaction",
                    "level": "0",
                    "source": "*** Script",
                    "sys_class_name": "syslog",
                    "sys_id": "55fb61144f11120011ff22d18110c79d",
                    "sys_created_on": "2016-01-27 19:29:02",
                    "sys_created_by": "system"
                },
                {
                    "message": "Going to create extensions: [syslog_transaction:null]",
                    "level": "0",
                    "source": "*** Script",
                    "sys_class_name": "syslog",
                    "sys_id": "95fb61144f11120011ff22d18110c79d",
                    "sys_created_on": "2016-01-27 19:29:02",
                    "sys_created_by": "system"
                },
                {
                    "message": "Create extension tables for syslog_transaction",
                    "level": "0",
                    "source": "*** Script",
                    "sys_class_name": "syslog",
                    "sys_id": "61fb61144f11120011ff22d18110c7b2",
                    "sys_created_on": "2016-01-27 19:29:03",
                    "sys_created_by": "system"
                },
                {
                    "message": "Going to create extensions: [syslog_transaction:null]",
                    "level": "0",
                    "source": "*** Script",
                    "sys_class_name": "syslog",
                    "sys_id": "a1fb61144f11120011ff22d18110c7b2",
                    "sys_created_on": "2016-01-27 19:29:03",
                    "sys_created_by": "system"
                },
                {
                    "message": "Create extension tables for syslog_transaction",
                    "level": "0",
                    "source": "*** Script",
                    "sys_class_name": "syslog",
                    "sys_id": "35fb61144f11120011ff22d18110c7d3",
                    "sys_created_on": "2016-01-27 19:29:04",
                    "sys_created_by": "system"
                }]
        };
    }

}

NowService.NowFactory.$inject = ['$http', 'AuthService'];

export default NowService;