//switch

function pedir(){
    var valor = prompt("Digite um valor de 1 a 4");
    
    switch(Number(valor)){
        case 1:
            alert("Voce escolheu 1 = Item 01");
            break;
        case 2:
            alert("Voce escolheu 2 = Item 02");
            break;
        case 3:
            alert("Voce escolheu 3 = Item 03");
            break;
        case 4:
            alert("Voce escolheu 4 = Item 04");
            break;
        default:
            alert("Escolha uma das opções!")
    }
}

