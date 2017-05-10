var app = angular.module("ToDoApp", []);

app.controller("NavCtrl", ($scope) => {
  $scope.title = "Ng-Todo";

  $scope.navItems = [{name: "Logout"},{name: "All Items"},{name: "New Item"}];
});

app.controller("ListCtrl", ($scope) => {
  $scope.poop = "💩";

  $scope.todos = [
        {
          id: 0,
          task: "mow the lawn",
          isCompleted: true,
          assignedTo: "Callan",
        },
        {
          id: 1,
          task: "grade quizzes",
          isCompleted: false,
          assignedTo: "Lauren",
        },
        {
          id: 2,
          task: "take a nap",
          isCompleted: false,
          assignedTo: "Zoe",
        }
      ];

  $scope.showNewItems = false;

  $scope.newItem = () => {
    $scope.showNewItems = true;
  };

  $scope.allItems = () => {
    $scope.showNewItems = false;
  };
});
