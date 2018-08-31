(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.checkDishes = function () {
    var num = countDishes($scope.dishes);
    $scope.message = showMessage(num);
  };

  function countDishes(dishes) {
    var count = 0;
    if (dishes) {
      var array = dishes.split(',');
      for (var item in array) {
        if (array[item].trim().length != 0) {
          count++;
        }
      }
    }
    return count;
  }

  function showMessage(num) {
    if (num === 0) {
      return 'Please enter data first';
    }
    else if (num <= 3) {
      return 'Enjoy!';
    } else {
      return 'Too much!';
    }
  }
}

})();
