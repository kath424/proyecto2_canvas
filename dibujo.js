var texto = document.getElementById("textoLineas");
var boton = document.getElementById("botoncito");

boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, )
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo (xInicial , yInicial);
    lienzo.lineTo (xFinal, yFinal);
    lienzo.stroke ();
    lienzo.closePath(); 
}

function dibujoPorClick()
{
    var datoLineas = texto.value;
    var l = 0;
    var lineas = datoLineas;
    var yi, xf; 
    var xi, yf;
    var colorcito = "#4a192c"; 
    var espacio = 300/lineas;
    
    for(l = 0; l < lineas; l++)
    {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea(colorcito, 0, yi, xf, 300);
    }
    
    for(l = 0; l < lineas; l++)
    {
        xi = espacio * l;
        yf = espacio * (l + 1);
        dibujarLinea(colorcito, xi, 0, 300, yf);
    }
    for(l = 0; l < lineas; l++)
    {
        yi = espacio * l;
        xf = 300 - (l * espacio);
        dibujarLinea(colorcito, 300, yi, xf, 300);
    }
    
    for(l = 0; l < lineas; l++)
    {
        yi = 300 - (l * espacio);
        xf = espacio * l;
        dibujarLinea(colorcito, 0, yi, xf, 0);
    }
    
    dibujarLinea(colorcito, 0, 0 , 0, 299);
    dibujarLinea(colorcito, 1, 299, 299, 299);
    dibujarLinea(colorcito, 299, 0, 0, 0 );
    dibujarLinea(colorcito, 299, 299, 299, 0);
    
}
