  // careate a variable for petfinder json
  var app= angular.module("myModule");
  app.controller("myController",function($scope,$http){


  var petfinderData;




  var url = 'https://api.petfinder.com/shelter.getPets?key=d7ca0694f95be8be22ee522ba0c3329b&id=MI995&output=full&format=json'

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
