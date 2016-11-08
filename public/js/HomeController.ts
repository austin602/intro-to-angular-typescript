namespace App {

    export class HomeController{
        static $inject = ['$scope'];

        constructor (private $scope) {
            $scope.title = 'Home Page';
            
        }
    }

}
