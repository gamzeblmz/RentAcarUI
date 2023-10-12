import { Model } from "../../../shared/models/model";

export interface Car{
     plate:String;
     dailyPrice:number;
     modelYear:number;
     state:number;
     imageUrl:String;
     brandId:String;
     model:Model;
}
