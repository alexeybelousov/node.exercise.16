'use strict'

userApp.controller('UserListCtrl', function ($scope, UsersService, PostsService, $q) {
  $scope.loaded = false;

  $q.all([UsersService.getUsers(), PostsService.getPosts()]).then(function(response) {

    $scope.users = response[0].data;
    $scope.posts = response[1].data;

    $scope.loaded = true;
  });

  // $scope.usersLoaded = false;
  // $scope.postsLoaded = false;
  // UsersService.getUsers().then(function (response) {
  //   $scope.users = response.data;
  //   $scope.usersLoaded = true;
  // })
  //
  // PostsService.getPosts().then(function (response) {
  //   $scope.posts = response.data;
  //   $scope.postsLoaded = true;
  // })


/*   UsersService.getUsers().then(function (response) {
    $scope.users = response.data
    return PostsService.getPosts()
  }).then(function (response) {
    $scope.posts = response.data
  }) */

})
