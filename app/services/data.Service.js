angular.module('data.Service')
.service('Api', ['$http', function($http) {
	var self = this;

	self.getData = function(cb){
		$http.get('http://fly1.globalmailer.com:8134/flc/data/photos.txt').then(
			function(res){
				cb(res);
			},
			function (res){
				cb(res);
			}
		);
	};

}]);
