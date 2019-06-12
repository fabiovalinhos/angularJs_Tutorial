angular.module('minhasDiretivas', [])
.directive('meuPainel', function() {
    var ddo = {};

    ddo.restric = "AE";

    // mantem os elementos filhos do html no caso <img>
    ddo.transclude = true;

    ddo.scope = {
        titulo: '@'
    }

    ddo.templateUrl = 'js/directives/meu-painel.html';

    return ddo;
});