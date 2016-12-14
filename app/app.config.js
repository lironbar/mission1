angular.
	module('form-App')
		.config(function($stateProvider, $urlRouterProvider) {

				$stateProvider

				// route to show our basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: 'templates/main.html',
            controller: 'formController'
        })

				// nested states
        // each of these sections will have their own view
        .state('form.pic1', {
            url: '/pic1',
            templateUrl: 'templates/pic1.html'
        })


        .state('form.pic2', {
            url: '/pic2',
            templateUrl: 'templates/pic2.html'
        })


        .state('form.pic3', {
            url: '/pic3',
            templateUrl: 'templates/pic3.html'
        })

				.state('form.pic4', {
						url: '/pic4',
						templateUrl: 'templates/pic4.html'
				})

				.state('form.pic5', {
						url: '/pic5',
						templateUrl: 'templates/pic5.html'
				});


    // send users to the form page
    $urlRouterProvider.otherwise('/form/pic1');
})
