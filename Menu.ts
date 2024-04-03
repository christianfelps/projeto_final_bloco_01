import readlinesync = require("readline-sync");

export function main() {

    let opcao, id, tipo, preco: number;
    let nome, racao, petisco: string;
    let tipoProduto = ['Racao', 'Petisco'];

    // Objeto da Classe ProdutoController
    const produtoController: ProdutoController = new ProdutoController();

    produtoController.cadastrar(new Medicamento(produtoController.gerarId(),
        "Tylenol 750 mg", 1, 45.00, "Paracetamol 750 mg"));

    produtoController.cadastrar(new Cosmetico(produtoController.gerarId(),
        "Rimel", 2, 60.00, "-"));

    while (true) {

        console.log(colors.bg.black, colors.fg.yellow,
            "*****************************************************");
        console.log("                                                     ");
        console.log("                Entre Razoes e Racoes                   ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Listar todos os Produtos                       ");
        console.log("            2 -Listar Produto pelo ID            ");
        console.log("            3 - Cadastrar Produto                ");
        console.log("            4 - Atualizar Dados da Produto           ");
        console.log("            5 - Deletar Produto                       ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
            );

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log(colors.fg.greenstrong,
                "\nFarmácia Bem Estar - Medicamento Barato é aqui!");
            sobre();
            console.log( "");
            process.exit(0);
        }

        switch (opcao) {
            case 1: 
             console.log(
                "\n\nListar todos os Produtos\n\n" );

            produtoController.listarTodas();

            keyPress()
            break;
                
                case 2:
                console.log(
                    "\n\nConsultar dados do Produto - por Id\n\n", );
    
                    id = readlinesync.questionInt("Digite o Id do Produto: ");
                    produtoController.procurarPorId(id);
    
                keyPress()
                break;
              
            case 3:
                console.log("\n\Cadastrar Produto\n\n", );

                nome = readlinesync.question("Digite o Nome do Produto: ");

                tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

                preco = readlinesync.questionFloat("Digite o preco: ");

                switch (tipo) {
                    case 1:
                        generico = readlinesync.question("Digite o Nome Generico do Medicamento: ");
                        produtoController.cadastrar(new Medicamento(produtoController.gerarId(),
                            nome, tipo, preco, generico));
                        break;
                    case 2:
                        fragancia = readlinesync.question("Digite a frangancia do Cosmetico: ");
                        produtoController.cadastrar(new Cosmetico(produtoController.gerarId(),
                            nome, tipo, preco, fragancia));
                        break;
                }

                keyPress()
                break;
            case 4:
                console.log(,
                    "\n\nAtualizar dados do Produto\n\n", );

                    id = readlinesync.questionInt("Digite o Id do Produto: ");
                    
                    let produto = produtoController.buscarNoArray(id);

                    if (produto !== null){

                        nome = readlinesync.question("Digite o Nome do Produto: ");

                        tipo = produto.tipo;
        
                        preco = readlinesync.questionFloat("Digite o preco: ");
        
                        switch (tipo) {
                            case 1:
                                generico = readlinesync.question("Digite o Nome Generico do Medicamento: ");
                                produtoController.atualizar(new Medicamento(id,
                                    nome, tipo, preco, generico));
                                break;
                            case 2:
                                fragancia = readlinesync.question("Digite a frangancia do Cosmetico: ");
                                produtoController.atualizar(new Cosmetico(id,
                                    nome, tipo, preco, fragancia));
                                break;
                        }

                    }else
                        console.log("Produto não Encontrado!")

                keyPress()
                break;
            case 5:
                console.log(,
                    "\n\Deletar um Produto\n\n", );

                    id = readlinesync.questionInt("Digite o Id do Produto: ");
                    produtoController.deletar(id);

                keyPress()
                break;
            default:
                console.log(,
                    "\nOpção Inválida!\n", );

                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Generation Brasil - rafael@email.com");
    console.log("github.com/rafaelq80");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();