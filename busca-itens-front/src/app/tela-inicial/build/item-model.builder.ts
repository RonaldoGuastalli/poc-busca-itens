import { ItemResponseModel } from '../model/item-response.model';
import { ItemRestService } from '../services/item-rest.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export class ItemModelBuilder {
    private itemModel: ItemResponseModel;

    constructor(){
        this.itemModel = new ItemResponseModel();
    }

    public static get() {
        return new ItemModelBuilder();
    }
}