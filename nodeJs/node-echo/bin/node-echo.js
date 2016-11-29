/**
 * Created by yuan on 16/11/28.
 */

/*#! /usr/bin/env node*/

var argv = require('argv'),
    echo = require('../lib/echo');
console.log(echo(argv.run().targets));