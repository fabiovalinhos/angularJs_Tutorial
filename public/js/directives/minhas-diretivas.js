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
})
.directive('meuBotaoPerigo', function() {
    var ddo = {};

    ddo.restric = "E";

    // usei o & pois estou passando uma expressão (no caso a função remover()) e não uma string como é usado no @
    ddo.scope = {
        nome: '@',
        acao: '&'
    };
    
// achei estranho passar ng-click="acao(foto)". coloquei apenas "acao" e funcionou. na dúvida mantive
    ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>';

    return ddo;
});