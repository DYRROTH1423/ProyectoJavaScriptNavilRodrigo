function suemar(){
    let valor1=document.getElementById("dato1").value;
    let valor2=document.getElementById("dato2").value;
    let resultadoTotal=document.getElementById("resultado");
    
    let resultadoSuma=parseFloat(valor1)+parseFloat(valor2);
    
    resultadoTotal.innerHTML= "El resultado es: " + resultadoSuma;
}
function restar(){
    let valor1=document.getElementById("dato1").value;
    let valor2=document.getElementById("dato2").value;
    let resultadoTotal=document.getElementById("resultado");
    
    let resultadoresta=parseFloat(valor1)-parseFloat(valor2);

    resultadoTotal.innerHTML= "El resultado es: " + resultadoresta;
}
function multiplicacion(){
    let valor1=document.getElementById("dato1").value;
    let valor2=document.getElementById("dato2").value;
    let resultadoTotal=document.getElementById("resultado");
    
    let resultadomultiplicacion=parseFloat(valor1)*parseFloat(valor2);

    resultadoTotal.innerHTML= "El resultado es: " + resultadomultiplicacion;
}
function divicion(){
    let valor1=document.getElementById("dato1").value;
    let valor2=document.getElementById("dato2").value;
    let resultadoTotal=document.getElementById("resultado");
    
    let resultadodivicion=parseFloat(valor1)/parseFloat(valor2);

    resultadoTotal.innerHTML= "El resultado es: " + resultadodivicion;
}
