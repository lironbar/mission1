'use strict';

angular.module('form-App', [
	'data.Service',
	'ui.router',
	'ngSanitize'
])

.controller('formController', function($scope, Api) {

	Api.getData(function(res){
		if (res.data){
			// hold Questions.
			$scope.items = res.data;
			console.log($scope.items);
		}
		else {
			alert('Failed to load data');
		}
	});



	$scope.randomItems = [];
		var numberOfItems = 0;
		function randomNumber() {
			var rand = Math.floor(Math.random() * 500) + 1
			return rand
		};
		function getNumbers() {
		var rand = Math.floor(Math.random() * 500) + 1
		while (numberOfItems < 5) {
			numberOfItems++
			var numb = randomNumber();
			$scope.randomItems.push(numb);
		}
		console.log($scope.randomItems);
	};

	getNumbers();




});
