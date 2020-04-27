var blogPostingApp = angular.module("blogPostingApp",["ngRoute","ngCookies"]);
console.log("Iam in app.js");

blogPostingApp.config(function($routeProvider) {
	console.log("Routing:"+$routeProvider);
	$routeProvider.when('/login', {
		templateUrl : '/SmartBloggers/app/partials/login.html',
		controller : 'LoginController'
	}).when('/register', {
		templateUrl : '/SmartBloggers/app/partials/register.html',
		controller : 'UserController'
	}).when('/blog', {
		templateUrl : '/SmartBloggers/app/partials/blog.html',
		controller : 'BlogController'
	}).when('/blogs', {
		templateUrl : '/SmartBloggers/app/partials/blogs.html',
		controller : 'BlogController'
	}).when('/mypage', {
		templateUrl : '/SmartBloggers/app/partials/mypage.html',
		controller : 'AccountController'
	}).when('/search', {
		templateUrl : '/SmartBloggers/app/partials/search.html',
		controller : 'SearchController'
	}).when('/logout', {
		templateUrl : '/SmartBloggers/app/partials/logout.html',
		controller : 'LoginController'
	}).when('/users', {
		templateUrl : '/SmartBloggers/app/partials/users.html',
		controller : 'UserController'
	}).when('/', {
		redirectTo : "/login"
	})


} );
