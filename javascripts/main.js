var app = angular.module("ToDoApp", []);

app.controller("NavCtrl", ($scope) => {
  $scope.title = "Ng-Todo";

  $scope.navItems = [{name: "Logout"},{name: "All Items"},{name: "New Item"}];
});

app.controller("ListCtrl", ($scope) => {
  $scope.poop = "💩";

  $scope.todos = [{task: "Nap", isCompleted: false},{task: "Cry", isCompleted: false}];

  $scope.showNewItems = false;

  $scope.newItem = () => {
    $scope.showNewItems = true;
  };

  $scope.allItems = () => {
    $scope.showNewItems = false;
  };
});
