app.controller('postsEditController', ['$scope', '$http', '$routeParams', '$window',
  function ($scope, $http, $routeParams, $window) {

    $scope.post = {};
    $scope.postId = $routeParams.postId;
    if ($scope.postId) {
      $http.get('/api/posts/' + $scope.postId).then(function (post) {
          $scope.post = post.data;
      }).catch(function (err) {
        alert(err.data.error.message);
      });
    }

    /**
     * Update/Insert current instance of post and redirect to posts list
     */
    $scope.save = function () {
      if (!$scope.postId) {
        $http.post('/api/posts', { header: $scope.post.header, body: $scope.post.body }).success(function () {
          $window.location.href = '/';
        }).catch(function (err) {
          $scope.error = err.data.error.message;
        })
      } else {
        $http.put('/api/posts', {
          header: $scope.post.header,
          body: $scope.post.body,
          id: $scope.postId
        }).success(function () {
          $window.location.href = '/';
        }).catch(function (err) {
          $scope.error = err.data.error.message;
        })
      }
    };

    /**
     * Redirect to posts list
     */
    $scope.cancel = function () {
      $window.location.href = '/';
    };

  }]);