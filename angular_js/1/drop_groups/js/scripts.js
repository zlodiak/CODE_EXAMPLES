var app = angular.module("app", []);

app.controller("mainCtrl", function($scope) {
	$scope.stateArr = [];
	$scope.groupsArr = ['qwerty', 'asdfgh', 'zxcvcbn', 'qaazwssx', '123456678'];

	$scope.changeState = function(index) {
		$scope.stateArr['id_' + index] = !$scope.stateArr['id_' + index];
		console.log('stateArr now is', $scope.stateArr);
	};
});