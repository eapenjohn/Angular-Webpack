
import {Dataset} from '../dataset'
import {IDatasetApiModel} from './dataset.api.model'
import {IDatasetApiService} from  './api/dataset.api.service'

export interface IDatasetService {
    query(search?: string): ng.IHttpPromise<Array<Dataset>>
}

class DatsetService implements IDatasetService {

    constructor(private datasetApiService: IDatasetApiService) {

    }

    public query(serach?: string) {
       return this.datasetApiService.query().then((data: Array<IDatasetApiModel>) => {
           return  data.map((item) => {
              return this.mapApiModelToDataset(item);
            })
        })
    }

    private mapApiModelToDataset(apiModel: IDatasetApiModel): Dataset {
        var dataset = new Dataset();
        angular.extend(dataset, apiModel);
        return dataset;
    }
}


function factory(datasetApiService: IDatasetApiService) {
    return new DatsetService(datasetApiService);
}
angular.module('root.modules.dataset.services', [
    'root.modules.dataset.services.api'
])
    .service('datsetService', factory)