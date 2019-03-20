var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");
var l = 0;
var lineas = 30;
var yi, xf; 
var xi, yf;
var colorcito = "#4a192c"; 

for(l = 0; l < lineas; l++)
{
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
}

for(l = 0; l < lineas; l++)
{
    xi = 10 * l;
    yf = 10 * (l + 1);
    dibujarLinea(colorcito, xi, 0, 300, yf);
}
for(l = 0; l < lineas; l++)
{
    yi = 10 * l;
    xf = 300 - (l * 10);
    dibujarLinea(colorcito, 300, yi, xf, 300);
}

for(l = 0; l < lineas; l++)
{
    yi = 300 - (l * 10);
    xf = 10 * l;
    dibujarLinea(colorcito, 0, yi, xf, 0);
}


dibujarLinea(colorcito, 0, 0 , 0, 299);
dibujarLinea(colorcito, 1, 299, 299, 299);
dibujarLinea(colorcito, 299, 0, 0, 0 );
dibujarLinea(colorcito, 299, 299, 299, 0);

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, )
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo (xInicial , yInicial);
    lienzo.lineTo (xFinal, yFinal);
    lienzo.stroke ();
    lienzo.closePath(); 
}
