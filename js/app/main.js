var app = angular.module('app', [
    'ngRoute',

]);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/alerts", {
        controller: "AlertController",
        templateUrl: "js/app/partials/alert.html"
    });

    $routeProvider.when("/expiry", {
        controller: "ExpiryController",
        templateUrl: "js/app/partials/expiry.html"
    });
    $routeProvider.when("/", {
        controller: "HomeController",
        templateUrl: "js/app/partials/home.html"
    });

    $routeProvider.when("/inventory", {
        controller: "InventoryController",
        templateUrl: "js/app/partials/inventory.html"
    });

    $routeProvider.when("/stocklookup", {
        controller: "LookupController",
        templateUrl: "js/app/partials/lookup.html"
    });

    $routeProvider.when("/orders", {
        controller: "OrdersController",
        templateUrl: "js/app/partials/orders.html"
    });

    $routeProvider.when("/returns", {
        controller: "ReturnsController",
        templateUrl: "js/app/partials/returns.html"
    });

    $routeProvider.when("/stock", {
        controller: "StockController",
        templateUrl: "js/app/partials/stock.html"
    });

    $routeProvider.when("/supplies", {
        controller: "SuppliesController",
        templateUrl: "js/app/partials/supplies.html"
    });

}]);