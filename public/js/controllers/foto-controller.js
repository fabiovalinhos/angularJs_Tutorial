// angular.module('alurapic').controller('FotoController', function ($scope, $http, $routeParams, $resource) {

// recursoFoto chama meu meus-servicos.js
angular.module('alurapic').controller('FotoController', function ($scope, $routeParams, recursoFoto, cadastroDeFotos) {

    $scope.foto = {};
    $scope.mensagem = '';

    // $routeParams me dá as informacoes dos parâmetros passados na rota
    if($routeParams.fotoId) {
        recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto) {
            $scope.foto = foto;
        }, function(erro) {
            console.log(erro);
            $scope.mensagem = "Não foi possível obter a foto";
        });
    }

    // if ($routeParams.fotoId) {
    //     $http.get('v1/fotos/' + $routeParams.fotoId)
    //     .success(function(retorno) {
    //         $scope.foto = retorno;
    //     })
    //     .error(function(erro){
    //         console.log(erro);
    //         $scope.mensagem = "Não foi possível obter a foto";
    //     });
    // };

    $scope.submeter = function() {
        
        // Pergunta para o formulário se tudo está ok e validado, ai sim grava no banco de dados
        if ($scope.formulario.$valid) {

            cadastroDeFotos.cadastrar($scope.foto)
            .then(function(dados) {
                $scope.mensagem = dados.mensagem;
                if (dados.inclusao = $scope.foto) {$scope.foto = {} }
            })
            .catch(function(dados) {
                $scope.mensagem = dados.mensagem;
            })

            
            // se minha foto já tem um id (no caso uma edição) ... senão é uma foto nova
            // poderia usar também $routeParams.fotoId
            // if ($scope.foto._id) {

            //     recursoFoto.update({fotoId: $scope.foto._id}, $scope.foto, function(){
            //         $scope.mensagem = "Atualização com sucesso da foto " + $scope.foto.titulo;
            //     }, function(erro) {
            //         console.log(erro);
            //         $scope.mensagem = "Foto não foi atualizada";
            //     });



                // $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
                // .success(function() {
                //     $scope.mensagem = "Atualização com sucesso da foto " + $scope.foto.titulo;
                // })
                // .error(function(erro){
                //     console.log(erro);
                //     $scope.mensagem = "Foto não foi atualizada";
                // });

            // }else{

                // recursoFoto.save($scope.foto, function(){
                //     $scope.foto = {};
                //     $scope.mensagem = "Foto cadastrada com sucesso";
                // }, function(erro){
                //         $scope.mensagem = "Foto não cadastrada";
                //         console.log(erro);
                // });



                // $http.post('v1/fotos', $scope.foto)
                // .success(function(){
        
                //     // após cadastrar a foto ele limpa o formulário
                //     $scope.foto = {};
                //     $scope.mensagem = "Foto cadastrada com sucesso";
                // })
                // .error(function(error){
                //     $scope.mensagem = "Foto não cadastrada";
                //     console.log(error);
                // });
            // }

        }
    };
});