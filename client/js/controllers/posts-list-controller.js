app.controller('postsListController', ['$scope', '$http',
  function ($scope, $http) {
    $scope.posts = [];

    /**
     * Refresh all post on page
     */
    var refreshPostsList = function () {
      $http.get('/api/posts/getPostsList').success(function (data) {
        $scope.posts = data;
      });
    };

    /**
     * Deleting post by id
     * @param id of the post
     */
    $scope.deletePost = function (id) {
      if (confirm('Are you sure you want to delete this post?')) {
        $http.delete('/api/posts/' + id).success(function (data) {
          alert('Post deleted');
        });
      }
    };

    /**
     * Showing body of bost
     * @param post object
     */
    $scope.showBody = function (post) {
      $http.get('/api/posts/' + post.id + '/getBody').success(function (bodyData) {
        post.body = bodyData.body;
      });
    };

    refreshPostsList();

  }]);