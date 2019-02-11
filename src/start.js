const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 })

  mainWindow.loadURL(
    process.env.ELECTRON_START_URL ||
      url.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file:',
        slashes: true
      })
  )

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', startwebapi)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

function startwebapi() {
  var proc = require('child_process').spawn;
  //  run server
  var webapipath = path.join(__dirname, '..\\api\\bin\\dist\\win\\dotnetcore.exe')
  
  webapiProcess = proc(webapipath)

  webapiProcess.stdout.on('data', (data) => {
    writeLog(`stdout: ${data}`);
    if (mainWindow == null) {
      createWindow();
    }
  });
}

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

//Kill process when electron exits
process.on('exit', function () {
  writeLog('exit');
  webapiProcess.kill();
});

function writeLog(msg){
  console.log(msg);
}