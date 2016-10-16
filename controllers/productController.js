var Product = require ('../models/product');


exports.save = function (nome,tamanho,cor,valor,callback){
	new Product({
		'nome': nome,
		'tamanho': tamanho,
		'cor': cor,
		'valor': valor
	}).save(function(error, produto){
		if (error){
			callback({error: 'Não foi possível salvar'});
		}else{
		callback(produto);
		}
	});

}

exports.list = function (callback){
	Product.find({}, function(error, produto) {
		if (error){
			callback ({error: "Não foi possível encontrar os produtos"});
		}else{
			callback(produto);
		}
	});
}

exports.delete = function (id, callback){
	Product.findById(id, function(error, produto){
		if (error){
			callback({error: "Não foi possivel excluir o produto"});
		}else{
			Product.remove({_id: id},function(error){
				if(!error){
					callback({resposta: "Produto excluido com sucesso"});
				}
			});
		}
	})
}


