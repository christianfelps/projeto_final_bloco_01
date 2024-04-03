import { Produto } from "./Produto";

export class Racao extends Produto{
    
    private _pedigree: boolean;

	constructor(id: number, nome: string, sabor: string,  tipo: number, preco: number, pedigree: boolean) {
        super(id, nome, sabor, tipo, preco) // Atributos da Classe Produto
		this._pedigree = pedigree;
	}


    /**
     * Getter pedigree
     * @return {string}
     */
	public get pedigree(): boolean {
		return this._pedigree;
	}

    /**
     * Setter pedigree
     * @param {string} value
     */
	public set pedigree(value: boolean) {
		this._pedigree = value;
	}

    public visualizar(): void {
        super.visualizar();
        if(this.pedigree === true)
        console.log("Tem pedigree")
    else
        console.log(`Nao tem pedigree`);
    }
}