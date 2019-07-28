// angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'ngResource'])
//     .config(function ($routeProvider, $locationProvider) {

angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'meusServicos'])
    .config(function ($routeProvider, $locationProvider) {

        // faz com que o angular deixa de trabalhar com # nas rotas e trabalha com html5, mas o backend tem que estar preparado
        // tenho que colocar isto também no index.html
        // <base href="/">
        $locationProvider.html5Mode(true);
        
        $routeProvider.when('/fotos', {
            templateUrl: 'partials/principal.html',
            controller: 'FotosController'
        });

        $routeProvider.when('/fotos/new', {
            templateUrl: 'partials/foto.html',
            controller: 'FotoController'
        });

        // :fotoId é um coringa
        $routeProvider.when('/fotos/edit/:fotoId', {
            templateUrl: 'partials/foto.html',
            controller: 'FotoController'
        });

        $routeProvider.otherwise({redirectTo: '/fotos'});
    });