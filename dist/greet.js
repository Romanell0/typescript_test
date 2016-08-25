/// <reference path="../typings/angularjs/angular.d.ts" />
var App;
(function (App) {
    'use strict';
    var testController = (function () {
        function testController($scope) {
            console.log('testController');
            $scope.test = "Yra!!!";
        }
        testController.prototype.lala = function () {
            alert('чётко!!!');
        };
        testController.$inject = ['$scope'];
        return testController;
    }());
    App.testController = testController;
    angular
        .module('app')
        .controller('testController', testController);
})(App || (App = {}));
