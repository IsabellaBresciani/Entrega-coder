//Variables
let arti=0
let pantalon=0
let calzas=0
let remeras=0
let camisones=0
let pantalones=0
let respuestaCompra=" "
let x =""

const precios=[5000,4000,3000,2000];
const producto=["pantalones","calzas","camisones","remeras"]
const articulos=["","","",""];

//Objetos
class Articulo {
    constructor (titulo, precio){
        this.titulo = titulo.toUpperCase();
        this.precio = parseFloat(precio);
    }
    sumaIva(){
        this.precio = this.precio *1.21;
    }
    
}

for (let index=0;index<4;index++){
    const articulos = new Articulo(producto[index],precios[index]);
}




//funciones
function impresion(articulo,cantidad,precio){
    console.log(articulo,": ", cantidad, "Monto:  ", cantidad*precio)
}

function compra(){
    arti=0
    cantidad=parseInt(prompt("cuantos queres comprar?"))
    arti=arti+cantidad
}


let respuesta = prompt("Bienvenido a aktual la tienda de ropa de embarazada mas grande en Argentina, Quiere realizar una compra? si/no")
while(respuesta.toLowerCase()=="si"){
    //seleccion de productos
    do{
        respuestaCompra = prompt(" Que desea comprar? \n PANTALON,REMERA,CALZA,CAMISON")
        respuestaCompra=respuestaCompra.toLowerCase()
        if(respuestaCompra=="pantalones"|| respuestaCompra=="pantalones " || respuestaCompra=="jean " || respuestaCompra=="jean" || respuestaCompra=="jeans" || respuestacompra=="jean" || respuestaCompra=="pantalon "){
            respuestaCompra="pantalon"
        }
        switch(respuestaCompra){
            case "pantalon":
                compra();
                pantalones=pantalones+arti
                
            break;
            case "calza":
                compra();
                calzas=calzas+arti
                
            break;
            case "camison":
                compra();
                camisones=camisones+arti
                
            break;
            case "remera":
                compra();
                remeras=remeras+arti
            break;
            default:
                console.log("El articulo ingresado no es valido, vuelva a intentarlo")
        }
        x=prompt("desea incorporar algun articulo mas? si/no")
    }while(x.toLowerCase() == "si")
    console.log(pantalones)
    let monto = pantalones*5000+calzas*4000+camisones*2000+remeras*3000
    console.log("EL MONTO TOTAL ES: ",monto)
    impresion("pantalones",pantalones,5000)
    impresion("calzas",calzas,4000)
    impresion("camisones",camisones,5000)
    impresion("remeras",remeras,3000)
    respuesta = prompt("Quiere realizar otra compra? si/no")
}


    


