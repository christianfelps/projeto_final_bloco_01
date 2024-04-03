import { Produto } from "./Produto";

export class Racao extends Produto{
    
    private _pedigree: string;

	constructor(id: number, nome: string, tipo: number, preco: number, pedigree: string) {
        super(id, nome, tipo, preco) // Atributos da Classe Produto
		this._pedigree = pedigree;
	}


    /**
     * Getter pedigree
     * @return {string}
     */
	public get pedigree(): string {
		return this._pedigree;
	}

    /**
     * Setter pedigree
     * @param {string} value
     */
	public set pedigree(value: string) {
		this._pedigree = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log(`Pedigree: ${this._pedigree}`);
    }
}