(function() {
  'use strict';
    angular.module('app.ui.map', []).directive('uiJqvmap', [
    function() {
        return {
            restrict: 'A',
            scope: {
                options: '='
            },
            link: function(scope, ele, attrs) {
                var options = scope.options;
                return ele.vectorMap(options);
            }
        };
    }]);
})();
