

const chave ="05941abed14b40eaf7514bcf7970d54c"



function colocarDadosNaTela(dados){
    document.querySelector(".h2").innerHTML = "tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor (dados.main.temp) + "°C"
    document.querySelector(".texto").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "umidade " + dados.main.humidity + "%"
    document.querySelector(".previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}

async function buscarCidade(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&lang=pt_br&units=metric`).then( response => response.json())
    console.log(dados)

    colocarDadosNaTela(dados)
    
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".cidade").value

    buscarCidade(cidade)

}