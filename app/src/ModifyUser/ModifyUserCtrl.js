'use strict'

userApp.controller('ModifyUserCtrl', function ($scope, $routeParams, UsersService) {
  $scope.userLoaded = false;

  UsersService.getUser($routeParams['userId']).then(function (response) {
    $scope.user = response.data;
    $scope.userLoaded = true;

    $scope.modifyUser = function (user) {
      $scope.modifySuccess = false;
      $scope.userLoaded = false;

      UsersService.modifyUser(user).then(function (response) {
        $scope.modifySuccess = true;
        $scope.userLoaded = true;
      })
    }
  })
  // $scope.newUser = {}
  //
  // $scope.modifyUser = function (myUser) {
  //   $scope.modifySuccess = false
  //
  //   UsersService.modifyUser(myUser).then(function (response) {
  //     $scope.newUser = {}
  //
  //     $scope.newUserId = response.data.id
  //     $scope.modifySuccess = true
  //   })
  // }
})
