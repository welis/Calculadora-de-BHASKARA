//Funçao calcular
function calcular(){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);

    const delta = b * b - 4 * a * c;
    
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    
    if (delta < 0){
        document.getElementById("resposta").innerHTML = "Não há raízes reais";
    } else if (delta == 0){
        document.getElementById("resposta").innerHTML = "A raiz desta equação é " + (-b / (2 * a));
    } else {
        document.getElementById("resposta").innerHTML = "As raízes da equação são " + x1.toFixed(2) + " e " + x2.toFixed(2);
    }
}

function limpar(){
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
    document.getElementById("resposta").innerHTML = "";
}