const express = require('express');
const morgan = require('morgan');
const multer = require ('multer');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

app.set('port', 5173);
app.set('Client', path.join(__dirname,'Client'));
// app.engine('.hbs', exphbs({
//   defaultLayout: ''
// }));

app.set('view engine', '.hbs');

app.use(morgan());

app.use(express.json());
app.use(express.urlencoded({extended: false})) // sirve para subir datos desde un formulario y express pueda entenderlo

const storage = multer.diskStorage({
destination: path.join(__dirname, 'Client/public/Stands'),
filename: (req, file, cb) =>{   //esto se utiliza para que no se repita el nombre.
  cb(null, new Date().getTime());  
}
})
app.use(multer({storage}).single('image'));

app.use(require('./routes/index'));

module.exports = app;

