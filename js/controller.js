  // careate a variable for petfinder json
  var app= angular.module("myModule");
  app.controller("myController",function($scope,$http){


  var petfinderData;




  var url = 'http://api.petfinder.com/shelter.getPets?key=d7ca0694f95be8be22ee522ba0c3329b&id=MI995&output=full&format=json'

  $.ajax({
    type: 'GET',
    data: {},
    url: url + '&callback=?',
    dataType: 'json',
    success:function(data) {
          $scope.data = data;
          $scope.$apply();

      console.log(data.petfinder.pets);
      //petfinderData = data;

      for(var i=0; i<25;i++){
          var $inner = $("<div class='new'></div>");
        //  $("#container").append($inner);

              for (var h=2; h<5; h+=5){
                $inner.append('<a class="image-link" href="' + data.petfinder.pets.pet[i].media.photos.photo[h].$t+'" data-lightbox="esset" data-title="'+ data.petfinder.pets.pet[i].name.$t + ' '+"About: "+ data.petfinder.pets.pet[i].description.$t +'"><img class="example-image" src="'+ data.petfinder.pets.pet[i].media.photos.photo[h].$t+'" alt="" /></a>');


              };

          $inner.append('<div class="name">' + data.petfinder.pets.pet[i].name.$t + '</div>');
          $inner.append('<div class="animal">' + data.petfinder.pets.pet[i].animal.$t + '</div>');
          $inner.append('<div class="sex">'+"Sex: "+ data.petfinder.pets.pet[i].sex.$t + '</div>');
          $inner.append('<div class="age">'+ "Age: "+ data.petfinder.pets.pet[i].age.$t + '</div>');
          $inner.append('<div class="size">'+ "Size: " + data.petfinder.pets.pet[i].size.$t + '</div>');

          if (Array.isArray(data.petfinder.pets.pet[i].breeds.breed)){
              for (var j = 0; j<2; j++){
                  $inner.append('<div class="breed">'+"Breed: " + data.petfinder.pets.pet[i].breeds.breed[j].$t+ " Mix"+'</div>');
              };
          }
            else{
              $inner.append('<div class="breed">'+"Breed: " + data.petfinder.pets.pet[i].breeds.breed.$t + '</div>');
            };

          $inner.append('<div class="about">' +"About: "+ data.petfinder.pets.pet[i].description.$t + '</div>');


      };

    }


      });
    });
