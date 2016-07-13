 $scope.array=[] ;
 angular.module('hide',[]);
 angular.module('hide')
    .controller('list',function($scope) {
        
        
  $scope.addItem=function() {
      console.log("about to add " + $scope.itemToAdd + " item to our list");
      $scope.array.push($scope.itemToAdd);
      
  };
});
console.log($scope.array)