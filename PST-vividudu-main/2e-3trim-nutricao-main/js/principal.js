//atribui o valor da tag h1 para a variável titulo
let titulo = document.querySelector("h1").textContent;
//mostra no console do navegador a variável titulo 
console.log(titulo);
//modifica o valor do titulo para a frase "Fica grandão birlllll"
document.querySelector("h1").textContent = "Fica grandão birlllll";

//-----aqui vamos mexer na tabela de imc-----
//armazena na variavel paciente as informações do prinmeiro paciente
let paciente = document.querySelector("#primeiro-paciente");
console.log(paciente);
//armazena somente as colunas de peso e altura
let tdPeso = paciente.querySelector(".info-peso");
let tdAltura = paciente.querySelector(".info-altura");
//armazena somente as informações de texto de peso e altura
let peso = tdPeso.textContent;
let altura = tdAltura.textContent;

//acessa a coluna do imc e altera o valor para o resultado do calculo
let  tdImc = paciente.querySelector(".info-imc");

//validação dos dados
let pesoEhValido = true;
let alturaEhValida = true;

if(peso < 0 || peso > 1000){
    console.log("Peso inválido");
    tdImc.textContent = "Peso inválido";
    pesoEhValido = false;
}
if(altura < 0 || altura > 3){
    console.log("Altura inválida");
    tdImc.textContent = "Altura inválida";
    alturaEhValida = false;
}

if(pesoEhValido === true && alturaEhValida === true){
    //realiza o calculo do imc
    let imc = peso / (altura * altura);
    console.log(imc);
    tdImc.textContent = imc;
} else{
    tdImc.textContent = "Peso e/ou altura inválidos";
}