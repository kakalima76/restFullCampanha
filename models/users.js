var mongoose = require( 'mongoose' );


var locaisSchema = new mongoose.Schema({
	"Zona" : {type: Number},
	"Nome Munic" : {type: String},
	"Bairro" : {type: String},
	"Endereco" : {type: String},
	"CEP" : {type: Number},
	"Num Local" : {type: String},
	"Nome Local" : {type: String},
	"Secao" : {type: Number},
	"Aptos Secao SUM" : {type: Number},
	"Aptos Local SUM" : {type: Number}
});

mongoose.model('Locais', locaisSchema, 'locais');


	
	
