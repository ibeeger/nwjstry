/*
* @Author: ibeeger
* @Date:   2016-06-21 18:20:13
* @Last Modified by:   ibeeger
* @Last Modified time: 2016-06-21 18:27:47
*/

var fs = require('fs'),
    system = require('system');

if (system.args.length < 3) {
    console.log("Usage: echoToFile.js DESTINATION_FILE <arguments to echo...>");
    phantom.exit(1);
} else {
    var content = '',
        f = null,
        i;
    for ( i= 2; i < system.args.length; ++i ) {
        content += system.args[i] + (i === system.args.length-1 ? '' : ' ');
    }

    try {
        fs.write(system.args[1], content, 'w');
    } catch(e) {
        console.log(e);
    }

    phantom.exit();
}