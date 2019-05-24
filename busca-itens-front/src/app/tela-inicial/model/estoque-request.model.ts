export class EstoqueRequestModel {
    constructor(
    public estoqueLoja?: number,
    public estoqueApoio?: number,
    public reservaVirtual?: number,
    public estoqueCd?: number,
    public estoqueCdApoio?: number,
    public filial?: number,
    public codigoItem?: number
    ){ }
}