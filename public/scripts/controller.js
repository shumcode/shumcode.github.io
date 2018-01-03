(function () {
  function MainController(MyService) {
    var vm = this;
    vm.homeRoute = function () {
      MyService.homeRoute();
    }
    vm.aboutRoute = function () {
      MyService.aboutRoute();
    }
    vm.contactRoute = function () {
      MyService.contactRoute();
    }
  }

  angular
    .module("app")
    .controller("MainController", MainController);
})();
