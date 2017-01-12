var app = angular.module('app', [
    'ngRoute', 

]);
app.config(['$routeProvider', function ($routeProvider) {
   $routeProvider.when("/", {
       controller: "HomeController",
        templateUrl: "js/app/partials/home.html"
   });

   $routeProvider.when("/district", {
       controller: "DistrictController",
       templateUrl: "js/app/partials/district.html"
   });
    $routeProvider.when("/facility", {
       controller: "FacilityController",
       templateUrl: "js/app/partials/facility.html"
      });

}]);