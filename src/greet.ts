/// <reference path="../typings/angularjs/angular.d.ts" />
namespace App {
    'use strict';

    export class testController {
        static $inject: Array<string> = ['$scope'];
        constructor($scope: any) {
            console.log('testController');
            $scope.test = "Yra!!!";
        }

        lala (){
            alert('чётко!!!');
        }

    }

    angular
        .module('app')
        .controller('testController', testController);
}