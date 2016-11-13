// Code goes here

(function () {
    angular.module("zippy-directive", [])
        .directive('zippyPanel', function () {
            return {
                restrict: "E",
                transclude: true,
                scope: {
                    title: "@",
                    panelHeadingColor: "@",
                    color: "@"
                },
                templateUrl: "./zippy.html",
                link: function (scope, element, attrs) {
                    scope.visible = false;
                    scope.toggle = function () {
                        scope.visible = !scope.visible;
                    }
                }
            }
        });

})();
