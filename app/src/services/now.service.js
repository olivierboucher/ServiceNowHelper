class NowService {
    constructor($http, credentials) {
        this.$http = $http;
        this.credentials = credentials;
    }

    static NowFactory($http) {
        return function (credentials) {
            return new NowService($http, credentials);
        }
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

NowService.NowFactory.$inject = ['$http'];

export default NowService;