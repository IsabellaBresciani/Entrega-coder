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
const articulos=[];
const cantidades=[0,0,0,0]

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

for (let index=0;index<producto.length;index++){
    const art=(new Articulo(producto[index],precios[index]))
    articulos.push(art)
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

compras=1

let respuesta = prompt("Bienvenido a aktual la tienda de ropa de embarazada mas grande en Argentina, Quiere realizar una compra? si/no")
while(respuesta.toLowerCase()=="si"){
    
    //seleccion de productos
    for(let index=0;index<producto.length;index++){
       cantidades[index]=0
    }
    do{
        respuestaCompra = prompt(" Que desea comprar? \n PANTALON,REMERA,CALZA,CAMISON")
        respuestaCompra=respuestaCompra.toLowerCase()
        switch(respuestaCompra){
            case "pantalon":
                compra();
                cantidades[0]=cantidades[0]+arti
            break;
            case "calza":
                compra();
                cantidades[1]=cantidades[1]+arti
                
            break;
            case "camison":
                compra();
                cantidades[2]=cantidades[2]+arti
                
            break;
            case "remera":
                compra();
                cantidades[3]=cantidades[3]+arti
            break;
            default:
                console.log("El articulo ingresado no es valido, vuelva a intentarlo")
        }
        x=prompt("desea incorporar algun articulo mas? si/no")
    }while(x.toLowerCase() == "si")
    let monto = 0
    console.log(`Numero de compra: `+ compras)
    for(let index=0;index<producto.length;index++){
        impresion(articulos[index].titulo,cantidades[index],articulos[index].precio)
        monto=monto+cantidades[index]*articulos[index].precio
    }
    console.log("EL MONTO TOTAL ES: ",monto)
    respuesta = prompt("Quiere realizar otra compra? si/no")
    compras=compras+1
}


    


