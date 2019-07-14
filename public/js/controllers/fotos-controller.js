angular.module('alurapic').controller('FotosController', function($scope, $http) {
	
	$scope.fotos = [];
	// onde fica guardado o valor do meu ng-model que vem de principal.html
	$scope.filtro = '';
	$scope.mensagem = '';

	$http.get('v1/fotos')
	.success(function(retorno) {
		console.log(retorno);
		$scope.fotos = retorno; // não precisa fazer retorno.data
	})
	.error(function(erro) {
		console.log(erro);
	});

	$scope.remover = function(foto) {
		$http.delete('v1/fotos/' + foto._id)
		.success(function() {

			// retirando a foto da minha view (do meu array) ao invés de fazer uma nova querue no banco de dados
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1);

			$scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso';
		})
		.error(function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível remover a foto ' + foto.titulo;
		});

	};

});