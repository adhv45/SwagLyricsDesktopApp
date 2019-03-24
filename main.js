const {app, BrowserWindow} = require('electron')

// function to create new browser window
function createWindow () {
	
	// spawns a new process 
	var python = require('child_process').spawn('python3', ['./tab.py']);

	window =  new BrowserWindow({width: 800, height:600})
	window.loadURL('http://127.0.0.1:5042/')

}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
	app.quit()
})
