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

});