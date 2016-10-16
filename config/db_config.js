// MODULO DE CONFIGURACAO DO BANCO DE DADOS.
//

var mongoose = require('mongoose');
var strDBConnect = 'mongodb://dev1/API';




mongoose.connect(strDBConnect, function (err,res ){
 if (err)
	 console.log('Não foi possivel conectar a: '+ strDBConnect);
  else
 	console.log('Conectado a: '+ strDBConnect);
});


