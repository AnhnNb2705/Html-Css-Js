// Code goes here

var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope){
	console.log("My controller.....");
		
		
		$scope.users = [
			{name: "Product one", email: "100$"},
			{name: "Product Two", email: "200$",},
			{name: "Product Three", email: "300$",},
			{name: "Product Four", email: "500$",}
		];

	$scope.addUser = function(){
		$scope.users.push($scope.newUser);
		$scope.newUser = {};
		$scope.message = "New User Added successfully";
	};
	
	$scope.selectUser = function(user){
		console.log(user);
		$scope.clickedUser = user;
	};

	$scope.editUser = function(){
		$scope.message = "User Edited successfully";
	};

	$scope.deleteUser = function(){
		$scope.users.splice($scope.users.indexOf($scope.clickedUser));
		$scope.message = "User Deleted successfully";
	};

	$scope.clearMessage = function(){
		$scope.message = "";
	};

});