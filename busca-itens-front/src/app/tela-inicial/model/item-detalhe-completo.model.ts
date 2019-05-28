import { Categoria } from './categoria';

export class ItemDetalheCompletoModel {
    constructor(
        public codigo: number,
        public codigoFabricante: number,
        public ean: number,
        public precoDe: number,
        public precoPor: number,
        public principioAtivo: string,
        public origemDesconto: string,
        public quantidade: number,
        public codigoPrincipioAtivo: number,
        public classeTerapeutica: string,
        public nomenclatura: string,
        public nomenclaturaDetalhada: string,
        public situacaoItem: string,
        public advertencias: string[],
        public categorias: Categoria[]
    ){ }
}