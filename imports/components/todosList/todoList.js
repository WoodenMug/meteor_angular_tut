import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './todoList.html';

class TodosListCtrl {
    constructor() {
        this.tasks = [{
            text: 'This is task1'
        }, {
            text: 'This is task2'
        }, {
            text: 'This is task3'
        }];
    }
}

export default angular.module('todosList', [
    angularMeteor
])
    .component('todosList', {
        templateUrl: 'imports/components/todosList/todosList.html',
        controller: TodosListCtrl
    });