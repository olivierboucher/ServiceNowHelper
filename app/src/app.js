import Angular from 'angular';
import UIRouter from 'angular-ui-router';
import Config from './config'

var app = Angular.module('app', [UIRouter])
    .config(Config);


