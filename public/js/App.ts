namespace App {
    //setup the node module.
    let app = angular.module ('App', ['ui.router']);

    app.config ([
        '$stateProvider',
        ($stateProvider: angular.ui.IStateProvider) => {
            $stateProvider
                .state ('home',{
                    url:'/',
                    // template: 'This is my home page. <p>title value: {{title}} </p>',
                    templateUrl:'templates/home.html',
                    controller: App.HomeController

                })
                .state ('about',{
                    url:'/about',
                    templateUrl:'templates/about.html',
                    controller: App.AboutController,
                    controllerAs: 'aboutController'
                })
                .state ('contact',{
                    url:'/contact',
                    templateUrl:'templates/contact.html',
                    controller: App.ContactController,
                    controllerAs: 'contactController'
                })
                ;
                .state ('FAQ', {
                url: '/faq',
                templateUrl: 'templates/faq.html',
                controller: App.FaqController,
                controllerAs: 'faqController'
            })
            ;
        }
    ]);

}
