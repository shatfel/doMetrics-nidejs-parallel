'use strict'

const { spawn } = require('child_process');

let _params = [ 'freemem', 'loadavg_1', 'loadavg_5', 'loadabg_15' ]
let doMetrics = []

for (let i in _params) {console.log('/i/ add metric for check: ' +_params[i])}

for (let _p in _params) {
  let pp=_params[_p]
  
  console.log('/i/ running process for metric: ' +pp)
  doMetrics[pp] = spawn('./doMetrics', [pp]);
  
doMetrics[pp].stdout.on('data', (data) => {
	  console.log(pp+' stdout: ' + data);
	  })

	  	  doMetrics[pp].on('close', (code) => {
	console.log(pp + ': child process exited with code: '+ code);
	  	  	  })
}
