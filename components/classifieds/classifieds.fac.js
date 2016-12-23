(function() {
	"use strict";

	angular
		.module("ngClassifieds")
		.factory("classifiedsFactory", function($http, $firebaseArray) {

			// function getClassifieds () {
			// 	return $http.get('data/classifieds.json');
			// }

			// var ref = new Firebase('https://gclassified-c15fb.firebaseio.com/');
			var ref = firebase.database().ref();

			 // var ref = firebase.database().ref();
       // download the data into a local object
           // $scope.data = $firebaseObject(ref);

			return {
				ref: $firebaseArray(ref)
			}

		})
})();