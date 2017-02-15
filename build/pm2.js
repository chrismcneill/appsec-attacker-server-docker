/*eslint-env node*/
"use strict";

/**
    Define any development environment configuration here
    eg: process.env.ENVIRONMENT_VARIABLE = "Some Value";
**/

var fork = require( "child_process").fork;
var forked = fork( "./index" );
forked.on( "message", function( message ){

    if( message === "SYSTEM_UP" ){
        fork( "./build/tests" );
    }

});

function cleanExit( why ){

    console.log( "killing server because of ", why );
    forked.kill();
    process.exit(); // eslint-disable-line

}

forked.on( "SIGINIT", cleanExit.bind( null, "app siginit" ) );
forked.on( "SIGTERM", cleanExit.bind( null, "app sigterm" ) );
forked.on( "exit", cleanExit.bind( null, "app exit" ) );
process.on( "SIGINIT", cleanExit.bind( null, "siginit" ) );
process.on( "SIGTERM", cleanExit.bind( null, "sigterm" ) );
process.on( "exit", cleanExit.bind( null, "exit" ) );
process.stdin.resume();
process.stdin.on( "data", cleanExit.bind( null, "data" ) );