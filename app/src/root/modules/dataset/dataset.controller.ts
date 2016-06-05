import {IDatasetService} from './services/dataset.service'
import {IDataset} from './dataset'
export default class DatasetController 
{
    datasets:Array<IDataset>
 constructor(private datsetService :IDatasetService)
 {
    
     this.get();
 }   
 public get()
 {
     this.datsetService.query().then((datsets:Array<IDataset>)=>
     {
         this.datasets=datsets;
     })
 } 
}

DatasetController.$inject=['datsetService']