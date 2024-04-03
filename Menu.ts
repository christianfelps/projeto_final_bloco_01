import * as readlineSync from 'readline-sync';
import { ProdutoController } from "./src/Controller/ProdutoController";
import { Petisco } from "./src/model/Petiscos";
import { Racao } from "./src/model/Racao";

export function main() {
    
    let opcao, id, tipo, preco: number;
    let pedigree: boolean;
    let nome, racao, petisco: string, sabor: string = "";
    let tipoProduto = ['Racao', 'Petisco'];

    // Objeto da Classe ProdutoController
    const produtoController: ProdutoController = new ProdutoController();

    produtoController.cadastrar(new Racao(produtoController.gerarId(),
        "Racao max 15 kilos", 'figado',1, 112.00, false));

    produtoController.cadastrar(new Petisco(produtoController.gerarId(),
        "Wiskas",'Figado e frango', 2, 11.00, 'Sache'));
        

    while (true) {

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("               Entre Razoes e Racoes                   ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Produto                        ");
        console.log("            2 - Listar todas as Produtos             ");
        console.log("            3 - Buscar Produto por Id                ");
        console.log("            4 - Atualizar Dados da Produto           ");
        console.log("            5 - Apagar Produto                       ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
            );
        console.log("Entre com a opção desejada: ");
        opcao = readlineSync.questionInt("");

        if (opcao == 0) {
            console.log(
                "\nFarmácia Bem Estar - Racao Barato é aqui!");
            sobre();

            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log( "\n\nCriar Produto\n\n", );

                nome = readlineSync.question("Digite o Nome do Produto: ");

                tipo = readlineSync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

                preco = readlineSync.questionFloat("Digite o preco: ");

                sabor = readlineSync.question("Digite o sabor: ")

                switch (tipo) {
                    case 1:
                        console.log("A racao tem pedigree?")
                        pedigree = readlineSync.keyInYNStrict("[Y]PARA SIM, [N] PARA NAO")
                        produtoController.cadastrar(new Racao(produtoController.gerarId(),
                            nome, sabor, tipo, preco, pedigree, ));
                        break;
                    case 2:
                        petisco = readlineSync.question("Digite sabor do Petisco: ");
                        produtoController.cadastrar(new Petisco(produtoController.gerarId(),
                            nome,sabor, tipo, preco, petisco, ));
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log(
                    "\n\nListar todos os Produtos\n\n", );

                produtoController.listarTodosProdutos();

                keyPress()
                break;
            case 3:
                console.log(
                    "\n\nConsultar dados do Produto - por Id\n\n", );

                    id = readlineSync.questionInt("Digite o Id do Produto: ");
                    produtoController.listarPorId(id);

                keyPress()
                break;
            case 4:
                console.log(
                    "\n\nAtualizar dados do Produto\n\n", );

                    id = readlineSync.questionInt("Digite o Id do Produto: ");
                    
                    let produto = produtoController.buscarNoArray(id);

                    if (produto !== null){

                        nome = readlineSync.question("Digite o Nome do Produto: ");

                        tipo = readlineSync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

                        sabor =  readlineSync.question("Digite o sabor do Produto: ");
        
                        preco = readlineSync.questionFloat("Digite o preco: ");
        
                        switch (tipo) {
                            case 1:
                                console.log("A racao tem pedigree?")
                                pedigree = readlineSync.keyInYNStrict("[Y]PARA SIM, [N] PARA NAO")
                                produtoController.cadastrar(new Racao(produtoController.gerarId(),
                                    nome, sabor, tipo, preco, pedigree, ));
                                break;
                                        
                                break;
                            case 2:
                                petisco = readlineSync.question("Digite o tipo de Petisco: ");
                                produtoController.atualizar(new Petisco(id,
                                    nome, sabor, tipo, preco, petisco));
                                    
                                break;
                        }

                    }else
                        console.log("Produto não Encontrado!")

                keyPress()
                break;
            case 5:
                console.log( "\n\nApagar um Produto\n\n", );

                    id = readlineSync.questionInt("Digite o Id do Produto: ");
                    produtoController.deletar(id);

                keyPress()
                break;
            default:
                console.log( "\nOpção Inválida!\n", );

                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Christian - christianfelipialvim@gmail.com");
    console.log("https://github.com/christianfelps");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlineSync.prompt();
}

main();