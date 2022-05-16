const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
//inicializacion
const app = express();
//configuraciones puertos
app.set('port',process.env.PORT || 4000);
app.set('views',path.join(__dirname,'views'))
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir:path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partial'),
    extname:'.hbs',
    helpers:require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

//programas utilizados
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//Variables Globales
app.use((req,res,next) => {
    next();
});

//rutas a utilizar
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use(require('./routes/links'));
// Publicos
app.use(express.static(path.join(__dirname,'public')));
//inicio del servidor
app.listen(app.get('port'),() =>{
console.log('Server on port', app.get('port'))
});