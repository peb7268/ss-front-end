'use strict';
angular.module('Dribble.controllers', []).controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
    localforage.getItem('skip_intro', function(err, resp){
        if(resp){ window.skip_intro = resp; $state.go('main'); }
    });

  // Called to navigate to the main app
  $scope.startApp = function() {
    $state.go('main');
      console.log('main');
      //localforage.getItem('skip_intro', function(err, resp){
      //    debugger;
      //});
  };
  $scope.next = function() {
    console.log('next');
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    console.log('previous');
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
}).controller('MainCtrl', function($scope, $state, $http) {
    //var url = "https://api.pinterest.com/v3/pidgets/users/alinabarrick/pins/" + "?callback=JSON_CALLBACK";
    var url = "http://ss.com:80/soaps";

    $http.get(url).
    success(function(resp, status, headers, config) {
        $scope.items = resp;
        //$scope.pins = resp.data.pins;

    }).
    error(function(data, status, headers, config) {
        debugger;
    });

  $scope.toIntro = function(){
    $state.go('intro');
  };
});
