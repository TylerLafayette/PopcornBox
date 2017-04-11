import {app, BrowserWindow} from 'electron';

let mainWindow = null;

app.on('window-all-closed', () => {
  app.quit();
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 700,
    height: 760,
    titleBarStyle: 'hidden-inset'
  })

  mainWindow.loadURL(`file://${__dirname}/renderer/index.html`)
})
