(function(){

	console.log("Iam in login.js")

	function LoginControllerFunc($scope,$rootScope,$cookieStore,$http,$location,$log,Base64)
	{

		console.log("Iam inside LoginControllerfunc");

		$scope.loginUser = function(user)
		{

			$rootScope.$broadcast('load');
			$scope.showloginError = false;
			$scope.showlogoutmsg = false;

			var authHeaderValue = 'Basic ' + Base64.encode($scope.user.userName + ':' + $scope.user.password);

			$http.defaults.headers.common['Authorization'] = authHeaderValue;

			var url='/SmartBloggers/rest/users/' + user.userName;
			var promise = $http.get(url);
			console.log("user.userName: "+ user.userName);

			promise.success(function(data,status,header,config){
				console.log("inside promise.success");

				$cookieStore.put("login_info", authHeaderValue)
				$scope.showloginForm = false;
				$scope.user = data;
				$cookieStore.put("current_user", $scope.user.userName);
				$scope.showlogout = true;
				$rootScope.$broadcast('loginEvent');
				$rootScope.$broadcast('unload');
				$location.path('/blogs');


			}).error(function(data, status, headers, config) {
				$scope.login_error = "login failure";
				$scope.showloginError=true;
				$scope.error = status;
				$rootScope.$broadcast('unload');
			});

			
		};		

	}

blogPostingApp.controller("LoginController", LoginControllerFunc);

})();

	