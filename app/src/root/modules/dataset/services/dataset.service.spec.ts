import './dataset.service'
import 'angular-mocks'
import {IDatasetService} from './dataset.service'

fdescribe('datasetcontroller tests', () => {
    
    var datasetService;
    var datasetApiService;
    beforeEach(()=>
    {
        angular.module('root.modules.dataset.services.api',[])
    })
    
    beforeEach(angular.mock.module(
        {
            "datasetApiService":
            {
                "query":()=>
                {
                    return [];
                }
            }
        }
    ))
    
    beforeEach(angular.mock.module('root.modules.dataset.services'))
    beforeEach(inject(function ($injector) {
        datasetService=$injector.get('datsetService');
        console.log("s");
        console.log(datasetService);
       
    }))

    fit("object created", () => {
       expect(datasetService).not.toBeNull();
    })
})