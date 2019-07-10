angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams) {

    // $routeParams me dá as informacoes dos parâmetros passados na rota

    $scope.foto = {};
    $scope.mensagem = '';

    if ($routeParams.fotoId) {
        $http.get('v1/fotos/' + $routeParams.fotoId)
        .success(function(retorno) {
            $scope.foto = retorno;
        })
        .error(function(erro){
            console.log(erro);
            $scope.mensagem = "Não foi possível obter a foto";
        });
    };

    $scope.submeter = function() {
        
        // Pergunta para o formulário se tudo está ok e validado, ai sim grava no banco de dados
        if ($scope.formulario.$valid) {
            
            // se minha foto já tem um id (no caso uma edição) ... senão é uma foto nova
            if ($scope.foto._id) {
                $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
                .success(function() {
                    $scope.mensagem = "Atualização com sucesso da foto " + $scope.foto.titulo;
                })
                .error(function(erro){
                    console.log(erro);
                    $scope.mensagem = "Foto não foi atualizada";
                });
            }else{

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

        }
    };
});