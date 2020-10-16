const { app, BrowserWindow, ipcMain } = require('electron')

ipcMain.on('clicou-aqui', () => {
    console.log('chegou');
}); 

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        nodeIntegration: true,
    }
  })

  win.loadURL('http://localhost:3000');
  win.webContents.openDevTools();
}

app.on('ready',createWindow);
