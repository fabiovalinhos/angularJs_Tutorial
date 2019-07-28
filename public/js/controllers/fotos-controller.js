angular.module('alurapic').controller('FotosController', function($scope, recursoFoto) {
	
	$scope.fotos = [];
	// onde fica guardado o valor do meu ng-model que vem de principal.html
	$scope.filtro = '';
	$scope.mensagem = '';

	// instancia do $resource, ele será o recurso para acessar o backend agora
	// nao preciso mais, está em meus-servicos.js
	// var recursoFoto = $resource('v1/fotos/:fotoId');

	// a query já faz a consulta do vi/fotos do banco de dados com o verbo get
	// recursoFoto tem dois parâmetro da query, quando der certo e quando der um erro
	recursoFoto.query(function(fotos){
		$scope.fotos = fotos;
	}, function(erro){
		console.log(erro);
	});

	// $http.get('v1/fotos')
	// .success(function(retorno) {
	// 	console.log(retorno);
	// 	$scope.fotos = retorno; // não precisa fazer retorno.data
	// })
	// .error(function(erro) {
	// 	console.log(erro);
	// });

	$scope.remover = function(foto) {

		// ele está preenchendo na chave o valor com foto._id
		// primeiro parâmetro dou o valor do coringa, segundo aciono a função delete se der certo e a terceira se algo der errado
		recursoFoto.delete({fotoId : foto._id}, function(){

			// retirando a foto da minha view (do meu array) ao invés de fazer uma nova querue no banco de dados
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1);

		}, function(erro) {

			console.log(erro);
			$scope.mensagem = 'Não foi possível remover a foto ' + foto.titulo;

		});


		// $http.delete('v1/fotos/' + foto._id)
		// .success(function() {

		// 	// retirando a foto da minha view (do meu array) ao invés de fazer uma nova querue no banco de dados
		// 	var indiceFoto = $scope.fotos.indexOf(foto);
		// 	$scope.fotos.splice(indiceFoto, 1);

		// 	$scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso';
		// })
		// .error(function(erro) {
		// 	console.log(erro);
		// 	$scope.mensagem = 'Não foi possível remover a foto ' + foto.titulo;
		// });

	};

});