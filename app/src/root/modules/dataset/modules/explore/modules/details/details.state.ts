function configDetails($stateProvider: any) {

    $stateProvider
        .state('root.dataset.explore.details', {
            url: '/details/:id',
            views:
            {
                "datasetDetails": { template: require('./dataset.details.html') },
                "supplierDetails": { template: require('./supplier.details.html') }
            }
        })
}

configDetails.$inject = ['$stateProvider']

angular.module('root.modules.dataset.modules.explore.modules.details', [])
    .config(configDetails)