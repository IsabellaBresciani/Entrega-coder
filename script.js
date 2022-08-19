//Variables
let arti=0
let pantalon=0
let calzas=0
let remeras=0
let camisones=0
let pantalones=0
let respuestaCompra=" "
let x =""
let cantidad=0

const precios=[5000,4000,3000,2000];
const producto=["Pantalones","Palzas","Camisones","Remeras"]
const imagenes=["./Imagenes/embarazada1.jpg","./Imagenes/embarazada2.webp","./Imagenes/embarazada3.jpg","./Imagenes/embarazada4.jfif"]
const descriptions=["En general llevar ropa muy ajustada no es recomendable ya que, entre otras cosas, dificulta la circulación, favorece la aparición de infecciones vaginales", "Recomendadas para usar durante la realizacion de alguna actividad fisica.","REMERA BÁSICA DE MANGAS 3/4 PENSADA PARA EL EMBARAZO Y LACTANCIA. CON ABERTURA OCULTA BAJO EL BUSTO PARA FACILITAR LA LACTANCIA","Para el sanatorio, se recomienda llevar dos o tres pijamas o camisones, por si acaso.REMERA BÁSICA DE MANGAS 3/4 PENSADA PARA EL EMBARAZO Y LACTANCIA. CON ABERTURA OCULTA BAJO EL BUSTO PARA FACILITAR LA LACTANCIA."]
const articulos=[];
const cantidades=[0,0,0,0]
const divProductos = document.getElementById("divProductos")

//Objetos
class Articulo {
    constructor (imagen,titulo,description, precio){
        this.imagen = imagen
        this.titulo = titulo;
        this.description=description;
        this.precio = parseFloat(precio);
    }
    sumaIva(){
        this.precio = this.precio *1.21;
    }
    
}

for (let index=0;index<producto.length;index++){
    const art=(new Articulo(imagenes[index],producto[index],descriptions[index],precios[index]))
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


articulos.forEach((producto) => {
    divProductos.innerHTML += `
    <div class="producto">
        <picture class="producto-img"> <img class="imagenes" src=${producto.imagen}> </picture>
        <p class="producto-title"> ${producto.titulo}</p>
        <div class="producto-description"> <p>${producto.description}</p></div>
        <p class="producto-price"> ${producto.precio}</p>
        <button class="producto-button"> Comprar <button>
    </div>`
})

let compras = 1


let respuesta = prompt("Bienvenido a aktual la tienda de ropa de embarazada mas grande en Argentina, Quiere realizar una compra? si/no")
while(respuesta=="si"){
    
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
    


let boton = document.getElementsByClassName("producto-button")
boton.onclick = () => {console.log("realizaste una compra")}