
import 'angular-mocks'
import {IMockupRegisterServiceProivider} from '../../mockupRegister.service'

interface IMockupService {
    name: string;
    start($injcetor);
}

config.$inject = ['mockupRegisterServiceProvider']

function config(mockupRegisterServiceProvider: IMockupRegisterServiceProivider) {
   
    var service: IMockupService =
        {
            name: "datasset",
            start: ($injector: any) => {
                var $httpBackend: ng.IHttpBackendService = $injector.get('$httpBackend');
             
                function getDatasets()
                {
                       var datasetMockHelper=$injector.get('datasetMockHelper');
                      var datasets=datasetMockHelper.getddddd();
                      return  [200, datasets, { 'X-Total-Count': datasets.length }];
                }
             
           
                $httpBackend
                    .whenGET(/^.*\/api\/datasets/)
                    .respond(() => { return getDatasets() });

             
            }
        }
    mockupRegisterServiceProvider.add(service);
}

class DatasetMockHelper {
  datasets = require('./dataset.json')

  public getddddd() {
      
        return this.datasets;
    }
   
}

function   factory() {
        return  new DatasetMockHelper();
    }


angular.module('app.mockups.api.dataset', [
    'ngMockE2E'
])
.factory('datasetMockHelper',factory)
    .config(config)
    