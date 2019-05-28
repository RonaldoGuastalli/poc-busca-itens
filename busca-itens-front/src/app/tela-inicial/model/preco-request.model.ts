import { Preco } from './preco';

export class PrecoRequestModel {
    constructor(
        public codigoItem?: number,
        public preco?: Preco
    ){}

}