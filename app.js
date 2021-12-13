const express = require('express');
const hbs = require('hbs');
require('dotenv').config();


const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials' );

// serv static content
app.use( express.static('./public') )

app.get( '/', (req, res) => {
    res.render( 'home', {
        name: 'Nicolas Conde',
        title: 'Node js course',
    });
})

app.get( '/generic', (req, res) => {
    res.render( 'generic', {
        name: 'Nicolas Conde',
        title: 'Node js course',
    })
})

app.get( '/elements', (req, res) => {
    res.render( 'elements', {
        name: 'Nicolas Conde',
        title: 'Node js course',
    })
})

app.get('*', (req, res) => {
  res.sendFile( __dirname + '/public/index.html' );
})
 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${ port }`)
})