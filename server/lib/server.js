var express = require('express');
var bodyParser = require('body-parser');
var Notes = require('./notes.js');
var notes = new Notes();


var server = module.exports = express();

var jsonParser = bodyParser.json();


server.use('/',express.static(__dirname + '/../../public')); 			
server.use('/node_modules',express.static(__dirname + '/../../node_modules')); 



/** 
 * SE ASUME QUE UNA NOTA TENDRÁ, AL MENOS, UN ID NUMÉRICO Y UN TÍTULO ALFANUMÉRICO.
 * NO SE HA ESTABLECIDO COMPROBACIÓN DE ERRORES.
 */


// Routes
server.get('/notes/search/:titulo', notes.rest_findNotesByTitulo());
server.get('/notes/:id', notes.rest_findNote() );
server.put('/notes/',   jsonParser , notes.rest_createNote());
server.post('/notes/', jsonParser, notes.rest_updateNote());
server.delete('/notes/:id', notes.rest_removeNote());
server.get('/notes/', notes.rest_listAllNotes());

server.get('/articulos/search/:titulo', notes.rest_findNotesByTitulo());
server.get('/articulo/:id', notes.rest_findNote() );
server.put('/articulo/',   jsonParser , notes.rest_createNote());
server.post('/articulo/',   jsonParser , notes.rest_updateNote());
server.delete('/articulo/:id',notes.rest_removeNote());
server.get('/articulos/', notes.rest_listAllNotes());





