let ticket = parseInt(prompt("Elige la Opción del ticket a comprar: \n1- Meet and Greet: $7.000 \n2- VIP: $5.000 \n3- General: $2.000 "))

while (ticket < 1 || ticket > 3) {
    alert("Ticket inválido. Por favor, elige una opción válida.");
    ticket = parseInt(prompt("Elige la Opción del ticket a comprar: \n1- Meet and Greet: $7.000 \n2- VIP: $5.000 \n3- General: $2.000 "));
}
    
let cantidad = parseInt(prompt("Ingresa la cantidad de ticket que deseas comprar"))


    function comprar(boleto, entradas){
        switch(boleto){
            case 1:
                return 7000 * entradas;
           
            case 2:
                return 5000 * entradas;
            case 3:
                return 2000 * entradas; 
            default:
                return 0;        
        }

    }

    let totalPagar = comprar(ticket, cantidad); 
    alert("Felicitaciones! Ya tenes tus tickets \nEl total a pagar es: $" + totalPagar)        

 
 