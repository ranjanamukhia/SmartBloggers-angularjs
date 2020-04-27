(function() {

	

	function BlogControllerFunc($scope, $http, $log, $rootScope, $cookieStore, $location)

	{	
		console.log("Iam in blogController.js");
			$scope.blogs = [];
			$scope.blog = {};

		if ($cookieStore.get("login_info") == null) {
			$location.path("/login");
			return;
		}
		$rootScope.$broadcast('load');
		$http.defaults.headers.common['Authorization'] = $cookieStore
				.get("login_info");
		
		var promise = $http.get('/SmartBloggers/rest/blogs');
		promise.success(function(data, status, headers, config) {
			$scope.blogs = data;
			$rootScope.$broadcast('unload');
			$scope.showblogs = true;
		}).error(function(data, status, headers, config) {
			$rootScope.$broadcast('unload');
		});

			

		$scope.addBlog = function(blog)
		{
			
			$scope.showBlogAddSuccess= false;
			$scope.showBlogAddError = false;

			if ($cookieStore.get("login_info") == null) {
			$location.path("/login");
			return;
		}
			$http.defaults.headers.common['Authorization'] = $cookieStore.get("login_info");
			blog.userName = $cookieStore.get("current_user");
			console.log("blog.userName : " + blog.userName);

			 $http.post("/SmartBloggers/rest/blogs",blog).success(function(data){
					$scope.blogs.push(blog);
					$scope.blog = null;
					$scope.showaddblog = false;
					$scope.blog_add_success ="Blog Added";
					$scope.showBlogAddSuccess = true;
					

				}).error(function(data){
					$scope.showBlogAddError = true;
					$scope.blog_add_error = "Blog not added";

				});



		};
	}

	blogPostingApp.controller("BlogController",BlogControllerFunc);
})();