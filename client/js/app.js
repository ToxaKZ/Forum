var app = angular.module('forumApp', ['ngRoute']);
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/posts', {
      templateUrl: 'partials/posts-list.html'
    }).
    when('/post/:postId', {
      templateUrl: 'partials/post-edit.html'
    }).
    when('/addPost/', {
      templateUrl: 'partials/post-edit.html'
    }).
    otherwise({
      redirectTo: '/posts'
    });
  }]);