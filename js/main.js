function suma() {
    // Explicacion algoritmo
    alert ("Algoritmo que realiza una suma entre dos valores ingresados por")
    //Declaración de variables necesarias
    let a=0;
    let b=0;
    let s= 0;
    //Capturamos los datos

    a= parseInt(prompt("Ingrese el primer valor"));
    b= parseInt(prompt("Ingrese el segundo valor"));
    //Ralizamos la operación
    s = a+b;
    // Damos el resultado o respuesta
    alert("El resultado de la sumas es: " + s)
    
    
}

function opBasicas(){
    //Explicacion
    alert ("Algoritmo que va a realizar operaciones basicas")
    //Declaravcion de variables
    let s,a,b,r,m,d=0;

    //Capturamos los datos
    a= parseInt(prompt("Ingrese el primer valor"));
    b= parseInt(prompt("Ingrese el segundo valor"));
    //Ralizamos la operación
    s=a+b;
    r = a-b;
    m= a*b;
    d= a/b;
    // Damos respuesta a las operaciones
    alert("El resultado de la sumas es: " + s)
    alert("El resultado de la resta es: " + r);
    alert("El resultado de la multiplicación es: " + m);
    alert("El resultado de la división es: " + d)
}

function nCuadrado(){
    //Explicación del algoritmo 
    alert("Algoritmo que calcula el cuadrado de un número ingresado ");
    //Declaracion de variables
    let n,c = 0;
    //Capturamos los datos
    n= parseInt(prompt("Ingrese el primer valor"));
    
    //Ralizamos la operación
    c=n*n
    //Mostramos el resultado
    alert("El resultado al cuadrado es: " + c)
}

function aTriangulo(){
    //Explicación del algoritmo 
    alert("Algoritmo que determina el area de un triangulo ");
    //Declaravcion de variables
    let h,b, a = 0;
    //Capturamos los datos
    b= parseInt(prompt("Ingrese el valor de la base"));
    h= parseInt(prompt("Ingrese el valor de la altura"));
    //Ralizamos la operación
    a=(h*b)/2
    //Mostramos el resultado
    alert("El area del triangulo es: " + a)
}

function conMedidas(){
    //Explicacion del algoritmo 
    alert("Algoritmo que determina las pulgadas, kilometros y milimetros");
    //Declaracion de variables
    let m=0;
    //Capturamos los datos
    m= parseInt(prompt("Ingrese un valor"));
    //Realizamos las operaciones 
    p=m*39.37;
    k=m/1.000;
    mm=m*1000;  
    //Mostramos el resultado
    alert("El resultado en pulgadas es: " + p)
    alert("El resultado en kilometros es: " + k);
    alert("El resultado en milimetros es: " + mm);
}

function nMayor(){
    //Explicación del algoritmo
    alert("Algoritmos que determina el número mayor de dos números");
    //Declaravcion de variables
    let N1,N2 = 0;
    //Capturamos los datos
    N1= parseInt(prompt("Ingrese el primer número"));
    N2= parseInt(prompt("Ingrese el segundo número"));
    //Realizamos la opración 
    if (N1==N2){
        alert("Los valores ingresados son iguales");
    }else if(N1>N2){
        alert(N1 + "es mayor que" + N2);
    }else{
        alert(N2 + "es mayor que" + N1);
    }
}

function nMenor(){
    //Explicación del algoritmo
    alert("Algoritmos que determina el número menor de tres números");
    //Declaravcion de variables
    let N1,N2,N3 = 0;
    //Capturamos los datos
    N1= parseInt(prompt("Ingrese el primer número"));
    N2= parseInt(prompt("Ingrese el segundo número"));
    N3= parseInt(prompt("Ingrese el tercer número"));
    //Realizamos la opración 
    if ((N1==N2) && (N2==N3)){
        alert("Los valores ingresados son iguales");
    }else if ((N1<N2) && (N1<N3)){
        alert(N1+ " Es el numero menor");
    }else if ((N2<N1) && (N2<N3)){
        alert(N2+" Es el numero menor");
    }else {
        alert(N3+" Es el número menor");
    }
}

function proNotas(){
    //Explicación del algoritmo
    alert("Algoritmo para determinar el promedio de notas de un estudiante en la materia de algoritmia ");

    //Declaravcion de variables
    let n1,n2,n3,n4,n5,n6,n7;

    //Capturamos los datos
    n1= parseInt(prompt("Ingrese la primera nota"));
    n2= parseInt(prompt("Ingrese la segunda nota"));
    n3= parseInt(prompt("Ingrese la tercera nota"));
    n4= parseInt(prompt("Ingrese la cuarta nota"));
    n5= parseInt(prompt("Ingrese la quinta nota"));
    n6= parseInt(prompt("Ingrese la sexta nota"));
    n7= parseInt(prompt("Ingrese la septima nota"));

    //Realizamos la opración
    pro= (n1+n2+n3+n4+n5+n6+n7)/7;
    //Mostramos el resultado
    if (pro>=6.1){
        alert("Aprobo la materia con : " + pro);
    }else{
        alert("Reprobo la materia con: " +pro);
    }
   
}

function desCompras(){
    //Explicación del algoritmo
    alert("Algoritmo que permita saber cuanto tiene que pagar un cliente en una fruteria");
    //Declaración de variables
    let a=0;
    let M=100;
    //Capturamos los datos
    a=parseInt(prompt("ingrese cuantos kilos va a comprar"));
    //Realizamos las opraciones
    z=a*M
    d=z*0.1
    t=z-d
    //Mostramos el resultado
    alert("Ud compro " + a + "kilos de manzana a " + z + "pesos")
    alert("con el descuento del 10% le quedo en " + t)
   
}

function salSemanal(){
    //Explicación del algoritmo
    alert("Algoritmo para calcular salario semanal de un obrero");
    //Declaración de variables
    let s = 12500;
    let se = 18000;
    let h = 40;
    //Capturamos los datos
    let t = parseInt(prompt("Ingrese horas trabajadas:"));
    //Realizamos la opración y se muestra resultado
    let st = 0;

    if (t <= h) {
        st = t * s;
        alert("Su salario semanal por " + t + " horas trabajadas es de: " + st + " pesos.");
    } else {
        let he = t - h;
        st = (h * s) + (he * se);
        alert("Su salario semanal por " + t + " horas trabajadas es de: " + st + " pesos, incluyendo " + he + " horas extras.");
    }
}
