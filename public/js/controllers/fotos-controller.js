angular.module('alurapic').controller('FotosController', function($scope, $http) {
	
	$scope.fotos = [];
	// onde fica guardado o valor do meu ng-model que vem de principal.html
	$scope.filtro = '';

	$http.get('/v1/fotos')
	.success(function(retorno) {
		console.log(retorno);
		$scope.fotos = retorno; // não precisa fazer retorno.data
	})
	.error(function(erro) {
		console.log(erro);
	});

});