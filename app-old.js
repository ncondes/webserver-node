const http = require('http');


http.createServer( (req, res) => {

    // res.writeHead( 200, { 'Content-Type': 'application/json' } );
    res.setHeader('Content-Disposition', 'attachment; filename=list.csv');
    res.writeHead( 200, { 'Content-Type': 'application/csv' } );

    // const person = {
    //     id: 1,
    //     name: 'nicolas',
    // }

    // res.write( JSON.stringify( person ) );
    res.write( 'id, name\n' );
    res.write( '1, Fernando\n' );
    res.write( '2, Maria\n' );
    res.write( '3, Juan\n' );
    res.write( '4, Pedro\n' );
    res.end();

})
.listen( 8080 );

console.log( 'Escuchando el puerto', 8080 );