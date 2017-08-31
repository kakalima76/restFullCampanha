var mongoose = require('mongoose');
var Locais = mongoose.model('Locais');




	var sendJsonResponse = function(res, status, content){
		res.status(status);
		res.json(content);
	}

	

	
	module.exports.listar = function(req, res){

		var query = Locais.find({});
		query.exec(function(err, data){
			if(!data){
				sendJsonResponse(res, 404, {
					'message': 'problemas para acessar o arquivo.'
				})

				return;

			}else if(err){
				sendJsonResponse(res, 400, err);

				return;
			}else{
				sendJsonResponse(res, 200, data);	
			}
				
		})	
	}

	module.exports.buscar = function(req, res){

		var query = Locais.find({"Zona": req.body.zona, "Secao" : req.body.secao});
		query.exec(function(err, data){
			if(!data){
				sendJsonResponse(res, 404, {
					'message': 'problemas para acessar o arquivo.'
				})

				return;

			}else if(err){
				sendJsonResponse(res, 400, err);

				return;
			}else{
				sendJsonResponse(res, 200, data);	
			}
				
		})	
	}
