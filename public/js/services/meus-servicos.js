// o factory sempre retorna um objeto

angular.module('meusServicos', ['ngResource'])
    .factory('recursoFoto', function ($resource) {

    // o null é quando quer usar a query string ao invés de usar a url v1/fotos...
    // o objeto update é a função que eu quero passar. poderia chamar update, batatinha etc
    return $resource('v1/fotos/:fotoId', null, {
        update: {
            method: 'PUT'
        }
    });

})
.factory('cadastroDeFotos', function(recursoFoto, $q, $rootScope){

    var servico = {};

    var evento = 'fotoCadastrada';

    servico.cadastrar = function(foto) {
        return $q(function(resolve, reject) {
            if (foto._id) {
                
                recursoFoto.update({fotoId: foto._id}, foto, function() {
                    $rootScope.$broadcast(evento);
                    resolve({
                        mensagem : 'Foto ' + foto.titulo + ' atualizada com sucesso',
                        inclusao: false
                    });

                }, function(erro) {
                    console.log(erro);
                    reject({
                        mensagem : 'Não foi possível alterar a foto ' + foto.titulo
                    });
                });

            } else {
                recursoFoto.save (foto, function() {
                    $rootScope.$broadcast(evento);
                    resolve({
                        mensagem : 'Foto ' + foto.titulo + ' incluída com sucesso',
                        inclusao : true
                    });
                }, function (erro){
                    console.log(erro);
                    reject({
                        mensagem : 'Não foi possível incluir a foto ' + foto.titulo
                    });
                });
            }
        });
    };

    return servico;
});