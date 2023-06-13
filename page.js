let nome = prompt("Digite o seu nome:")
let montante = prompt("O valor do seu produto:")
let estado = prompt("qual o seu estado?")

alert("O valor do ICMS será aplicado de acordo com o seu estado:")

function taxaEstado(estado){
    let taxa = 0
    switch (estado) {
        case "DF":
            taxa = 1.25
        break
        case "SP":
            taxa = 1.35
        break
    }
    return taxa
}

function valorDesconto(estado){
    let desconto = 0
    switch (estado) {
        case "DF":
            desconto = 10
        break
        case "SP":
            desconto = 3
        break
    }
    return desconto
}

function calculoImposto (valor,taxa){

    let valorFinal = valor * taxa

    return valorFinal
}

function calculoDesconto (valor,desconto){
    let montanteFinal = valor - desconto
    return montanteFinal
}



let montanteFinal = calculoDesconto(calculoImposto(montante,taxaEstado(estado)),valorDesconto(estado))


alert(`O produto com imposto custa: ${montanteFinal}`)
