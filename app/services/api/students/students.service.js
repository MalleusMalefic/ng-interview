(function() {
	'use strict';

	angular
		.module('ngInterview.api.students')
		.service('StudentsService', StudentsService);

	StudentsService.$inject = ['$http', '$timeout'];

	function StudentsService($http, $timeout) {
		var service = {
			getStudents: getStudents
		}
		return service;

		//////////

		function getStudents() {	
			return $http({
				method: 'GET',
				header: { 'Content-Type': 'application/json'},
				url: 'http://il-resume-api.azurewebsites.net/api/students'
			}).then(function(data) {
				return data;
			});
		}
	}
})();