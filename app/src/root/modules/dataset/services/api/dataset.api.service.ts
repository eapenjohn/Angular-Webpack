import {IDatasetApiModel} from '../dataset.api.model'

export interface IDatasetApiService
{
    query(seach?:string):ng.IHttpPromise<IDatasetApiModel>;
}

class DatasetApiService implements IDatasetApiService
{
    constructor(private $http:ng.IHttpService)
    {
        
    }
    public query(search?:string) :ng.IHttpPromise<IDatasetApiModel>
    {
        return this.$http.get("/api/datasets").then((response)=>
        {
            return response.data;
        })
    }
}


function factory($http)
{
    return new DatasetApiService($http);
}


factory.$inject=['$http']

angular.module('root.modules.dataset.services.api',[])
.service('datasetApiService',factory)