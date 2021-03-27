'use strict'

const { spawn } = require('child_process');

// metrics
let _params = [ 'freemem', 'loadavg_1', 'loadavg_5', 'loadabg_15' ]
// parallel sessions
let doMetrics = []

// show metric which we check
for (let i in _params) {console.log('/i/ add metric for check: ' +_params[i])}

// for each metric
for (let _p in _params) {
  let pp=_params[_p]
  
	// run parallel process
  console.log('/i/ running process for metric: ' +pp)
  doMetrics[pp] = spawn('./doMetrics', [pp]);
  
	// stdout for each process
	doMetrics[pp].stdout.on('data', (data) => {
		console.log(pp+' stdout: ' + data);
		})

	// stderr for each process
	doMetrics[pp].stderr.on('data', (data) => {
		console.log(pp+' stderr: ' + data);
		})

	// when process finished
	doMetrics[pp].on('close', (code) => {
		console.log(pp + ': child process exited with code: '+ code);
		})
}
