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
            'sys_parm_query': 'sys_scope.nameLIKE' + scope
        };

        return this.$http(config);
    }

    getColumnsForTable(table) {
        let config = this.auth.getAuthenticatedConfig();
        config.method = 'GET';
        config.url += '/api/now/table/sys_dictionary';
        config.params = {
            'sys_parm_query': 'name%3D' + table
        };

        return this.$http(config);
    }

    getLogsStartingWith(startsWith) {
        let config = this.auth.getAuthenticatedConfig();
        config.method = 'GET';
        config.url += '/api/now/table/syslog';
        config.params = {
            'sys_parm_query': 'GOTOmessageSTARTSWITH' + startsWith
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

    GetTables(){
        return {
            "result": [
                {
                    "max_length": "32",
                    "read_only": "false",
                    "reference_qual_condition": "",
                    "reference_type": "",
                    "dependent_on_field": "",
                    "calculation": "",
                    "use_dynamic_default": "false",
                    "sys_policy": "",
                    "internal_type": {
                        "link": "https://dev17826.service-now.com/api/now/table/sys_glide_object?name=GUID",
                        "value": "GUID"
                    },
                    "spell_check": "false",
                    "use_dependent_field": "false",
                    "primary": "true",
                    "choice_field": "",
                    "defaultsort": "",
                    "sys_update_name": "",
                    "sys_mod_count": "0",
                    "write_roles": "",
                    "delete_roles": "",
                    "element": "sys_id",
                    "mandatory": "false",
                    "sys_updated_on": "2016-02-02 13:32:57",
                    "display": "false",
                    "text_index": "false",
                    "dynamic_default_value": "",
                    "active": "true",
                    "next_element": "",
                    "foreign_database": "",
                    "xml_view": "false",
                    "array": "false",
                    "virtual": "false",
                    "choice_table": "",
                    "column_label": "Sys ID",
                    "create_roles": "",
                    "unique": "false",
                    "reference_floats": "false",
                    "sys_replace_on_upgrade": "false",
                    "choice": "0",
                    "dependent": "",
                    "table_reference": "false",
                    "dynamic_creation": "false",
                    "sys_created_on": "2016-02-02 13:32:57",
                    "dynamic_ref_qual": "",
                    "sizeclass": "",
                    "sys_updated_by": "system",
                    "sys_package": "",
                    "name": "cmdb_ci_directory_ha",
                    "reference_qual": "",
                    "widget": "",
                    "use_reference_qualifier": "simple",
                    "read_roles": "",
                    "sys_name": "",
                    "sys_id": "00041b424f11120011ff22d18110c777",
                    "audit": "false",
                    "reference_key": "",
                    "element_reference": "false",
                    "reference": "",
                    "reference_cascade_rule": "",
                    "sys_created_by": "system",
                    "dynamic_creation_script": "",
                    "default_value": "",
                    "sys_class_name": "sys_dictionary",
                    "attributes": "",
                    "staged": "false",
                    "sys_customer_update": "false",
                    "sys_scope": "",
                    "comments": ""
                },
                {
                    "max_length": "1024",
                    "read_only": "false",
                    "reference_qual_condition": "",
                    "reference_type": "",
                    "dependent_on_field": "",
                    "calculation": "",
                    "use_dynamic_default": "false",
                    "sys_policy": "",
                    "internal_type": {
                        "link": "https://dev17826.service-now.com/api/now/table/sys_glide_object?name=translated_text",
                        "value": "translated_text"
                    },
                    "spell_check": "false",
                    "use_dependent_field": "false",
                    "primary": "false",
                    "choice_field": "",
                    "defaultsort": "",
                    "sys_update_name": "sys_dictionary_sc_ic_question_type_help_text",
                    "sys_mod_count": "1",
                    "write_roles": "",
                    "delete_roles": "",
                    "element": "help_text",
                    "mandatory": "false",
                    "sys_updated_on": "2016-01-27 19:38:02",
                    "display": "false",
                    "text_index": "false",
                    "dynamic_default_value": "",
                    "active": "true",
                    "next_element": "",
                    "foreign_database": "",
                    "xml_view": "false",
                    "array": "false",
                    "virtual": "false",
                    "choice_table": "",
                    "column_label": "Help text",
                    "create_roles": "",
                    "unique": "false",
                    "reference_floats": "false",
                    "sys_replace_on_upgrade": "false",
                    "choice": "0",
                    "dependent": "",
                    "table_reference": "false",
                    "dynamic_creation": "false",
                    "sys_created_on": "2016-01-27 19:24:51",
                    "dynamic_ref_qual": "",
                    "sizeclass": "",
                    "sys_updated_by": "system",
                    "sys_package": {
                        "link": "https://dev17826.service-now.com/api/now/table/sys_package/8deaa1d04f11120011ff22d18110c72a",
                        "value": "8deaa1d04f11120011ff22d18110c72a"
                    },
                    "name": "sc_ic_question_type",
                    "reference_qual": "",
                    "widget": "",
                    "use_reference_qualifier": "simple",
                    "read_roles": "",
                    "sys_name": "Help text",
                    "sys_id": "000b25d04f11120011ff22d18110c710",
                    "audit": "false",
                    "reference_key": "",
                    "element_reference": "false",
                    "reference": "",
                    "reference_cascade_rule": "",
                    "sys_created_by": "system",
                    "dynamic_creation_script": "",
                    "default_value": "",
                    "sys_class_name": "sys_dictionary",
                    "attributes": "no_sort_i18n=true,serializer=com.glide.script.TranslatedTextXMLSerializer",
                    "staged": "false",
                    "sys_customer_update": "false",
                    "sys_scope": {
                        "link": "https://dev17826.service-now.com/api/now/table/sys_scope/global",
                        "value": "global"
                    },
                    "comments": ""
                }]};
    }
}

NowService.NowFactory.$inject = ['$http', 'AuthService'];

export default NowService;