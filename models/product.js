// Esse modulo é responsavel por configurar a tabela no BANCO.
//
// MODELAGEM DE DADOS

var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
	nome: String,
	tamanho: String,
	cor: String,
	valor: String
});


module.exports = mongoose.model('Produtos', ProductSchema);
