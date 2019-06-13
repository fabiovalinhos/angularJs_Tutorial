angular.module('minhasDiretivas', [])
.directive('meuPainel', function() {
    var ddo = {};

    ddo.restric = "AE";

    // mantem os elementos filhos do html no caso <img>
    ddo.transclude = true;

    // atributo interno titulo, o '@' se comunica com o mundo externo com o valor passado titulo="{{foto.titulo}}"
    ddo.scope = {
        titulo: '@'
    }

    ddo.templateUrl = 'js/directives/meu-painel.html';

    return ddo;
});