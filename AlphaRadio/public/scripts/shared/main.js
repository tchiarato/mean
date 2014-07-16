(function() {
    'use strict';
    angular.module('app.controllers', [])
    .controller('AppCtrl', [
            '$scope', '$rootScope', 
    function($scope ,  $rootScope) {

        $scope.main = {
            brand: 'Alpha Radio',
            name: ''
        };

        $scope.admin = {
            layout: 'wide',
            menu: 'vertical',
            fixedHeader: true,
            fixedSidebar: false,
            pageTransition: {
                "name" : 'Scale up',
                "class": 'ainmate-scale-up'
            }
        };

        $rootScope.$on('auth:success', function(event, user) {
            $scope.main.name = user.name;
        });

        return $scope.color = {
            primary: '#248AAF',
            success: '#3CBC8D',
            info: '#29B7D3',
            infoAlt: '#666699',
            warning: '#FAC552',
            danger: '#E9422E'
        };
    }])
    .controller('HeaderCtrl', [
            '$scope', 
    function($scope) {
        // Header Controller
    }])
    .controller('NavContainerCtrl', [
            '$scope', 
    function($scope) {
        // NavContainer Controller
    }])
    .controller('NavCtrl', [
            '$scope', 
    function($scope) {
        // Nav Controller
    }])
    .controller('DashboardCtrl', [
            '$scope', 
    function($scope) {
        // Dashboard Controller
    }]);
})();
