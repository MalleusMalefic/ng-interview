(function() {
	'use strict';

	angular
		.module('ngInterview.students')
		.directive('studentList', studentList);

	studentList.$inject = [];

	function studentList() {
		var directive = {
			link: link,
			restrict: 'A',
		};

		return directive;

		//////////
		
		function link(scope, elem, atttrs) {
			var vm = scope.vm;
			vm.viewStudentInfo = viewStudentInfo;

			function viewStudentInfo(student) {
				if(vm.showInfoForStudent == student.Id) {
					vm.showInfoForStudent = undefined;
				} else {
					vm.showInfoForStudent = student.Id;
				}
			}
		}


	}
})();