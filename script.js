var array = [];

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
    txt.innerHTML = (resultado);
}

function limpar(){
    for(var c = 1; c < array.length; c++){
        array = array.splice();
    }
    result = 0
    txt.innerHTML = "";
}