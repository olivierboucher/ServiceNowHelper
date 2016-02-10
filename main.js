var electron = require('electron');
var client = require('electron-connect').client;

const application = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWindow;

function createMainWindow() {
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL('file://' + __dirname + '/index.html');
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