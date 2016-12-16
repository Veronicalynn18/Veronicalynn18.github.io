
    var app =angular.module("myModule", ["ngRoute"]);

    app.config(function($routeProvider){

        $routeProvider.when("/dogfinder",{
          templateUrl: 'views/dogfinder.html',
          controller: "myController"
        });

    });

  // careate a variable for petfinder json
  app.controller("myController", function($scope,$http){

  var petfinderData;

  var url = 'https://api.petfinder.com/shelter.getPets?key=d7ca0694f95be8be22ee522ba0c3329b&id=MI995&output=full&format=json'

  $.ajaxSetup({
    scriptCharset: "utf-8",
    contentType: "application/json; charset=utf-8"
  });

  $.ajax({
    type: 'GET',
    data: {},
    url: url + '&callback=?',
    dataType: 'json',
    success:function(data) {
          $scope.data = data;
          $scope.$apply();

      console.log(data.petfinder.pets);

    }
  });


});
