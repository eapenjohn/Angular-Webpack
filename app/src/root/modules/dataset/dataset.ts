
export interface IDataset
{
    name:string;
    description:string;
    id:string;
    supplierName:string;
    
}

export class Dataset implements IDataset
{
    name:string;
    description:string;
    id:string;
    supplierName:string;
}