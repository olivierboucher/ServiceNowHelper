import Electron from 'electron'

const Application = Electron.app;
const BrowserWindow = Electron.BrowserWindow;

let mainWindow;

function createMainWindow() {
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL('file://' + __dirname + '/../index.html');
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', () => {
        mainWindow = null
    });
}

Application.on('ready', createMainWindow);

Application.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        Application.quit();
    }
});

Application.on('activate', () => {
    if(mainWindow === null){
        createMainWindow();
    }
});