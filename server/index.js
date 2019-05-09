

const express = require('express');
const app = express(); // Creates an instance of express application
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

/* ------------------------------ Middleware ------------------------------------------- */

/* --------------- Logging ------------------- */
app.use(morgan('dev')); 

/* --------------- Parsing ------------------- */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* --------------- Static ------------------- */
app.use(express.static(path.join(__dirname, '..', 'node_modules'))); // serves node_modules
app.use(express.static(path.join(__dirname, '..', 'dist'))); //serves webpack bundle.js
app.use(express.static(path.join(__dirname, '..', 'client'))); //serves css/js files

/* --------------- Routing ------------------- */
//app.use('/api', require('./routes'));


/* ------------------------------ Default index.html ------------------------------------------- */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/views/index.html'));

});

/* ----------------------------------- Error Handling ------------------------------------------- */
app.use((err, req ,res) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

/* ------------------------------ ~ Start Server ~ ------------------------------------------- */
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Knock, Knock');
  setTimeout(() => {
    // eslint-disable-next-line no-console
    console.log('Who\'s there?');
  }, 1000);
  setTimeout(() => {
    // eslint-disable-next-line no-console
    console.log(`...We're
    listening (port:3000).... `);
  }, 3000);
});