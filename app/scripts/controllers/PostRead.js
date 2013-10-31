(function (angular) {
    'use strict';

    angular.module('blogDemoApp')
        .controller('PostReadCtrl', function ($scope, $routeParams, Post) {
            var id = $routeParams.id;

            $scope.post = null;

            Post.getByID({id: id}, function (post) {
                $scope.post = post;
            });
        });
}(angular));
