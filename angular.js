var app = angular.module('findfalcone', []);

app.controller('FindCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.getTokenViaAngular = function() {
        $http({
            url: "http://findfalcone.herokuapp.com/token",
            headers: {
                "Accept": "application/json"
            },
            method: 'POST'
        }).then(function success(response) {
            $scope.token = response.data.token
        })
    }

    $scope.findFalcone = function() {
    	$http({
            url: "http://findfalcone.herokuapp.com/find",
            data :$scope.data,
            headers: {
            	"Accept" : "application/json",
            	"Content-type" : "application/json"
            },
            method :'POST'

    	}).then(function success(response){

    		$scope.data = response.data.status;
    	}).then(function error(response){
    		console.log("error " + response)
    	});
    }
}]);