import * as readlineSync from 'readline-sync';
export function menu() {
    let opcao:number;
    
    while(true) {
        console.log("*******************");
        console.log("                                                     ");
        console.log("                Entre razoes e racoes                  ");
        console.log("                                                     ");
        console.log("*******************");
        console.log("                                                     ");
        console.log("          1 - Criar Produto                         ");
        console.log("          2 - Listar todas as Produtos               ");
        console.log("          3 -  Buscar Produto por Id                ");
        console.log("          4 - Atualizar Dados da Produto                    ");
        console.log("          5 - Apagar Produto                         ");
        console.log("          0 - Sair                                   ");
        console.log("                                                     ");
        console.log("*******************");

        console.log("Entre com a opção desejada: ");
        opcao = readlineSync.questionInt("");

        if(opcao == 0) {
            console.log("Obrigado pela preferencia");
            console.log("\nEntre racoes e razoes!");
            sobre()
            process.exit(0)
        }

        switch(opcao) {
            case 1:
                console.log("\nCriar Produto  ");
                keyPress();
                break;
            case 2:
                console.log("\nListar todas as Produtos");
                keyPress();
                break;
            case 3:
                console.log("\n Buscar Produto por Id");
                keyPress();
                break;
            case 4:
                console.log("\nAAtualizar Dados da Produto");
                keyPress();
                break;
            case 5:
                console.log("\nApagar Produto ");
                keyPress();
                break;
            default:
                console.log("\nOPÇÃO INVÁLIDA!");
                keyPress();
                break;
        }
    }
}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
}

function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Christian- christianfelipialvim@gmail.com");
    console.log("github.com/christianfelps");
    console.log("*****************************************************");
}
menu();