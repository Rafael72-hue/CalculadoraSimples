var array = [];
var horario = new Date()
var hora = horario.getHours()
function funcao(param) {
    var txt = document.getElementById('txt');
    array.push(param);
    txt.innerHTML += (param);
}

function resultado(){
    var resultado = "";
    for (var i in array){
        resultado += array[i];
    }
    resultado = eval(resultado);
    txt.innerHTML = (resultado.toFixed(1));
}

function limpar(){
    for(var c = 1; c < array.length; c++){
        array = array.splice();
    }
    result = 0
    txt.innerHTML = "";
}

if(hora >= 18){
    document.body.style.background = "#1c1e21";
    document.body.querySelector('div.calculadora').style.background = "#313131"
    document.body.querySelector('footer#criador').style.color = "#ffffff";
    document.body.querySelector('div#res').style.background = " 0 5px #cccccc";
} else {
    document.body.style.background = "#e7e7e7";
}