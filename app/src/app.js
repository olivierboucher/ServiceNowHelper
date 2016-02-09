import Angular from 'angular';
import UIRouter from 'angular-ui-router';
import Config from './config'
import LoginController from './controllers/LoginController';

var app = Angular.module('app', [UIRouter])
    .config(Config)
    .controller('LoginController', LoginController);


