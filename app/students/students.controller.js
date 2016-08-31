(function() {
	'use strict';

	angular
		.module('ngInterview.students')
		.controller('StudentsController', StudentsController);

	StudentsController.$inject = ['$timeout', 'StudentsService'];

	function StudentsController($timeout, StudentsService) {
		var vm = this;
		vm.dataError = false;
		vm.loading = true;
		vm.students = [];


		activate();

		//////////

		function activate() {
			return getStudents().then(function(data) {
				if(typeof data.data == 'object') {
					vm.loading = false;
					vm.students = data.data;
				} else {
					vm.loading = false;
					vm.dataError = true;
				}
				console.log(data);
				console.log(vm.students);
			}, function(data) {
				if(data.status == 503) {
					retryOnEndpointError();
				} 
			});
		}

		function getStudents() {
			return StudentsService.getStudents().then(function(data) {
				return data;
			});
		}

		function retryOnEndpointError() {
			$timeout(function() {
				activate();
			}, 5000);
		}
	}
})();
