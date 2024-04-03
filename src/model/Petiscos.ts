import { Produto } from "./Produto";

export class Petisco extends Produto{
    
    private _petisco
    : string;

	constructor(id: number, nome: string, tipo: number, preco: number, petisco
        : string) {
        super(id, nome, tipo, preco) // Atributos da Classe Produto
		this._petisco
         = petisco
        ;
	}


    /**
     * Getter petisco
     * 
     * @return {string}
     */
	public get petisco
    (): string {
		return this._petisco
        ;
	}

    /**
     * Setter petisco
     * 
     * @param {string} value
     */
	public set petisco
    (value: string) {
		this._petisco
         = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log(`Petisco
        : ${this._petisco
        }`);
    }
}