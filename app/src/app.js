import Angular from 'angular';
import Router from 'angular-route';
import Config from './config'
import LoginController from './controllers/LoginController';

var app = Angular.module('app', [Router])
    .config(Config)
    .controller('LoginController', LoginController);


