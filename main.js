//import Electron from 'electron'
//import { client as Client } from 'electron-connect'

var Electron = require('electron');
var Client = require('electron-connect').client;

const Application = Electron.app;
const BrowserWindow = Electron.BrowserWindow;

var mainWindow;

function createMainWindow() {
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', function() {
        mainWindow = null
    });
}

Application.on('ready', function() {
    createMainWindow();
    Client.create(mainWindow);
});

Application.on('window-all-closed', function(){
    if (process.platform !== 'darwin') {
        Application.quit();
    }
});

Application.on('activate', function(){
    if(mainWindow === null){
        createMainWindow();
    }
});