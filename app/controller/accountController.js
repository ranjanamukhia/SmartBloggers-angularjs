(function() {

	console.log("inside accountcontroller function");

	function AccountControllerFunc($scope, $http, $log, $rootScope, $cookieStore, $location){

		console.log("inside accountcontroller function");

		if ($cookieStore.get("login_info") == null) {
			$location.path("/login");
			return;
		}
		$http.defaults.headers.common['Authorization'] = $cookieStore.get("login_info");
		var url = '/SmartBloggers/rest/users/' + $cookieStore.get("current_user");
		var promise = $http.get(url);

			promise.success(function(data, status, headers, config)
		 {
			$scope.user = data;
			$rootScope.$broadcast('unload');

		}).error(function(data, status, headers, config) {
			$rootScope.$broadcast('unload');
		});

			$scope.blogs = null;
			$scope.blog = null;

			var url = '/SmartBloggers/rest/blogs/users/' + $cookieStore.get("current_user");
			var promise = $http.get(url);
			promise.success(function(data, status, headers, config) {
			$scope.blogs = data;
			$rootScope.$broadcast('unload');
			$scope.showblogs = true;
			}).error(function(data, status, headers, config) {
				$rootScope.$broadcast('unload');
			});
	};

blogPostingApp.controller("AccountController",AccountControllerFunc);

})();