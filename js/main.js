function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"
    alert("Obrigado por clicar")
}

function redirecionar(){
    window.open("https://github.com/anabcuelbas") //abre em outra guia
    window.location.href = "https://github.com/anabcuelbas" //abre na mesma janela

}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b>Obrigado passar o mouse</b>"
    elemento.innerHTML = "<b>Obrigado passar o mouse</b>"
    //alert("Trocar texto")
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página Carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}







//-----------------------------------------------------------------------------------------


/*
var nome = "Ana Beatriz"
var idade = 10
var idade2 = 8
var frase = "Uma frase curta aleatória"

alert(nome + " tem " + (idade + idade2) + " anos")

console.log(nome)
console.log(idade + idade2)
console.log(frase.replace("curta", "longa"))
*/

/*
var lista = ["maça", "pera", "laranja"]
lista.push("uva") //insere novo elemento na lista
lista.pop() //remove último elemento da lista

console.log(lista) //mostra a lista inteira
console.log(lista[1]) //mostra primeiro elemento
console.log(lista.reverse()) //mostra a lista invertida
console.log(lista.toString()) //transforma o array em string
console.log(lista.join(" - ")) //muda a separação na string
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas.nome)
alert(frutas[1].cor)
*/

//var idade = prompt("Qual sua idade?")

/*
var d = new Date()
alert(d) //mostra dia, horário, mês, etc
alert(d.getDay()) //mostra só o dia
*/