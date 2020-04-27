(function() {

	function HomeControllerFunc($scope,$rootScope,$cookieStore,$http,$location,$log) {
		$rootScope.msg = "Iam in homecontroller"


		$rootScope.$on('load',function(event){

			$rootScope.showloading = true;

		});

		$rootScope.$on('unload',function(event){

			$rootScope.showloading = false;

		});

		
		$rootScope.$on('loginEvent',function(event){
			$scope.username = $cookieStore.get("current_user");
			$scope.showlogoutlink = true;	
		});

		$scope.logoutUser = function() {
			$cookieStore.remove("login_info");
			$scope.showlogoutlink = false;
			$cookieStore.remove("current_user");
			$scope.username = "";
			$scope.showloading = false;
			$rootScope.$broadcast('unload');
		};

		$rootScope.showloading = false;
};
	blogPostingApp.controller("HomeController", HomeControllerFunc);

})();
