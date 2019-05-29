import { Categoria } from './categoria';

export class ItemResponseModel {
    codigoItem: number;
    estoqueLoja: number;
    precoDe: number;
    nomenclaturaVarejo: string;
    ean: number;
    promocao: string;
    precoPor: number;
    nomenclatura: string;
    nomenclaturaDetalhada: string;
    principioAtivo: string;
    classeTerapeutica: string;
    situacaoDoItem: string;
    advertencias: string[];
    categorias: Categoria[];

}