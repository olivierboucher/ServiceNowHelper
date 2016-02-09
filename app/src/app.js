import Angular from 'angular';
import Router from 'angular-route';
import Config from './config'
import LoginController from './controllers/login.controller';

var app = Angular.module('app', [Router])
    .config(Config)
    .controller('LoginController', LoginController);


