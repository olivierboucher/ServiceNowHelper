var electron = require('electron');
var client = require('electron-connect').client;

const application = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWindow;

function createMainWindow() {
    mainWindow = new BrowserWindow({width: 1366, height: 768});
    mainWindow.loadURL('file://' + __dirname + '/dist/index.html#/login');
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', function() {
        mainWindow = null
    }); 
}

application.on('ready', function() {
    createMainWindow();
    client.create(mainWindow);
});

application.on('window-all-closed', function(){
    if (process.platform !== 'darwin') {
        application.quit();
    }
});

application.on('activate', function(){
    if(mainWindow === null){
        createMainWindow();
    }
});