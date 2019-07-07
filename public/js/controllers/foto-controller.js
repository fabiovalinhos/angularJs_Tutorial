angular.module('alurapic').controller('FotoController', function($scope, $http) {

    $scope.foto = {};
    $scope.mensagem = '';

    $scope.submeter = function() {
        
        // Pergunta para o formulário se tudo está ok e validado, ai sim grava no banco de dados
        if ($scope.formulario.$valid) {
            $http.post('v1/fotos', $scope.foto)
            .success(function(){
    
                // após cadastrar a foto ele limpa o formulário
                $scope.foto = {};
                $scope.mensagem = "Foto cadastrada com sucesso";
            })
            .error(function(error){
                $scope.mensagem = "Foto não cadastrada";
                console.log(error);
            });
        }
    };
});