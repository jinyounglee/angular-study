/**
 * Created by user on 2015-11-22.
 */
angular.module('product')
    .constant('productListActiveClass', 'btn-primary')
    .constant('productListPageCount', 4)
    .controller('productListCtrl', function($scope, $filter, productListActiveClass, productListPageCount){
        var selectedCategory = null;

        $scope.selectedPage = 1;
        $scope.pageSize = productListPageCount;

        $scope.selectCategory = function(newCategory){
            selectedCategory = newCategory;
            $scope.selectedPage = 1;
        }

        $scope.selectPage = function(newPage){
            $scope.selectedPage = newPage;
        }

        $scope.categoryFilterFn = function(product){
            return selectedCategory == null || product.category == selectedCategory;
        }

        $scope.getCategoryClass = function(category){
            return (selectedCategory == category)? productListActiveClass : '';
        }

        $scope.getPageClass = function(page){
            return ($scope.selectedPage == page)? productListActiveClass : '';
        }
    });